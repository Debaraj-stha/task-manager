import React, { useRef } from 'react'
import WrapperContainer from '../../../components/ui/WrapperContainer'
import { SIGNUPBLOB } from '../../../constants/images'
import FormWrapper from '../components/FormWrapper'
import SignupForm from '../components/SignupForm'
import FormFooter from '../../../components/common/FormFooter'
import useAuthAnimation from '../hooks/useAuthAnimation'

const Signup = () => {
    const ref = useRef<HTMLDivElement>(null)
//custom hook to animate contents using gSAP
useAuthAnimation(ref,"signup")

    return (
        <WrapperContainer>
            <div
                ref={ref}
                style={{ backgroundImage: `url("${SIGNUPBLOB}")` }}
                className="bg-fixed bg-cover bg-center min-h-screen flex items-center justify-center px-4 space-y-4"
            >
                <FormWrapper isLoginForm={false}>
                    <p>Signup to continue</p>
                    <SignupForm />
                  <FormFooter/>
                </FormWrapper>


            </div>
        </WrapperContainer>
    )
}

export default Signup