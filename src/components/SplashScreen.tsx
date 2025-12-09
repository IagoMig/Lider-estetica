import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface SplashScreenProps {
  onComplete: () => void;
}
export function SplashScreen({
  onComplete
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return <AnimatePresence>
      {isVisible && <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden" exit={{
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }}>
          {/* Speed Lines Background */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute h-[2px] bg-[#39FF14]" style={{
          top: `${Math.random() * 100}%`,
          left: '-10%',
          width: `${Math.random() * 30 + 10}%`
        }} animate={{
          x: ['0vw', '120vw'],
          opacity: [0, 1, 0]
        }} transition={{
          duration: Math.random() * 0.5 + 0.3,
          repeat: Infinity,
          ease: 'linear',
          delay: Math.random() * 2
        }} />)}
          </div>

          {/* Logo Reveal */}
          <div className="relative z-10 text-center">
            <motion.div initial={{
          scale: 0.5,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 200
        }} className="mb-4">
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase" style={{
            textShadow: '0 0 20px rgba(57, 255, 20, 0.5)'
          }}>
                LÍDER
              </h1>
              <motion.div className="h-2 w-full bg-[#39FF14] mt-2 skew-x-[-20deg]" initial={{
            width: 0
          }} animate={{
            width: '100%'
          }} transition={{
            delay: 0.4,
            duration: 0.4
          }} />
            </motion.div>

            <motion.p initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.6
        }} className="text-[#39FF14] font-bold tracking-[0.5em] text-sm md:text-lg uppercase">
              Estética Automotiva
            </motion.p>
          </div>
        </motion.div>}
    </AnimatePresence>;
}