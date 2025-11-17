'use client'

import { useRef, useEffect } from "react";
import { APP_NAME } from "../constants/content";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { HEROBG } from "@/constants/images";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<HTMLDivElement[]>([]);


  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current.querySelectorAll(".fade-up"), {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.9,
      ease: "power2.out",
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center+=100",
      onEnter: () =>
        gsap.to(".hero-description", {
          color: "#E2E8F0",
          duration: 0.6,
          ease: "power1.out",
        }),
    });
  }, []);

  

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 text-white 
      overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${HEROBG.src}")` }}
    >
      {/* Subtle dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

   
 

      {/* Main Content */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-3xl text-center space-y-7"
      >
        <h1 className="fade-up text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug">
          Work Smarter.<br />
          <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Organize Life with {APP_NAME}
          </span>
        </h1>

        <p className="fade-up hero-description text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          A powerful workspace designed for focus. Plan tasks, collaborate
          effortlessly, and stay on top of what truly matters.
        </p>

        <div className="fade-up mt-10">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all shadow-lg"
          >
            🚀 Start for Free
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="fade-up mt-16 animate-bounce text-sm text-gray-300 opacity-75 tracking-wide">
          Scroll to explore ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;
