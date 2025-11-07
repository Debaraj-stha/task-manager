import WrapperContainer from "../components/ui/WrapperContainer";
import {  CONTACTUSBG } from "../constants/images";
import SectionTitle from "../components/common/SectionTitle";
import { CONTACT_TEXT_COLOR } from "../constants/colors";
import ContactForm from "../components/Coontact/ContactForm";
import ContactIllustration from "../components/Coontact/ContactIllustration";
import ContactInfo from "../components/Coontact/ContactInfo";


const ContactPage = () => {
    return (
        <WrapperContainer>
            {/* Background section */}
            <div
                style={{ backgroundImage: `url("${CONTACTUSBG}")` }}
                className="bg-fixed bg-cover bg-center py-20"
            >
                <div
                    className="container mx-auto bg-white/90 backdrop-blur-md shadow-lg rounded-2xl 
                     p-10 transition-transform hover:scale-[1.01]"
                >
                    {/* Title + Intro */}
                    <SectionTitle
                        title="Get in Touch"
                        textColor={`text-left ${CONTACT_TEXT_COLOR.third}`}
                    />

                    <p
                        className={`max-w-2xl leading-relaxed mb-10 text-xs md:text-sm ${CONTACT_TEXT_COLOR.secondary}`}
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
