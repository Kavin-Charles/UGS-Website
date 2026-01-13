import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <span className="text-[#003d82] font-bold text-2xl">UGS</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-lg leading-tight mb-1">
                ULTRA GLOBAL SERVICES
              </div>
              <div className="text-gray-400 text-xs tracking-wider">PTE. LTD.</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering excellence in ACMV & MEP solutions across Singapore.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">OUR SERVICES</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors hover:pl-2 inline-block duration-300">
                  ACMV Works
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors hover:pl-2 inline-block duration-300">
                  M&E Works
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors hover:pl-2 inline-block duration-300">
                  CCTV & Door Access Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors hover:pl-2 inline-block duration-300">
                  Smart Home Lighting Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors hover:pl-2 inline-block duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors hover:pl-2 inline-block duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors hover:pl-2 inline-block duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors hover:pl-2 inline-block duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">CONTACT US</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#003d82]" />
                <span>No. 24 Clive Street<br />Singapore 209780</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0 text-[#003d82]" />
                <span>+65 6680 7382</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0 text-[#003d82]" />
                <span>admin@ugsengineers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-semibold tracking-wider">
                SAFETY • QUALITY • RELIABILITY • COMMITMENT
              </p>
            </div>
            <div className="text-gray-500 text-sm">
              © 2026 Ultra Global Services Pte. Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}