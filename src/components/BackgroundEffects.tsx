import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Subtle mouse spotlight glow */}
      <motion.div
        className="hidden md:block absolute w-[600px] h-[600px] rounded-full opacity-35 blur-[100px] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: smoothX,
          top: smoothY,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(20, 184, 166, 0.05) 50%, transparent 80%)'
        }}
      />

      {/* Floating Animated Ambient Blobs */}
      <motion.div
        className="absolute -top-32 -left-20 w-[550px] h-[550px] rounded-full opacity-40 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, #D1FAE5 0%, #E0F2FE 40%, transparent 70%)'
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full opacity-35 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #CCFBF1 0%, #FEF3C7 50%, transparent 75%)'
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, #EBE4D5 0%, #D1FAE5 45%, transparent 75%)'
        }}
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  );
};
