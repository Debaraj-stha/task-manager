'use client'

import { TEAMS } from "../../constants/content/about";
import { ABOUT_TEXT_COLOR } from "../../constants/colors";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { capitalize } from "@/utils/helper";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
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

    tl.from(current.querySelector("h2"), { opacity: 0, y: 40, duration: 0.8 });
    tl.fromTo(
      current.querySelectorAll(".team-card"),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 },
      "-=0.4"
    );
  }, { scope: ref });

  return (
    <Container>
      <div ref={ref}>
        <SectionTitle title="Meet Our Team" textColor={ABOUT_TEXT_COLOR.primary} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {TEAMS.map((member, i) => (
            <Card
              key={i}
              className="team-card flex flex-col justify-center items-center text-center bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-500"
            >
              <CardContent className="flex flex-col justify-center items-center text-center gap-2">
                <Avatar className="mb-4 w-20 h-20">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name.split(" ").map((n) => capitalize(n)![0]).join("")}
                  </AvatarFallback>
                </Avatar>

                <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
                <p className={`text-sm ${ABOUT_TEXT_COLOR.third}`}>{member.role}</p>
                <p className="text-sm text-gray-300 text-center">{member.bio}</p>

                <div className="flex gap-4 mt-4 justify-center">
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank" rel="noreferrer">
                      <FaGithub className="hover:text-blue-500 transition-colors" size={20} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                      <FaLinkedin className="hover:text-blue-500 transition-colors" size={20} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                      <FaTwitter className="hover:text-blue-500 transition-colors" size={20} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

          ))}
        </div>
      </div>
    </Container>
  );
};

export default TeamSection;
