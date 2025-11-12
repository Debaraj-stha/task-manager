
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TEAMS } from "../../constants/content/about";
import SectionTitle from "../common/SectionTitle";
import { ABOUT_TEXT_COLOR } from "../../constants/colors";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Container from "../ui/Container";
gsap.registerPlugin(ScrollTrigger)
const TeamSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (!ref.current) return

    const current = ref.current;
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        toggleActions: "play none none reverse",


      }
    }
    )
    t.from(current.querySelector("h2"), {
      opacity: 0,
      y: 40,

    })
    t.fromTo(current.querySelectorAll(".grid-card"), {
      opacity: 0,
      stagger: 0.2,
      y:40

    },
  {
    opacity:1,
    stagger:0.1,
    y:0
  },"-=0.2")

  }, { scope: ref })

  return (
    <Container ref={ref}>
       <SectionTitle title="Meet Our Team" textColor={ABOUT_TEXT_COLOR.primary} />

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 ${ABOUT_TEXT_COLOR.secondary} `}>
        {TEAMS.map((member, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105 border
             border-white/10 grid-card hover:bg-white/10 "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-white/20 pointer-events-auto select-none"
            />
            <h3 className="text-lg font-semibold ">{member.name}</h3>
            <p className={`text-sm ${ABOUT_TEXT_COLOR.third}`}>{member.role}</p>
            <p className="text-sm mt-2">{member.bio}</p>

            <div className="flex justify-center gap-4 mt-4">
              <a href={member.socials.github} target="_blank" rel="noreferrer">
                <FaGithub className=" hover:text-blue-600 transition" />
              </a>
              <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className=" hover:text-blue-600 transition" />
              </a>
              <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className=" hover:text-blue-600 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default TeamSection;
