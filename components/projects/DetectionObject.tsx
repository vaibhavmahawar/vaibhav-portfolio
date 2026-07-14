"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders a real captured photo of the detected object (drone/bird) when one
 * has been provided in /public/detections. If the image is missing or fails to
 * load, it gracefully falls back to a silhouette placeholder — so the dashboard
 * always looks intentional.
 *
 * To use real photos, drop images at:
 *   public/detections/drone.jpg
 *   public/detections/bird.jpg
 */
export default function DetectionObject({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image may finish (and fail) loading before React hydrates and attaches
  // the onError handler — common on fast production/CDN loads (e.g. Vercel).
  // Re-check completion state on mount so the fallback still renders.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-contain p-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
    />
  );
}
