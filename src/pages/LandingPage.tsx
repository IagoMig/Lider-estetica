import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
export function LandingPage() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 1
  }} className="bg-black min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <Footer />
    </motion.div>;
}