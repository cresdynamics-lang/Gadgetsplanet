import { Link } from 'react-router-dom';
import { Stethoscope, ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS } from '../lib/business';

const DiagnosticBanner = () => {
  return (
    <section className="container">
      <div className="relative overflow-hidden rounded-3xl border border-accent-green/20 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-6 md:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0 shadow-sm">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <div className="space-y-1">
              <p className="font-jost text-[11px] font-bold text-accent-green uppercase tracking-widest">Free Local Offer</p>
              <h3 className="font-bodoni text-2xl md:text-3xl font-bold text-primary leading-tight">
                Free Device Diagnostic in {BUSINESS.address.city}
              </h3>
              <p className="font-jost text-[13px] text-secondary flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-green shrink-0" />
                Serving {BUSINESS.serviceArea}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/book-repair"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-jost text-[13px] font-bold hover:bg-cta transition-all"
            >
              Book Free Diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-primary/15 bg-white text-primary px-6 py-3 rounded-2xl font-jost text-[13px] font-semibold hover:border-cta hover:text-cta transition-all"
            >
              Drop Off in {BUSINESS.address.city}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticBanner;
