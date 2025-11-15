// app/signup/SignupClient.tsx (Client component)
'use client'
import FormFooter from '@/components/auth/FormFooter'
import FormWrapper from '@/components/auth/FormWrapper'
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
        className="bg-fixed bg-cover bg-center min-h-screen flex items-center justify-center px-4 space-y-4"
      >
        <FormWrapper isLoginForm={false}>
          <p className="text-gray-200 mb-4 text-center">Signup to continue</p>
          <SignupForm />
          <FormFooter />
        </FormWrapper>
      </div>
    </WrapperContainer>
  )
}
