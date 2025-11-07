import React from "react";
import { FACEBOOKICON, GOOGLEICON } from "../../constants/images";

interface SocialAuthButtonsProps {
    onGoogleLogin?: () => void;
    onFacebookLogin?:()=>void
    isAnimate?:boolean
}

const SocialAuthButtons = ({ onGoogleLogin,onFacebookLogin,isAnimate=true }: SocialAuthButtonsProps) => {
    return (
        <div className="mt-6 space-y-4">
            <button
                onClick={onGoogleLogin}
                style={{...(isAnimate ? {opacity:0,transform:'translateY(40px)'} :{})}}
                className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg py-3 
                   bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
            >
                <img src={GOOGLEICON} alt="Google" className="w-6 h-6" />
                <p className="font-medium text-gray-700 dark:text-gray-200">
                    Continue with Google
                </p>
            </button>
             <button
                onClick={onFacebookLogin}
                style={{...(isAnimate ? {opacity:0,transform:'translateY(40px)'} :{})}}
                className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg py-3 
                   bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
            >
                <img src={FACEBOOKICON} alt="Facebook" className="w-6 h-6" />
                <p className="font-medium text-gray-700 dark:text-gray-200">
                    Continue with Facebook
                </p>
            </button>
        </div>
    );
};

export default SocialAuthButtons;
