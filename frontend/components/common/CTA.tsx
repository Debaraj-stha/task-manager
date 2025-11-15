"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "../../constants/routes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const heading = ref.current.querySelector("h2");
    const paragraph = ref.current.querySelector("p");
    const buttons = ref.current.querySelectorAll(".cta-btn");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      }
    });

    tl.from(heading, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(paragraph, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")
      .fromTo(buttons,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

  }, []);

  return (
    <section className="bg-gray-900 text-white py-24 shadow-2xl border-t border-gray-600">
      <div ref={ref} className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to boost your productivity?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of users who manage their tasks efficiently in real-time.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href={ROUTES.LOGIN}>
            <Button
              size="lg"
              className="cta-btn font-semibold cursor-pointer"
              style={{ opacity: 0 }}
            >
              Get Started
            </Button>
          </Link>

          <Link href={ROUTES.LEARN_MORE}>
            <Button
              variant="outline"
              size="lg"
              className="cta-btn border-white cursor-pointer text-gray-800 dark:text-gray-900 font-semibold hover:bg-gray-800 hover:text-gray-100 transition"
              style={{ opacity: 0 }}
            >
              Learn More
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTA;
