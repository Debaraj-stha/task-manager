'use client'

import { ADDRESS, EMAIL, PHONE } from "@/constants/content/contact";
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

import { Card, CardContent } from "@/components/ui/card";
import { HiLocationMarker } from "react-icons/hi";

const ContactInfo = () => {
  const infoItems = [
    {
      icon: <BiPhone className="text-blue-500 w-8 h-8" />,
      title: "Phone",
      value: PHONE,
    },
    {
      icon: <CgMail className="text-blue-500 w-8 h-8" />,
      title: "Email",
      value: EMAIL,
    },
    {
      icon: <HiLocationMarker className="text-blue-500 w-8 h-8" />,
      title: "Address",
      value: ADDRESS,
    },
  ];

  return (
    <div className="mt-16 border-t pt-8 grid md:grid-cols-3 gap-6">
      {infoItems.map((item, idx) => (
        <Card
          key={idx}
          className="flex flex-col items-center gap-2 p-6 rounded-xl bg-gray-800 border border-white/10 shadow-md hover:shadow-lg transition-all contact-info-card"
        >
          <CardContent className="flex flex-col items-center gap-2 text-center">
            {item.icon}
            <p className="font-semibold text-white">{item.title}</p>
            <p className="text-gray-300">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
