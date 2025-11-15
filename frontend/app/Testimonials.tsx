'use client'

import { useRef } from "react";
import { TESTIMONIALS } from "../constants/content/home";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardTitle } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { capitalize } from "@/utils/helper";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const cards = ref.current.querySelectorAll(".card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="container mx-auto py-20 bg-white text-gray-900">
      <div className="mx-auto text-center">
        <SectionTitle title="People Views" />

        <div className="grid gap-4 md:gap-8 md:grid-cols-3 mt-6" ref={ref}>
          {TESTIMONIALS.map((t, i) => (
            <Card
              key={i}
              className="card border border-gray-200 bg-gray-50 flex justify-center items-center
              p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1
              transition-all"
            >
              <Avatar className="size-16">
                <AvatarImage src={t.avatar} alt={t.name} className="object-center" />
                <AvatarFallback>{t.name.split(" ").map((w)=>capitalize(w)![0]).join(" ")}</AvatarFallback>
              </Avatar>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{t.feedback}"
              </p>
              <CardTitle className="">{t.name}</CardTitle>
              <p className="text-sm text-gray-500">{t.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
