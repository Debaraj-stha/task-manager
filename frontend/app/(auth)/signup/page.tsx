// app/signup/page.tsx (Server component)
import type { Metadata } from "next"
import SignupClient from "./SignupClient"


export const metadata: Metadata = {
  title: "Signup",
}

export default function SignupPage() {
  return <SignupClient />
}
