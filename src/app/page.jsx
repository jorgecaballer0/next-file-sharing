"use client";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Home() {
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Header />
      <h1 className="w-1/2 p-2 mx-auto text-2xl italic text-center border">
        Next file sharing
      </h1>
      <motion.div animate={{ x: 250 }} initial={{ x: -250 }} exit={{ x: -250 }}>
        ¡Hola, mundo!
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
      >
        ¡Hola, mundo!
      </motion.div>
      </>
  );
}
