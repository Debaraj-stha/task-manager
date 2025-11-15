'use client'

import { useRef, useState, useEffect } from "react";
import { APP_NAME } from "../constants/content";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [modalOpen, setOpen] = useState(false);

  const colors = ["#FDE68A", "#FBBF24", "#F87171", "#60A5FA"];

  const createBubbles = () => {
    if (!bubbleContainerRef.current || !buttonRef.current) return;

    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("absolute", "rounded-full", "pointer-events-none");

      const size = Math.random() * 6 + 4;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      bubble.style.left = "50%";
      bubble.style.top = "50%";

      bubbleContainerRef.current.appendChild(bubble);

      const x = (Math.random() - 0.5) * 120;
      const y = -80 - Math.random() * 60;

      gsap.fromTo(
        bubble,
        { x: 0, y: 0, opacity: 1, scale: 1 },
        {
          x,
          y,
          opacity: 0,
          scale: Math.random() * 0.6 + 0.4,
          duration: 1.5,
          ease: "power1.out",
          onComplete: () => bubble.remove(),
        }
      );
    }
  };

  useGSAP(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.7 } });

    tl.from(containerRef.current.querySelectorAll(".fade-up"), {
      opacity: 0,
      y: 40,
      stagger: 0.15,
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 
      bg-linear-to-br from-gray-900 via-blue-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      {/* Main content */}
      <div
        ref={containerRef}
        className="relative max-w-3xl text-center space-y-6 z-10"
      >
        <h1 className="fade-up text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
          Organize better with{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {APP_NAME}
          </span>
        </h1>

        <p className="fade-up text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Smart task tracking, team collaboration, and a seamless experience —
          all in one workspace.
        </p>

        <div className="fade-up mt-8 relative inline-block">
          <div ref={bubbleContainerRef} className="absolute inset-0" />
          <Button
          variant={"secondary"}
            ref={buttonRef}
            onClick={() => setOpen(true)}
            onMouseEnter={createBubbles}
            className=" relative"
          >
            Get Started ✨
          </Button>
        </div>
      </div>

      {/* Decorative floating gradient blobs */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-blue-500/30 blur-3xl rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full opacity-60" />
    </section>
  );
};

export default Hero;
