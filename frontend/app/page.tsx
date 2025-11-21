import Container from "@/components/coontainer";
import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center  font-[var(--font-poppins)] ">
      
        <HeroSection/>
      <div className="h-screen bg-red-600 w-full"></div>
    </div>
  );
}
