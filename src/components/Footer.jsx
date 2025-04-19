import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    { label: 'Privacy Policy', href: '#privacy-policy' },
    { label: 'Terms of Service', href: '#terms-of-service' },
    { label: 'Contact Us', href: '#contact-us' },
  ];

  const socialLinks = [
    { platform: 'Facebook', href: '#facebook', icon: <FaFacebook /> },
    { platform: 'Twitter', href: '#twitter', icon: <FaTwitter /> },
    { platform: 'Instagram', href: '#instagram', icon: <FaInstagram /> },
  ];

  return (
    <footer className="bg-white text-pink-600 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-pink-700 transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ platform, href, icon }) => (
            <a
              key={platform}
              href={href}
              className="text-2xl hover:text-pink-700 transition"
              aria-label={platform}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-pink-600">
          &copy; {new Date().getFullYear()} Cash Direct. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
