'use client'

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import WrapperContainer from "@/components/layout/WrapperContainer";
import SectionTitle from "@/components/common/SectionTitle";
import ContactForm from "@/components/forms/ContactForm";
import ContactIllustration from "./ContactIllustration";
import ContactInfo from "./ContactInfo";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const t = gsap.timeline({});

    t.from(ref.current.querySelector("h2"), {
      opacity: 0,
      y: 30,
      ease: "back",
      duration: 0.2,
    });
    t.from(ref.current.querySelector("p"), {
      opacity: 0,
      y: 40,
    }, "-=0.1");

    t.from(ref.current.querySelectorAll(".input-card"), {
      x: 30,
      stagger: 0.2,
      ease: "power1",
      opacity: 0,
      duration: 0.2,
    }, "-=0.1");

    t.from(ref.current.querySelector("img"), {
      opacity: 0,
      scale: 0.4,
      y: 40,
      duration: 0.2,
    }, "-=0.1");

    t.from(ref.current.querySelector("button"), {
      x: 30,
      opacity: 0,
    }, "-=0.1");

    t.from(ref.current.querySelectorAll(".contact-info-card"), {
      opacity: 0,
      stagger: 0.1,
      y: 30,
    }, "-=0.2");
  }, { scope: ref });

  return (
    <WrapperContainer>
      <div className="py-20 bg-linear-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto backdrop-blur-md shadow-lg rounded-2xl p-10">
          {/* Title */}
          <SectionTitle title="Get in Touch" textColor="text-gray-100" />

          <p className="max-w-2xl leading-relaxed mb-10 text-gray-200">
            Have a question, feedback, or partnership idea? We’d love to hear from you.
            Fill out the form below, and our team will get back to you shortly.
          </p>

          {/* Main Content */}
          <section ref={ref} className="flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Contact Form wrapped in SadCN Card */}
            <Card className="flex-1 p-6 shadow-lg bg-gray-800 text-white border border-white/10">
              <ContactForm />
            </Card>

            {/* Illustration */}
            <div className="flex-1">
              <ContactIllustration />
            </div>
          </section>

          {/* Contact Info */}
          <div className="mt-12">
            <ContactInfo />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ContactPage;
