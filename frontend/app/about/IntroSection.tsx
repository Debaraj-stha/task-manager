
'use client'
import { useRef } from "react";
import { ABOUTIMAGE, ABOUTSVG, BLOB } from "../../constants/images";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ABOUT_TEXT_COLOR } from "../../constants/colors";
import { INTRO_PARA } from "../../constants/content/about";
import Image from "next/image";

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null)



  useGSAP(() => {
    if (!ref.current) return
    const current = ref.current
    const t = gsap.timeline()
    t.from(
      current.querySelector("h2"),
      {
        y: 40,
        opacity: 0,
        ease: "power"
      }
    )
    t.from(
      current.querySelector("p"),
      {
        y: 40,
        opacity: 0,
        ease: "power"
      },
      "-=0.1"
    ) //-=0.1 means start animation 0.1 seconds before previous animation finish

  }, { scope: ref })

  return (
    <section className="relative  overflow-hidden py-20 min-h-screen" ref={ref}>
      {/* Decorative SVG at bottom */}

      <Image
        height={400}
        width={500}
        src={ABOUTSVG}
        alt="decorative background"
        className="absolute -bottom-76 left-0 w-full h-auto  pointer-events-none select-none hidden:md:block"
      />


      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className={`text-3xl md:text-4xl font-bold ${ABOUT_TEXT_COLOR.primary}`}>
            About Us
          </h2>
          <p className={`text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0 ${ABOUT_TEXT_COLOR.secondary}`}>
            {INTRO_PARA}
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center relative min-h-[300px] w-full">
          {/* Blob background */}
          <img
            src={BLOB.src}
            alt="decorative blob"
            className="absolute w-full h-auto object-contain  animation-bounce-smooth pointer-events-none select-none"
          />

          {/* Foreground image */}
          <Image
            src={ABOUTIMAGE.src}
            height={200}
            width={500}
            alt="Team working together"
            className="w-full max-w-md rounded-2xl object-cover relative z-10  pointer-events-none select-none"
          />
        </div>


      </div>
    </section>
  );
};

export default IntroSection;
