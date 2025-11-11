import { useRef, } from "react";
import WrapperContainer from "../../../components/ui/WrapperContainer";
import { LOGINBLOB } from "../../../constants/images";
import LoginForm from "../components/LoginForm";
import FormWrapper from "../components/FormWrapper";
import FormFooter from "../../../components/common/FormFooter";
import useAuthAnimation from "../hooks/useAuthAnimation";

const LoginPage = () => {
    const ref = useRef<HTMLDivElement>(null);

useAuthAnimation(ref)

    return (
        <WrapperContainer>
            <div
                ref={ref}
                style={{ backgroundImage: `url("${LOGINBLOB}")` }}
                className="bg-fixed bg-cover bg-center min-h-screen flex items-center justify-center px-4 space-y-4"
            >
                <FormWrapper>

                    <h2 className="text-3xl font-bold text-white mb-6">Welcome Back 👋</h2>
                    <p className="text-gray-200 mb-8">Login to continue</p>

                    <LoginForm />
                    {/* flag to indicate it is loginform component */}
                  <FormFooter isLogin={true}/>
                </FormWrapper>
            </div>
        </WrapperContainer>
    );
};

export default LoginPage;
