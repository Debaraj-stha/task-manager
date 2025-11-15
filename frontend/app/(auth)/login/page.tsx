
import type { Metadata } from "next";

import LoginClient from "./LoginClient";

export const metadata:Metadata={
    title:"Login"
}
const LoginPage = () => {
  return <LoginClient/>;
};

export default LoginPage;
