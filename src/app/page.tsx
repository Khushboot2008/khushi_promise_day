"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import NameInput from "@/components/NameInput";
import SuccessScreen from "@/components/SuccessScreen";
import FailureScreen from "@/components/FailureScreen";

type GameState = "loading" | "input" | "success" | "failure";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("loading");

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {gameState === "loading" && (
          <LoadingScreen 
            key="loading" 
            onLoadingComplete={() => setGameState("input")} 
          />
        )}

        {gameState === "input" && (
          <NameInput 
            key="input"
            onAuthorized={() => setGameState("success")}
            onUnauthorized={() => setGameState("failure")}
          />
        )}

        {gameState === "success" && (
          <SuccessScreen key="success" />
        )}

        {gameState === "failure" && (
          <FailureScreen 
            key="failure"
            onRetry={() => setGameState("input")}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
