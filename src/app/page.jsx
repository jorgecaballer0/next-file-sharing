"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
