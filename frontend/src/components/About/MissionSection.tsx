import React, { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { MISSION, VISION } from "../../constants/content/about";
import { ABOUT_TEXT_COLOR } from "../../constants/colors";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
const MissionSection = () => {
    const renderSection = (title: string, content: string) => {
        return <div
            className="flex-1  p-8 rounded-2xl shadow-md border border-white/10 hover:shadow-lg hover:scale-105 transition-all hover:bg-gray-700 card"

        >
            <h3 className={`text-xl font-semibold ${ABOUT_TEXT_COLOR.third} mb-3`}>{title}</h3>
            <p className="leading-relaxed">
                {content}
            </p>
        </div>
    }

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
        t.from(current.querySelectorAll(".card"), {
            opacity: 0,
            y: 40,
            stagger:0.2,

        })

    }, { scope: ref })

    return (
        <section className="container mx-auto px-6 py-16 text-center text-gray-900" ref={ref}>
            <SectionTitle title="Our Mission & Vision" textColor={`${ABOUT_TEXT_COLOR.primary}`} />

            <div className={`flex flex-col md:flex-row gap-10 mt-8 items-start md:items-stretch ${ABOUT_TEXT_COLOR.secondary}`}>
                {/* Mission */}
                {renderSection(
                    "Our Mission",
                    MISSION

                )}

                {/* Vision */}
                {renderSection(
                    "Our Vision",
                    VISION

                )}
            </div>
        </section>
    );
};

export default MissionSection;
