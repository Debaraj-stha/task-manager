import React from 'react'
import SocialAuthButtons from './SocialAuthButtons'

interface FormFooterProps{
    isLogin?:boolean
}
const FormFooter = ({isLogin}:FormFooterProps) => {
    return (
        <>
            <div className="flex gap-4 justify-between items-center separator-card ">
                <div className="w-full h-0.5 bg-gray-100"></div>
                <h2>OR</h2>
                <div className="w-full h-0.5 bg-gray-100"></div>
            </div>
            <SocialAuthButtons />

            <p className="text-gray-300 text-sm mt-6 signup-card">
                
                {isLogin  ? "Don’t " :"Already "} have an account?{" "}
                <a href={`${isLogin ?"signup":"login"}`} className="text-blue-400 hover:underline">
                    {isLogin ? "Sign up Now" :"Login Now"}
                </a>
            </p>
        </>
    )
}

export default FormFooter