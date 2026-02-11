"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Stars } from "lucide-react";
import { SUCCESS_MESSAGES } from "@/lib/constants";

export default function SuccessScreen() {
  const [message, setMessage] = useState("");
  
  // Pick a random message on mount
  useEffect(() => {
    setMessage(SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]);
    
    // Fire confetti dynamically
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
    });

  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 p-8 text-center ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20 
        }}
        className="mb-8"
      >
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-2xl w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-2 border-pink-200 flex flex-col max-h-[80vh]"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-rose-600 font-serif mb-6 shrink-0">
          Happy Promise Day ! 💖
        </h1>
        
        <div className="space-y-4 text-lg md:text-xl text-gray-800 leading-relaxed font-medium overflow-y-auto pr-2 custom-scrollbar mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {message}
          </motion.p>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2 }}
          >
            I promise to always be there for you, through thick and thin. You are my everything.
            <br/>
            Khushi yarr mera bacha sach bolu na tu meri life me aayi us din se sab kuch alag sa ho gaya pehle sab normal tha bas din nikalte the par ab har cheez me tu hai subah uthta hoon toh sabse pehla khayal tera aata hai raat ko sota hoon toh last thought bhi tu hi hoti hai aur pata nahi kaise par tu meri aadat ban gayi hai woh wali aadat jo chhodne ka mann hi nahi karta,
            tere saamne bas pighal jata hoon kyunki tu meri safe jagah hai meri ghar jaisi feeling hai tu samjhi na tu sirf meri pyaar nahi hai tu meri best friend meri partner meri bacchi sab kuch hai aur main tujhe seedha sa promise karta hoon ki chahe kuch bhi ho jaye life ulta pulta ho jaye fights ho distance ho problems ho ya pura world against ho jaye main tera haath kabhi nahi chhodunga 🤞 tu gussa kare chillaye roye ya mujhe ignore kare phir bhi main wahi rahunga tere side me jaise ek pagal insaan jo bas bolta rahe main hoon na tension mat le 😌....✨ tu meri sunshine hai meri peace hai meri forever wali feeling hai aur haan madam lifetime ke liye booked hai tu kyunki main sach me tere saath buddha hona chahta hoon walks pe jaana chai pe baatein karna random fights karna aur phir tujhko manaana bas yahi simple sa future chahiye mujhe 💞 toh yaad rakh chahe kuch bhi ho jaye tera banda hamesha tere saath khada rahega silently loudly stupidly par forever pakka wala forever ❤️🫶

            Iiii Looooveeee youuuuuuuuuu meraa bachaaa....
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="fixed bottom-0 w-full h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.8), transparent)"
        }}
      />
    </div>
  );
}
