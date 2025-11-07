import { useRef, } from "react";
import WrapperContainer from "../../../components/ui/WrapperContainer";
import { LOGINBLOB } from "../../../constants/images";
import SocialAuthButtons from "../../../components/common/SocialAuthButtons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    const ref = useRef<HTMLDivElement>(null);


    useGSAP(() => {
        if (!ref.current) return
        const t = gsap.timeline()
        t.from(
            ref.current.querySelector("h2"),
            {
                opacity: 0,
                y: 40,
                duration: 0.2,
                ease: "power1"
            }
        )
        t.from(
            ref.current.querySelector("p"),
            {
                opacity: 0,
                y: 40,
                duration: 0.2,
                ease: "power1"
            },
            "-=0.1"
        )

        t.from(ref.current.querySelectorAll(".input-card"), {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            delay: Math.min(Math.random(), 0.1),
            ease: "power1"
        }, "-=0.2")

        t.from(ref.current.querySelector(".separator-card"), {
            opacity: 0,
            y: 40,
        })
        t.from(ref.current.querySelector(".signup-card"), {
            opacity: 0,
            y: 40
        }, "-=0.1")

        gsap.to(ref.current.querySelectorAll("button"),
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                delay: 0.1
            })


    }, { scope: ref })

    return (
        <WrapperContainer>
            <div
                ref={ref}
                style={{ backgroundImage: `url("${LOGINBLOB}")` }}
                className="bg-fixed bg-cover bg-center min-h-screen flex items-center justify-center px-4 space-y-4"
            >
                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-md border border-white/20 text-center space-y-4"
                    ref={ref}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Welcome Back 👋</h2>
                    <p className="text-gray-200 mb-8">Login to continue</p>

                    <LoginForm />
                    <div className="flex gap-4 justify-between items-center separator-card ">
                        <div className="w-full h-0.5 bg-gray-100"></div>
                        <h2>OR</h2>
                        <div className="w-full h-0.5 bg-gray-100"></div>
                    </div>
                    <SocialAuthButtons />

                    <p className="text-gray-300 text-sm mt-6 signup-card">
                        Don’t have an account?{" "}
                        <a href="signup" className="text-blue-400 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default LoginPage;
