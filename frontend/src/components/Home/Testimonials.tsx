import  { useRef } from "react";
import { TESTIMONIALS } from "../../constants/content/home";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SectionTitle from "../common/SectionTitle";
import { HOME_TEXT_COLOR } from "../../constants/colors";



gsap.registerPlugin(ScrollTrigger);
const Testimonials = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current.querySelectorAll(".card"),
      { 
         opacity: 0 },
      {
        
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
    <section className="container mx-auto py-20">
      <div className=" mx-auto  text-center">
      <SectionTitle title="What people says" textColor={`${HOME_TEXT_COLOR.primary}`}/>

        <div className="grid gap-4 md:gap-8 md:grid-cols-3 mt-6" ref={ref}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="border border-white/10 card bg-gray-900 rounded-xl opacity-95 hover:opacity-100 shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all
              hover:scale-105
              "
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className={`${HOME_TEXT_COLOR.secondary} mb-4`}>"{t.feedback}"</p>
              <h3 className={`font-semibold ${HOME_TEXT_COLOR.primary}`}>{t.name}</h3>
              <p className={`text-sm ${HOME_TEXT_COLOR.secondary}`}>{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
