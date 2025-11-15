'use client'

import { useRef } from "react";
import { STORY_PARA1, STORY_PARA2 } from "../../constants/content/about";
import { ABOUT_TEXT_COLOR } from "../../constants/colors";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const current = ref.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate heading
    tl.from(current.querySelector("h2"), {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate paragraphs
    tl.from(current.querySelectorAll(".story-para"), {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");
  }, { scope: ref });

  return (
    <Container>
      <div ref={ref}>
        {/* Heading */}
        <SectionTitle title="Our Story" textColor={ABOUT_TEXT_COLOR.primary} />

        {/* Story Content */}
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <Card className="story-para p-6 bg-gray-900 border border-gray-500  text-gray-100  dark:text-gray-100 shadow-md">
            <p className="text-lg leading-relaxed">{STORY_PARA1}</p>
          </Card>

          <Card className="story-para p-6 bg-gray-900 border border-gray-500  text-gray-100  dark:text-gray-100 shadow-md">
            <p className="text-lg leading-relaxed">{STORY_PARA2}</p>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default StorySection;
