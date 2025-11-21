'use client'
import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa' // Social icons
import Brand from './brand'
import Container from './coontainer'

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Login', href: '/login' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Help', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Signup', href: '/signup' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container extraClasses='space-y-4 flex flex-col items-center gap-4 md:flex-row'>
        
        {/* Left Side - Brand */}
        <div className="text-center md:text-left space-y-2 flex-1">
        <Brand/>
          <p className="text-gray-400 text-sm">
            Organize your tasks efficiently and boost productivity.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-wrap gap-4 flex-1 justify-center md:justify-start text-gray-300 text-sm">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex gap-4 flex-1 justify-center md:justify-end">
          <a href="#" className="hover:text-blue-500 transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-700 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            <FaInstagram size={20} />
          </a>
        </div>

      </Container>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
