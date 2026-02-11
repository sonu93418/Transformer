"use client";

import { useEffect, useRef, useCallback } from "react";
import {
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

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

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      // Enable CORS for better quality handling
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.src = `${imageFolderPath}${i + 1}.${fileExtension}`;
      img.onload = () => {
        loadedCountRef.current++;
        // Draw the first frame once it's ready
        if (i === 0 && canvasRef.current) {
          drawFrame(0);
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
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
