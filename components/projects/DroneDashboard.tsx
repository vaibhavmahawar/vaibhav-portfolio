"use client";

import { motion } from "framer-motion";
import { RealisticDrone, RealisticBird } from "@/components/assets/DetectionObjects";
import DetectionObject from "./DetectionObject";

/**
 * Simulated real-time drone command interface: thermal target acquisition,
 * animated YOLO bounding boxes, telemetry HUD and a live FPS / detection feed.
 * Purely visual — communicates the flagship project's capability at a glance.
 */
export default function DroneDashboard() {
  return (
    <div className="terminal-grid relative min-h-[360px] w-full overflow-hidden bg-surface-container-lowest lg:min-h-full">
      <div className="scan-line opacity-60" />

      {/* Top HUD */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="border border-primary-fixed-dim/30 bg-black/60 p-2 font-mono text-[10px] sm:text-xs">
            <div className="text-primary-fixed-dim">TARGET_ACQUISITION</div>
            <div className="text-on-surface-variant">CAM_01 // THERMAL_OVERLAY</div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="flex items-center gap-1.5 border border-red-500/40 bg-red-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-red-400">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-red-400"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              LIVE
            </span>
            <span className="border border-primary-fixed-dim/40 bg-primary-fixed-dim/20 px-2 py-0.5 font-mono text-[10px] font-bold text-primary-fixed-dim">
              LAT 28.6139 | LON 77.2090
            </span>
          </div>
        </div>

        {/* Bounding boxes */}
        <motion.div
          className="absolute left-[20%] top-[30%] h-32 w-28 border-2 border-primary-fixed-dim/70 sm:h-36 sm:w-32"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <DetectionObject
            src="/detections/drone.jpg"
            alt="Detected drone"
            fallback={<RealisticDrone className="absolute inset-0 h-full w-full p-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />}
          />
          <span className="absolute -top-[15px] left-0 bg-primary-fixed-dim px-1 text-[8px] font-bold text-black">
            ID_042 // DRONE (0.94)
          </span>
          <span className="absolute bottom-0.5 right-1 font-mono text-[8px] text-primary-fixed-dim drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            DIST 14.2m
          </span>
        </motion.div>

        <motion.div
          className="absolute bottom-[24%] right-[26%] h-24 w-24 border-2 border-tertiary-fixed-dim/70"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <DetectionObject
            src="/detections/bird.jpg"
            alt="Detected bird"
            fallback={<RealisticBird className="absolute inset-0 h-full w-full p-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />}
          />
          <span className="absolute -top-[15px] left-0 bg-tertiary-fixed-dim px-1 text-[8px] font-bold text-black">
            ID_043 // BIRD
          </span>
          <span className="absolute bottom-0.5 right-1 font-mono text-[8px] text-tertiary-fixed-dim drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            NON_THREAT
          </span>
        </motion.div>

        {/* Bottom HUD */}
        <div className="flex items-end justify-between">
          <div className="h-20 w-40 overflow-hidden border border-outline-variant/30 bg-black/40 p-2 sm:w-48">
            <div className="flex h-full items-end gap-1">
              {[0.5, 0.75, 0.33, 1, 0.5, 0.66, 0.4].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-primary-fixed-dim"
                  style={{ opacity: 0.4 + h * 0.6 }}
                  animate={{ height: [`${h * 100}%`, `${Math.min(100, h * 130)}%`, `${h * 100}%`] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.12 }}
                />
              ))}
            </div>
          </div>
          <div className="text-right font-mono text-xs">
            <div className="text-primary-fixed-dim">FPS 60.2</div>
            <div className="text-on-surface-variant">YOLOv8_ENGINE: ACTIVE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
