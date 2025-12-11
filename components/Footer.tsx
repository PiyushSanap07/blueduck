import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white tracking-wider">THE BLUE DUCK</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Vibrant eatery in an art deco building offering traditional American comfort fare & a full bar in the heart of Livingston.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-block bg-slate-800 text-xs px-2 py-1 rounded border border-slate-700">Latino-Owned</span>
                <span className="inline-block bg-slate-800 text-xs px-2 py-1 rounded border border-slate-700">LGBTQ+ Friendly</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/menu" className="hover:text-accent transition-colors text-sm">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm hover:text-accent">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm hover:text-accent">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p><span className="font-medium text-white">Mon - Thu:</span> {BUSINESS_INFO.hours.weekdays}</p>
                  <p><span className="font-medium text-white">Fri - Sun:</span> {BUSINESS_INFO.hours.weekends}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;