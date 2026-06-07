import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS } from '../lib/business';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="group flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cta to-accent">
                <div className="h-3.5 w-3.5 rounded-sm bg-white/90 rotate-45" />
              </div>
              <div>
                <span className="block font-bodoni text-[17px] font-bold leading-none tracking-tight text-white">Gadgets Planet</span>
                <span className="block font-jost text-[8px] font-bold uppercase tracking-[0.12em] text-cta leading-tight">Your Phone Garage</span>
              </div>
            </Link>
            <p className="text-[13px] text-white/50 leading-relaxed font-jost">
              {BUSINESS.slogan}. {BUSINESS.tagline}. Serving {BUSINESS.serviceArea}.
            </p>
            <div className="space-y-2 font-jost text-[12px] text-white/40">
              <p className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-cta shrink-0 mt-0.5" />{BUSINESS.address.full}</p>
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-cta shrink-0" />{BUSINESS.phone}</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-cta shrink-0" />{BUSINESS.email}</p>
            </div>
            <div className="flex items-center gap-3">
              {[faFacebookF, faInstagram, faTwitter, faYoutube].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60 hover:bg-cta hover:border-cta hover:text-white transition-all">
                  <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-[12px] font-jost font-bold text-white/40 uppercase tracking-widest">Shop</h4>
            <ul className="space-y-3 font-jost text-[13px]">
              {[
                { to: '/shop', label: 'Device Catalog' },
                { to: '/category/phones', label: 'Phones' },
                { to: '/category/laptops', label: 'Laptops' },
                { to: '/category/accessories', label: 'Accessories' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group">
                    {link.label}<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-[12px] font-jost font-bold text-white/40 uppercase tracking-widest">Repairs</h4>
            <ul className="space-y-3 font-jost text-[13px]">
              {[
                { to: '/repairs', label: 'Repair Services' },
                { to: '/book-repair', label: 'Book a Repair' },
                { to: '/track-repair', label: 'Device Tracker' },
                { to: '/contact', label: 'Drop Off in Kitengela' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-[12px] font-jost font-bold text-white/40 uppercase tracking-widest">Service Area</h4>
            <p className="font-jost text-[13px] text-white/50 leading-relaxed">{BUSINESS.serviceArea}</p>
            <p className="font-jost text-[12px] text-white/30">{BUSINESS.hours.weekdays}<br />{BUSINESS.hours.weekend}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['M-Pesa', 'Visa', 'PayPal', 'Pesapal'].map((p) => (
                <span key={p} className="text-[10px] font-jost font-bold text-white/40 border border-white/10 px-2.5 py-1 rounded-full">{p}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-jost text-white/30 text-center md:text-left">
            © 2026 {BUSINESS.name}. {BUSINESS.address.city}, Kenya. All rights reserved.
          </p>
          <p className="text-[11px] font-jost text-white/20">{BUSINESS.slogan} · {BUSINESS.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
