import  { useRef } from "react";
import { TESTIMONIALS } from "../../constants/content/home";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SectionTitle from "../common/SectionTitle";



gsap.registerPlugin(ScrollTrigger);
const Testimonials = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current.querySelectorAll(".card"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        stagger: 0.1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current.querySelectorAll(".card")[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, { scope: ref });
  return (
    <section className="container mx-auto bg-gradient-to-r from-blue-50 to-gray-100 py-20">
      <div className=" mx-auto  text-center">
      <SectionTitle title="What people says"/>

        <div className="grid gap-4 md:grid-cols-3" ref={ref}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card bg-white rounded-xl opacity-95 hover:opacity-100 shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4">"{t.feedback}"</p>
              <h3 className="font-semibold text-gray-800">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
