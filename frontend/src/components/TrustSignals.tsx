import { Truck, ShieldCheck, Headphones, CreditCard, Award } from 'lucide-react';

const signals = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over KSh 50,000', color: 'from-blue-500 to-cyan-500' },
  { icon: ShieldCheck, title: '100% Genuine', desc: 'Authentic products with warranty', color: 'from-emerald-500 to-teal-500' },
  { icon: Headphones, title: '24/7 Support', desc: 'Expert tech assistance anytime', color: 'from-violet-500 to-purple-500' },
  { icon: CreditCard, title: 'Secure Checkout', desc: 'Encrypted & safe payments', color: 'from-orange-500 to-amber-500' },
];

const TrustSignals = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {signals.map((s, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-grey-mid/60 hover:border-cta/20 hover:shadow-card transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                <s.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[13px] font-jost font-bold text-primary">{s.title}</h4>
                <p className="text-[11px] text-grey-text font-jost leading-tight">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 py-4 px-6 rounded-2xl bg-primary text-white">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-cta" />
            <span className="font-jost text-[13px] font-semibold">Kenya's #1 Tech Retailer</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="font-jost text-[12px] text-white/60">Trusted by 10,000+ customers nationwide</span>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-3 opacity-60">
            {['Visa', 'M-Pesa', 'PayPal', 'Apple Pay'].map((p) => (
              <span key={p} className="font-jost text-[11px] font-medium text-white/80">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
