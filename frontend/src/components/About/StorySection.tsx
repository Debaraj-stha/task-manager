import React, { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { STORY_PARA1, STORY_PARA2 } from "../../constants/content/about";
import { ABOUT_TEXT_COLOR } from "../../constants/colors";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)
const StorySection = () => {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (!ref.current) return

    const current = ref.current;
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "play none none reverse",
        scrub: true,

      }
    }
    )
    t.from(current.querySelector("h2"), {
      opacity: 0,
      y: 40,

    })
    t.from(current.querySelectorAll("p"), {
      opacity: 0,
      y: 40,
       stagger:0.2,

    })

  }, { scope: ref })
  
  return (
    <section className="container mx-auto px-6 py-16 text-center" ref={ref}>
      {/* Heading */}
      <SectionTitle title="Our Story" textColor={ABOUT_TEXT_COLOR.primary} />

      {/* Animated content */}
      <div
        className={`mx-auto space-y-5 mt-8 leading-relaxed ${ABOUT_TEXT_COLOR.secondary}`}

      >
        <p className="text-lg ">
          {STORY_PARA1}
        </p>

        <p className="">
          {STORY_PARA2}
        </p>
      </div>
    </section>
  );
};

export default StorySection;
