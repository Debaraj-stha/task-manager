'use client'

import { useRef } from "react";
import { MISSION, VISION } from "../../constants/content/about";
import { ABOUT_TEXT_COLOR } from "../../constants/colors";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        const current = ref.current;
        const t = gsap.timeline({
            scrollTrigger: {
                trigger: current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate Section Title
        t.from(current.querySelector("h2"), {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
        });

        // Animate cards
        gsap.fromTo(
            current.querySelectorAll(".mission-card"),
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
        );
    }, { scope: ref });

    const renderSection = (title: string, content: string) => (
        <Card
            className="mission-card p-6 bg-gray-900 border border-gray-500  text-gray-100  dark:text-gray-100 shadow-md"
        >
            <h3 className={`text-xl font-semibold  mb-3`}>{title}</h3>
            <p className="leading-relaxed ">{content}</p>
           <div>
             <Button variant={"ghost"} className="hover:bg-blue-600 transition-colors  cursor-pointer hover:text-white">Read More</Button>
           </div>
        </Card>
    );

    return (
        <Container>
            <div ref={ref}>
                <SectionTitle title="Our Mission & Vision" textColor={`${ABOUT_TEXT_COLOR.primary}`} />

                <div className="flex flex-col md:flex-row gap-10 mt-8 items-start md:items-stretch">
                    {renderSection("Our Mission", MISSION)}
                    {renderSection("Our Vision", VISION)}
                </div>
            </div>
        </Container>
    );
};

export default MissionSection;
