import  {  useRef } from "react";
import { FEATURES } from "../../constants/content/common";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const featureRefs = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!featureRefs.current) return
        gsap.fromTo(
            featureRefs.current.querySelectorAll(".card"),
            { y: 50, opacity: 0 },
            {
                y: 0,
                stagger: 0.1,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: featureRefs.current.querySelectorAll(".card")[0],
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

    }, { scope: featureRefs });

    return (
        <div className="container mx-auto py-20 space-y-10">
            <SectionTitle title="Features"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={featureRefs}>
                {FEATURES.map((feature, i) => (
                    <div
                        key={i}

                        className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition-transform duration-300 card"
                    >
                        <div className="text-4xl mb-3">{feature.icon}</div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
