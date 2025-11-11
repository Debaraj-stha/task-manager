import { useRef, useState } from "react";
import { APP_NAME } from "../../constants/content";
import { abstract } from "../../constants/images";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Modal from "../ui/Modal";
import CreateWorkspace from "./CreateWorkspace";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [modalOpen, setOpen] = useState(false)

  // Bubble creation function
  const createBubbles = () => {
    if (!bubbleContainerRef.current || !buttonRef.current) return;

    for (let i = 0; i < 15; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("absolute", "rounded-full", "pointer-events-none");

      // Randomize bubble size and color
      const size = Math.random() * 4 + 2; // 2px to 6px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      const colors = ["#FDE68A", "#FBBF24", "#F87171", "#60A5FA"];
      bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      // Random start position relative to button
      const xOffset = Math.random() * buttonRef.current.offsetWidth - buttonRef.current.offsetWidth / 2;
      bubble.style.left = `50%`;
      bubble.style.top = `0%`;

      bubbleContainerRef.current.appendChild(bubble);

      // Animate bubble
      gsap.fromTo(
        bubble,
        { x: xOffset, y: 0, opacity: 1, scale: 1 },
        {
          y: -50 - Math.random() * 50,
          x: xOffset + Math.random() * 20 - 10,
          opacity: 0,
          scale: Math.random() * 0.5 + 0.5,
          duration: 1.2 + Math.random(),
          ease: "power1.out",
          delay: Math.random() * 0.5,
          onComplete: () => bubble.remove(),
        }
      );
    }
  };

  // Bubble hover handlers
  const handleMouseEnter = () => {
    intervalRef.current = setInterval(createBubbles, 1000);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Animate Hero content on mount
  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current.querySelector("h1"), {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(containerRef.current.querySelector("p"), {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.fromTo(
      containerRef.current.querySelector(".border-transparent-button"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: "power2.out" }
    );
  }, { scope: containerRef });

  const handleButtonClick = () => {
    setOpen(true)

  }

  if (modalOpen) {
    return <CreateWorkspace/>
  }

  return (
    <section
      className="relative text-gray-800 min-h-screen flex items-center justify-center px-6 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${abstract})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero content */}
      <div className="relative max-w-3xl text-center space-y-6 text-white z-10" ref={containerRef}>
        <h1 className="heading-1 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Welcome to <span className="text-blue-400">{APP_NAME}</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Manage your tasks efficiently and collaborate in real time — simple, fast, and powerful.
        </p>

        {/* CTA button with bubble hover effect */}
        <div className="mt-8 relative inline-block">
          <div ref={bubbleContainerRef} className="absolute inset-0 pointer-events-none" />
          <button
            onClick={handleButtonClick}
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-transparent-button px-8 py-3 md:py-4 "
          >
            Get Started
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
