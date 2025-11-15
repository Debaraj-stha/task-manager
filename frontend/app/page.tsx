import Hero from "./Hero";
import Testimonials from "./Testimonials";
import CTA from "@/components/common/CTA";
import Features from "@/components/common/Features";

export default function Home() {
  return (
    <div className=" min-h-screen  bg-zinc-50 font-sans dark:bg-black">

      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}
