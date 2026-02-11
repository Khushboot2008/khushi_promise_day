"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Stars } from "lucide-react";
import { ACCEPTED_NAMES } from "@/lib/constants";

interface NameInputProps {
  onAuthorized: () => void;
  onUnauthorized: () => void;
}

export default function NameInput({ onAuthorized, onUnauthorized }: NameInputProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normalize input: remove spaces, convert to lowercase
    const normalizedInput = name.replace(/\s+/g, "").toLowerCase();
    
    // Check against authorized names (normalized)
    const isValid = ACCEPTED_NAMES.some(
      (authorizedName) => authorizedName.replace(/\s+/g, "").toLowerCase() === normalizedInput
    );

    if (isValid) {
      onAuthorized();
    } else {
      setError(true);
      // Shake effect logic handled by framer motion on the card or input
      setTimeout(() => {
        onUnauthorized(); // Navigate to failure screen
      }, 500); 
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-background to-secondary/30">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md border-primary/20 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-2">
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="mx-auto bg-primary/10 p-3 rounded-full w-fit"
            >
              <Stars className="h-8 w-8 text-primary" />
            </motion.div>
            <CardTitle className="text-2xl font-serif text-primary">Warning: Love Zone</CardTitle>
            <p className="text-muted-foreground text-sm">Please identify yourself to proceed ❤️</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError(false);
                  }}
                  className={`text-center text-lg h-12 border-primary/20 focus-visible:ring-primary ${
                    error ? "border-destructive ring-destructive" : ""
                  }`}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full text-lg h-12 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
                disabled={!name.trim()}
              >
                Let me in <Heart className="ml-2 h-4 w-4 fill-current" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
