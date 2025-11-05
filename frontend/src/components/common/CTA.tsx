import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ROUTES } from "../../constants/routes";
gsap.registerPlugin(ScrollTrigger)
const CTA = () => {
  const ref = useRef<HTMLDivElement>(null);


  useGSAP(
    () => {
      if (!ref.current) return;

      const heading = ref.current.querySelector("h2");
      const paragraph = ref.current.querySelector("p");
      const buttons = ref.current.querySelectorAll(".button");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });




      // Animate heading
      if (heading)
        tl.from(heading, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

      // Animate paragraph
      if (paragraph)
        tl.from(
          paragraph,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4" // overlap previous animation
        );

      // Animate buttons
      if (buttons)
        tl.fromTo(
          buttons,
          {
            opacity: 0,
            y: 20
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: ref }
  );

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-4xl mx-auto text-center px-6" ref={ref}>
        {/* Heading */}
        <h2 className="heading-2 md:text-5xl text-white mb-6">
          Ready to boost your productivity?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-blue-100 mb-8">
          Join thousands of users who manage their tasks efficiently in real-time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to={`${ROUTES.LOGIN}`}
            className="button button-white"
            style={{ opacity: 0 }}
          >
            Get Started
          </Link>
          <Link
            to={`${ROUTES.LEARN_MORE}`}
            style={{ opacity: 0 }}
            className="button border-transparent-button"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
