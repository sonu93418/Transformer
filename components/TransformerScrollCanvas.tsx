"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import {
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { motion } from "framer-motion";

interface TransformerScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
  fileExtension?: string;
}

export default function TransformerScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
  fileExtension = "jpg",
}: TransformerScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalFrames - 1]
  );

  /**
   * Draw a single frame onto the canvas using "contain" logic so the
   * subject stays centered and fully visible regardless of aspect ratio.
   */
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const displayW = canvas.clientWidth;
    const displayH = canvas.clientHeight;

    // Resize the backing store only when necessary
    if (canvas.width !== displayW * dpr || canvas.height !== displayH * dpr) {
      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
      ctx.scale(dpr, dpr);
    }

    // Enable high-quality image rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Fill background with dark color
    ctx.fillStyle = "#0b0b0b";
    ctx.fillRect(0, 0, displayW, displayH);

    // "contain" logic — fit entire image inside canvas, preserve aspect ratio
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = displayW / displayH;

    let drawW: number, drawH: number, drawX: number, drawY: number;
    
    if (imgRatio > canvasRatio) {
      // Image is wider — fit to width, add letterboxing top/bottom
      drawW = displayW;
      drawH = displayW / imgRatio;
      drawX = 0;
      drawY = (displayH - drawH) / 2;
    } else {
      // Image is taller — fit to height, add pillarboxing left/right
      drawH = displayH;
      drawW = displayH * imgRatio;
      drawX = (displayW - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  /**
   * Preload all frame images progressively with high quality.
   */
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      // Enable CORS for better quality handling
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.src = `${imageFolderPath}${i + 1}.${fileExtension}`;
      img.onload = () => {
        loaded++;
        loadedCountRef.current = loaded;
        const progress = (loaded / totalFrames) * 100;
        setLoadProgress(progress);
        
        // Draw the first frame once it's ready
        if (i === 0 && canvasRef.current) {
          drawFrame(0);
        }
        
        // Hide loading once all images are loaded
        if (loaded === totalFrames) {
          setTimeout(() => setIsLoading(false), 300);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      // Cleanup
      images.forEach((img) => {
        img.onload = null;
        img.src = "";
      });
    };
  }, [totalFrames, imageFolderPath, fileExtension, drawFrame]);

  /**
   * Respond to scroll changes.
   */
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const idx = Math.round(latest);
    if (idx === currentFrameRef.current) return;
    currentFrameRef.current = idx;

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      drawFrame(idx);
    });
  });

  /**
   * Handle window resize — redraw current frame.
   */
  useEffect(() => {
    const onResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawFrame]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ display: "block", willChange: "transform" }}
      />
      
      {/* Loading Screen */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0b0b]"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Autobot Logo Animation */}
          <div className="relative mb-8">
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 border-4 border-[#B71C1C] rounded-sm relative"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute inset-2 border-2 border-[#B71C1C]/50 rounded-sm" />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#B71C1C]"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div
            className="font-heading text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Initializing Transformation
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 md:w-80 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#B71C1C] via-white to-[#B71C1C] bg-size-200 animate-shimmer"
              style={{ width: `${loadProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress Percentage */}
          <motion.div
            className="font-mono text-xs md:text-sm text-white/40 mt-4 tracking-wider"
            key={Math.floor(loadProgress)}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {Math.floor(loadProgress)}% • {loadedCountRef.current}/{totalFrames} frames
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
