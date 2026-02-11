"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { FAILURE_MESSAGES } from "@/lib/constants";

interface FailureScreenProps {
  onRetry: () => void;
}

export default function FailureScreen({ onRetry }: FailureScreenProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(FAILURE_MESSAGES[Math.floor(Math.random() * FAILURE_MESSAGES.length)]);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-center">
      <motion.div
        initial={{ x: -10 }}
        animate={{ x: [0, -10, 10, -10, 10, 0] }} // Shake animation
        transition={{ duration: 0.5 }}
        className="bg-red-950/50 backdrop-blur-md p-8 rounded-2xl border border-red-800 shadow-2xl max-w-md w-full"
      >
        <div className="mx-auto bg-red-900/50 w-fit p-4 rounded-full mb-6">
          <AlertCircle className="h-16 w-16 text-red-500" />
        </div>
        
        <h2 className="text-3xl font-bold text-red-400 mb-4">Oops!</h2>
        <p className="text-xl text-red-200 mb-8 font-medium">
          {message}
        </p>

        <Button 
          onClick={onRetry}
          variant="destructive"
          className="w-full h-12 text-lg hover:scale-105 transition-transform"
        >
          <RefreshCcw className="mr-2 h-5 w-5" />
          Try Again
        </Button>
      </motion.div>
    </div>
  );
}
