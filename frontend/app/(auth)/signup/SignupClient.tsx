'use client'

import FormFooter from '@/components/auth/FormFooter'
import SignupForm from '@/app/(auth)/signup/SignupForm'
import WrapperContainer from '@/components/layout/WrapperContainer'
import { SIGNUPBLOB } from '@/constants/images'
import { useRef } from 'react'


export default function SignupClient() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <WrapperContainer>
      <div
        ref={ref}
        style={{ backgroundImage: `url("${SIGNUPBLOB.src}")` }}
        className="relative bg-fixed bg-cover bg-center min-h-screen flex items-center justify-center px-4"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div
       
          className="relative w-full max-w-md md:max-w-2xl my-16 md:my-0"
        >
          <div className='bg-gray-900 rounded-2xl px-8 py-12'>
          
            <SignupForm />
            <FormFooter />
          </div>
        </div>
      </div>
    </WrapperContainer>
  )
}
