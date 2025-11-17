'use client';


import Link from "next/link";
import { APP_NAME } from "@/constants/content";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {  QUICK_LINKS } from "@/constants/content/common";
import { ROUTES } from "@/constants/routes";
import { SOCIAL_LINKS } from "@/constants/content/contact";
import { Card, CardHeader, CardTitle } from "../ui/card";

const Footer = () => {
    const role="guest"
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-start">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{APP_NAME}</h3>
            <p className="text-sm">
              Empowering teams with real-time collaboration and modern tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
            {
                QUICK_LINKS.filter(l=>l.role!.includes(role)).map((ele,index)=> <li key={index}><Link href={`${ROUTES[ele.routeKey]}`} className="hover:text-white">{ele.label}</Link></li>
    )
            }
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
       

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex space-x-4 items-center justify-center md:justify-start">
              <Link href={`${SOCIAL_LINKS.facebook}`} className="hover:text-white"><FaFacebook size={20} /></Link>
              <Link href={`${SOCIAL_LINKS.TWITTER}`} className="hover:text-white"><FaTwitter size={20} /></Link>
              <Link href={`${SOCIAL_LINKS.instagram}`} className="hover:text-white"><FaInstagram size={20} /></Link>
              <Link href={`${SOCIAL_LINKS.linkedin}`} className="hover:text-white"><FaLinkedin size={20} /></Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
          © {new Date().getFullYear()} {APP_NAME} — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
