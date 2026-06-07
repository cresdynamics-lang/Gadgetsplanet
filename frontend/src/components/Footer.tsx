import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
                <span className="block font-bodoni text-[17px] font-bold leading-none tracking-tight text-white">
                  Gadgets Planet
                </span>
                <span className="block font-jost text-[9px] font-bold uppercase tracking-[0.25em] text-cta">
                  Hub
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-white/50 leading-relaxed font-jost">
              Kenya's #1 destination for premium phones, laptops, and tech accessories. Genuine products, unbeatable service.
            </p>
            <div className="flex items-center gap-3">
              {[faFacebookF, faInstagram, faTwitter, faYoutube].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60 hover:bg-cta hover:border-cta hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-[12px] font-jost font-bold text-white/40 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 font-jost text-[13px]">
              {[
                { to: '/shop', label: 'All Products' },
                { to: '/category/phones', label: 'Latest Phones' },
                { to: '/category/laptops', label: 'Laptops & PCs' },
                { to: '/category/accessories', label: 'Accessories' },
                { to: '/contact', label: 'Contact Support' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-[12px] font-jost font-bold text-white/40 uppercase tracking-widest">Customer Service</h4>
            <ul className="space-y-3 font-jost text-[13px]">
              {[
                { to: '/shipping', label: 'Shipping Policy' },
                { to: '/terms', label: 'Terms of Service' },
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/returns', label: 'Returns & Refunds' },
                { to: '/admin', label: 'Dealer Portal' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-[12px] font-jost font-bold text-white/40 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4 font-jost text-[13px]">
              <li className="flex gap-3 text-white/50">
                <MapPin className="w-4 h-4 shrink-0 text-cta mt-0.5" />
                <span>123 Tech Avenue, CBD<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Phone className="w-4 h-4 shrink-0 text-cta" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Mail className="w-4 h-4 shrink-0 text-cta" />
                <span>hello@gadgetsplanethub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-jost text-white/30 text-center md:text-left">
            © 2026 Gadgets Planet Hub. All rights reserved.
          </p>
          <div className="flex gap-5 items-center">
            {[
              { src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg', alt: 'Visa', h: 'h-3' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg', alt: 'Mastercard', h: 'h-5' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg', alt: 'PayPal', h: 'h-4' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_Pay_logo.svg', alt: 'Apple Pay', h: 'h-5' },
            ].map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className={`${logo.h} brightness-0 invert opacity-30 hover:opacity-60 transition-opacity`} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
