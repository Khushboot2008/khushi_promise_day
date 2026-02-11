"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Fade out when removed
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      onAnimationComplete={() => {
        // Wait a bit before signaling completion to ensure exit animation plays if handled by parent
        setTimeout(onLoadingComplete, 2500);
      }}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="h-24 w-24 text-primary fill-primary" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-semibold text-foreground/80 font-serif"
        >
          Loading Love...
        </motion.h2>
      </div>
    </motion.div>
  );
}
