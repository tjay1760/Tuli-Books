import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import TuliLogo from '../assets/images/TuliBooksLogo.png';

const Footer = () => {
  return (
    <footer className="font-sans text-[#071D6E] px-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Column 1: Company Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Company Info</h3>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>

          {/* Column 2: Features */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Features</h3>
            <a href="#" className="hover:underline">Bookkeeping</a>
            <a href="#" className="hover:underline">Tax Filing</a>
            <a href="#" className="hover:underline">Mobile Receipts</a>
            <a href="#" className="hover:underline">Invoicing</a>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Resources</h3>
            <a href="#" className="hover:underline">Tuli Agents</a>
            <a href="#" className="hover:underline">Reports</a>
            <a href="#" className="hover:underline">FAQ's</a>
            <a href="#" className="hover:underline">Support</a>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Get In Touch</h3>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-gray-500" />
              <span>(574) 323 - 6923</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-gray-500" />
              <span>support@tulibooks.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-gray-500" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <a href="#" aria-label="Facebook">
                <Facebook size={24} className="text-gray-600 hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={24} className="text-gray-600 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={24} className="text-gray-600 hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section with logo and copyright */}
      <div className="bg-white ">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <img src={TuliLogo} alt="TuliBooks Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-gray-800">Tuli Books</span>
          </div>
          <p className="text-gray-500 text-sm">TuliBooks &copy;2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
