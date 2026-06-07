import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS, whatsappUrl } from '../lib/business';

const Contact = () => {
  return (
    <div className="bg-background pb-24">
      <div className="hero-mesh py-16 md:py-20">
        <div className="container">
          <p className="section-eyebrow text-cta">{BUSINESS.slogan}</p>
          <h1 className="font-bodoni text-4xl md:text-5xl font-bold text-white leading-tight">Contact & Location</h1>
          <p className="font-jost text-white/50 mt-3 max-w-xl text-[15px]">
            {BUSINESS.tagline}. Visit us at {BUSINESS.address.full} — sales, repairs, spares & accessories.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={whatsappUrl(`Hi ${BUSINESS.name}! I'd like to enquire about phones, laptops or repairs.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-2xl font-jost text-[13px] font-bold hover:opacity-90 transition-all">
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" /> WhatsApp Us
            </a>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-2xl font-jost text-[13px] font-bold hover:bg-cta hover:text-white transition-all">
              <Phone className="w-4 h-4" /> {BUSINESS.phone}
            </a>
            <Link to="/book-repair" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-2xl font-jost text-[13px] font-semibold hover:bg-white/10 transition-all">
              Drop Off at Accra Plaza
            </Link>
          </div>
        </div>
      </div>

      <div className="container -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: 'Visit Us', content: <>{BUSINESS.address.street}<br />{BUSINESS.address.area}, {BUSINESS.address.country}</> },
                { icon: Phone, title: 'Call / WhatsApp', content: <>{BUSINESS.phone}<br />{BUSINESS.phoneDisplay}</> },
                { icon: Mail, title: 'Email', content: <>{BUSINESS.email}</> },
                { icon: Clock, title: 'Hours', content: <>{BUSINESS.hours.weekdays}<br />{BUSINESS.hours.weekend}</> },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-grey-mid/60 rounded-2xl p-5 space-y-3 shadow-card">
                  <div className="w-10 h-10 bg-cta/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="font-jost text-[14px] font-bold text-primary">{item.title}</h4>
                  <p className="text-[13px] text-grey-text font-jost leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-grey-mid/60 shadow-card h-[320px]">
              <iframe
                title="Gadgets Planet Hub Location"
                src={BUSINESS.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-jost text-[13px] font-semibold text-cta hover:underline">
              <MapPin className="w-4 h-4" /> Get Directions on Google Maps
            </a>
          </div>

          <div className="bg-white border border-grey-mid/60 rounded-3xl p-8 md:p-10 shadow-card">
            <h2 className="font-bodoni text-2xl font-bold text-primary mb-2">Send a Message</h2>
            <p className="font-jost text-[14px] text-grey-text mb-8">Get an instant repair quote for {BUSINESS.serviceArea}.</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="font-jost text-[13px] font-bold text-primary">First Name</label>
                  <input type="text" placeholder="John" className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50" />
                </div>
                <div className="space-y-2">
                  <label className="font-jost text-[13px] font-bold text-primary">Last Name</label>
                  <input type="text" placeholder="Kamau" className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-jost text-[13px] font-bold text-primary">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50" />
              </div>
              <div className="space-y-2">
                <label className="font-jost text-[13px] font-bold text-primary">Subject</label>
                <select className="w-full h-11 bg-grey-light border border-grey-mid rounded-xl px-4 font-jost text-[14px] outline-none focus:border-cta/50 cursor-pointer">
                  <option>Repair Quote — Nairobi CBD</option>
                  <option>Product Inquiry</option>
                  <option>Technical Support</option>
                  <option>Sales & Partnerships</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-jost text-[13px] font-bold text-primary">Message</label>
                <textarea rows={5} placeholder="Describe your device issue or product question..." className="w-full bg-grey-light border border-grey-mid rounded-xl px-4 py-3 font-jost text-[14px] outline-none focus:border-cta/50 resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full h-12 rounded-2xl flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
