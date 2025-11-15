'use client'

import Image from "next/image";
import { CONTACTSVGIMAGE } from "@/constants/images";

const ContactIllustration = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Image
        src={CONTACTSVGIMAGE.src}
        height={400}
        width={400}
        alt="Contact illustration"
        className="w-full max-w-md h-auto pointer-events-none select-none drop-shadow-xl"
        priority
      />
    </div>
  );
};

export default ContactIllustration;
