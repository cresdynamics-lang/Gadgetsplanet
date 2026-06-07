import { Send, Sparkles } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 bg-gradient-to-r from-cta/10 via-transparent to-accent/10" />

      <div className="container relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-2">
          <Sparkles className="w-4 h-4 text-cta" />
          <span className="font-jost text-[11px] font-bold uppercase tracking-widest text-white/70">
            Stay Ahead of the Curve
          </span>
        </div>

        <div className="space-y-4 max-w-xl mx-auto">
          <h2 className="font-bodoni text-[32px] md:text-[44px] font-semibold text-white tracking-tight leading-tight">
            Get Exclusive Deals First
          </h2>
          <p className="text-[14px] font-jost text-white/50 leading-relaxed">
            Join 10,000+ tech enthusiasts. Be the first to know about new arrivals, flash sales, and insider deals.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 h-12 bg-white/8 border border-white/15 rounded-2xl px-5 text-[14px] font-jost outline-none focus:border-cta/60 focus:ring-2 focus:ring-cta/20 transition-all text-white placeholder:text-white/30 backdrop-blur-sm"
          />
          <button className="h-12 px-8 rounded-2xl bg-gradient-to-r from-cta to-accent text-white font-jost font-bold text-[14px] transition-all hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shrink-0">
            Subscribe
            <Send className="w-4 h-4" />
          </button>
        </form>

        <p className="text-[11px] font-jost text-white/25">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
