
import CTA from "../components/common/CTA";
import StorySection from "../components/About/StorySection";
import MissionSection from "../components/About/MissionSection";
import TeamSection from "../components/About/TeamSection";
import IntroSection from "../components/About/IntroSection";





const AboutPage = () => {
  return (
    <div className="min-h-screen mx-auto  flex flex-col bg-linear-to-r from-gray-900 to-gray-800">

      {/* <div className="max-w-6xl mx-auto"> */}
       <IntroSection />
        {/* Company Story */}
        <StorySection />

        {/* Mission & Vision */}
        <MissionSection />

        {/* Team Section */}
        <TeamSection />
      {/* </div> */}


      {/* Call To Action */}
      <CTA />
    </div>
  );
};

export default AboutPage;
