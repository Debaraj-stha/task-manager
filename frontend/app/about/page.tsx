import WrapperContainer from '@/components/layout/WrapperContainer'
import React from 'react'
import IntroSection from './IntroSection'
import StorySection from './StorySection'
import TeamSection from './TeamSection'
import CTA from '@/components/common/CTA'
import MissionSection from './MissionSection'

const page = () => {
  return (
   <WrapperContainer >
    <IntroSection/>
    <StorySection/>
    <MissionSection/>
    <TeamSection/>
    <CTA/>
   </WrapperContainer>
  )
}

export default page