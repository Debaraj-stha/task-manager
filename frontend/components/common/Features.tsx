"use client";

import { useRef } from "react";
import { FEATURES } from "../../constants/content/common";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionTitle from "./SectionTitle";
import { Card, CardTitle } from "../ui/card";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        const cards = sectionRef.current.querySelectorAll(".feature-card");

        gsap.set(cards, { opacity: 0, y: 40 });

        gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative container mx-auto py-24 space-y-12 text-center"
        >
            <SectionTitle title="Features" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-900 dark:text-gray-100">
                {FEATURES.map((feature, i) => (
                    <Card key={i}
                        className="feature-card group relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        <CardTitle>{feature.title}</CardTitle>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </Card>

                ))}
            </div>

            {/* Decorative blur circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-500/20 blur-3xl rounded-full" />
        </section>
    );
};

export default Features;
