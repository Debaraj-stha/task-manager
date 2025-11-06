import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Brand from "../common/Brand";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../constants/content/contact";
import { Link } from "react-router-dom";
import { QUICK_LINKS } from "../../constants/content/common";
import { ROUTES } from "../../constants/routes";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  const icons = [
    { icon: <FaFacebook />, link: SOCIAL_LINKS.facebook },
    { icon: <FaInstagram />, link: SOCIAL_LINKS.instagram },
    { icon: <FaLinkedin />, link: SOCIAL_LINKS.linkedin },
    { icon: <FaGithub />, link: SOCIAL_LINKS.github },
  ];



  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 px-6  shadow-inner"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <Brand />
          <p className="text-blue-100 mt-3 text-sm">
            Empowering your workflow — smart, fast, and reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  to={ROUTES[link.routeKey]}
                  className="text-blue-100 hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            {icons.map(
              (item, i) =>
                item.link && (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-300 transition-colors duration-300"
                  >
                    {item.icon}
                  </a>
                )
            )}
          </div>
        </div>
      </div>

      <div className="text-center border-t border-blue-500 mt-8 pt-4 text-sm text-blue-100">
        &copy; {new Date().getFullYear()} {` `}
        <span className="font-medium">All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
