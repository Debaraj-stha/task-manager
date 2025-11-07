import WrapperContainer from "../components/ui/WrapperContainer";
import { CONTACTUSBG } from "../constants/images";
import SectionTitle from "../components/common/SectionTitle";
import { CONTACT_TEXT_COLOR } from "../constants/colors";
import ContactForm from "../components/Coontact/ContactForm";
import ContactIllustration from "../components/Coontact/ContactIllustration";
import ContactInfo from "../components/Coontact/ContactInfo";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";



const ContactPage = () => {
    const ref = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        if (!ref.current) return
        const t = gsap.timeline({
        }
        )
 
        t.from(ref.current.querySelector("h2"), {
            opacity: 0,
            y: 30,
            ease: "back",
            duration: 0.2,
        })
        t.from(ref.current.querySelector("p"), {
            opacity: 0,
            y: 40
        }, "-=0.1")

        t.from(ref.current.querySelectorAll(".input-card"), {
            x: 30,
            stagger: 0.2,
            ease: "power1",
            opacity: 0,
            duration: 0.2,
        }, "-=0.1")

        t.from(ref.current.querySelector("img"), {
            opacity: 0,
            scale: 0.4,
            y: 40,
            duration: 0.2
        }, "-=0.1")
        t.from(ref.current.querySelector("button"), {
            x: 30,
            opacity: 0,

        }, "-=0.1")

        t.from(ref.current.querySelectorAll(".contact-info-card"),{
            opacity:0,
            stagger:0.1,
            y:30
        },"-=0.2")




    }, { scope: ref })

    return (
        <WrapperContainer>
            {/* Background section */}
            <div
                style={{ backgroundImage: `url("${CONTACTUSBG}")` }}
                className="bg-fixed bg-cover bg-center py-20" ref={ref}
            >
                <div
                    className="container mx-auto bg-linear-to-br from-blue-800 to-purple-900 backdrop-blur-md shadow-lg rounded-2xl 
                     p-10 transition-transform hover:scale-[1.01]"
                >
                    {/* Title + Intro */}
                    <SectionTitle
                        title="Get in Touch"
                        textColor={`text-left ${CONTACT_TEXT_COLOR.third}`}
                    />

                    <p
                        className={`max-w-2xl leading-relaxed mb-10 text-xs md:text-sm ${CONTACT_TEXT_COLOR.primary}`}
                    >
                        Have a question, feedback, or partnership idea? We’d love to hear from you.
                        Fill out the form below, and our team will get back to you shortly.
                    </p>

                    {/* Main content (Form + Illustration) */}
                    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                        {/* Left: Contact Form */}
                        <ContactForm />

                        {/* Right: Illustration */}
                        <ContactIllustration />
                    </section>

                    {/* Contact Info */}
                    <ContactInfo />
                </div>
            </div>
        </WrapperContainer>
    );
};

export default ContactPage;
