
import CTA from "../components/common/CTA";
import StorySection from "../components/About/StorySection";
import MissionSection from "../components/About/MissionSection";
import TeamSection from "../components/About/TeamSection";
import IntroSection from "../components/About/IntroSection";
import WrapperContainer from "../components/ui/WrapperContainer";





const AboutPage = () => {
  return (
    <WrapperContainer>
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
    </WrapperContainer>
  );
};

export default AboutPage;
