import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wrench, Clock, BadgeCheck, Star } from 'lucide-react';
import { REPAIR_SERVICES } from '../lib/repairs';
import { BUSINESS, whatsappUrl } from '../lib/business';

const RepairServices = () => {
  return (
    <div className="pb-24 mesh-bg">
      <div className="hero-mesh py-16 md:py-24">
        <div className="container">
          <p className="section-eyebrow text-cta">Certified Technicians · No Fix, No Fee</p>
          <h1 className="font-bodoni text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Expert Phone & Laptop Repair in {BUSINESS.address.city}
          </h1>
          <p className="font-jost text-base text-white/50 mt-4 max-w-xl leading-relaxed">
            Premium repair services for high-end devices. Screen replacements, motherboard repairs, data recovery, and more — with real-time status tracking.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/book-repair" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3.5 rounded-2xl font-jost font-bold text-[14px] hover:bg-cta hover:text-white transition-all">
              Book a Repair <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/track-repair" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-2xl font-jost font-semibold text-[14px] hover:bg-white/10 transition-all">
              Track Your Device
            </Link>
            <a
              href={whatsappUrl(`Hi! I'd like a repair quote in ${BUSINESS.address.city}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-2xl font-jost font-semibold text-[14px] hover:opacity-90 transition-all"
            >
              Get Instant Quote
            </a>
          </div>
        </div>
      </div>

      <div className="container -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { icon: ShieldCheck, title: 'No Fix, No Fee', desc: 'You only pay if we solve the problem' },
            { icon: BadgeCheck, title: 'Certified Technicians', desc: 'Trained on Apple, Samsung & premium brands' },
            { icon: Clock, title: 'Same-Day Diagnostics', desc: 'Free assessment at our Kitengela shop' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-grey-mid/60 rounded-2xl p-6 flex items-start gap-4 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-cta/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-cta" />
              </div>
              <div>
                <h3 className="font-jost text-[14px] font-bold text-primary">{item.title}</h3>
                <p className="font-jost text-[12px] text-grey-text mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <p className="section-eyebrow">Our Capabilities</p>
          <h2 className="section-title mb-8">Repair <span className="gradient-text">Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REPAIR_SERVICES.map((service) => (
              <div key={service.title} className="group bg-white border border-grey-mid/60 rounded-2xl p-6 hover:border-cta/30 hover:shadow-card-hover transition-all">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="font-jost text-[16px] font-bold text-primary mt-4">{service.title}</h3>
                <p className="font-jost text-[13px] text-grey-text mt-2 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-grey-mid/60 rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="w-5 h-5 text-cta" />
              <h3 className="font-bodoni text-2xl font-bold text-primary">How It Works</h3>
            </div>
            <ol className="space-y-5">
              {[
                { step: '01', title: 'Book Online or Walk In', desc: `Drop off your device at our ${BUSINESS.address.city} shop or book a slot online.` },
                { step: '02', title: 'Free Diagnostic', desc: 'We assess your device and provide a transparent quote — no hidden fees.' },
                { step: '03', title: 'Track in Real Time', desc: 'Log in to the Device Tracker to see status updates via SMS/WhatsApp.' },
                { step: '04', title: 'Collect When Ready', desc: 'Get notified when your device is ready for pickup.' },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-bodoni text-2xl font-bold text-cta/30 shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-jost text-[14px] font-bold text-primary">{item.title}</h4>
                    <p className="font-jost text-[12px] text-grey-text mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-primary rounded-3xl p-8 text-white">
            <div className="flex items-center gap-1 text-accent-yellow mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="font-jost text-[15px] text-white/80 leading-relaxed italic">
              "Dropped my MacBook for a screen repair in Kitengela. Got WhatsApp updates throughout and picked it up the next day. Professional service!"
            </p>
            <p className="font-jost text-[13px] font-bold text-white mt-4">— Sarah K., Kitengela</p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-jost text-[12px] text-white/40 uppercase tracking-wider mb-2">Service Area</p>
              <p className="font-jost text-[14px] text-white/70">{BUSINESS.serviceArea}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-cta font-jost text-[13px] font-semibold hover:gap-3 transition-all">
                Visit Our Shop <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cta/10 to-accent/10 border border-cta/20 rounded-3xl p-10">
          <h3 className="font-bodoni text-3xl font-bold text-primary">Ready to Fix Your Device?</h3>
          <p className="font-jost text-secondary mt-2">Free diagnostic · Transparent pricing · {BUSINESS.address.city} & Nairobi region</p>
          <Link to="/book-repair" className="btn-primary inline-flex items-center gap-2 mt-6">
            Book a Repair Appointment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepairServices;
