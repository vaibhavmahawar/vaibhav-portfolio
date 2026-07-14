"use client";

import { useState, type ReactNode } from "react";

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

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-contain p-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
    />
  );
}
