import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Trophy, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { BUSINESS } from '../lib/business';

const slides = [
  {
    id: 1,
    eyebrow: BUSINESS.slogan,
    title: 'Smartphones, iPhones & MacBooks',
    description: BUSINESS.tagline + `. Shop premium devices or book expert repairs at ${BUSINESS.address.full}.`,
    cta: 'Shop Laptops',
    cta2: 'Book a Repair',
    link: '/category/laptops',
    link2: '/book-repair',
    img: '/macbook air m5.jpg',
  },
  {
    id: 2,
    eyebrow: 'Expert Repair Services',
    title: 'Fix It Right the First Time',
    description: 'Screen replacements, motherboard repairs, data recovery — with real-time device tracking.',
    cta: 'Book a Repair',
    cta2: 'Track Device',
    link: '/book-repair',
    link2: '/track-repair',
    img: '/iphone 17 pro max.jpg',
  },
  {
    id: 3,
    eyebrow: 'Free Local Diagnostic',
    title: `Drop Off at ${BUSINESS.address.street}`,
    description: `Walk in for a free assessment at Accra Plaza, Nairobi CBD. No fix, no fee. Serving ${BUSINESS.serviceArea}.`,
    cta: 'Get Free Diagnostic',
    cta2: 'Shop Phones',
    link: '/book-repair',
    link2: '/category/phones',
    img: '/iphone 16 pro max.jpg',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden hero-mesh">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="container h-full flex flex-col lg:flex-row items-center justify-between relative pt-8 pb-24 lg:pb-8 min-h-[92vh]">
            {/* Content */}
            <div className="w-full lg:w-[52%] z-10 py-8 lg:py-0">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-7"
              >
                {/* #1 badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2">
                  <Trophy className="w-4 h-4 text-cta" />
                  <span className="font-jost text-[11px] font-bold uppercase tracking-widest text-white/80">
                    {BUSINESS.slogan}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-cta" />
                  <Zap className="w-3.5 h-3.5 text-accent-yellow" />
                  <span className="font-jost text-[11px] font-semibold text-white/60">{BUSINESS.phone}</span>
                </div>

                <p className="font-jost text-xs font-bold tracking-[0.25em] text-cta uppercase">
                  {slides[current].eyebrow}
                </p>

                <h1 className="font-bodoni text-[44px] sm:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.05] font-semibold text-white">
                  {slides[current].title}
                </h1>

                <p className="font-jost text-base md:text-lg text-white/60 max-w-md leading-relaxed">
                  {slides[current].description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild size="lg" className="rounded-2xl bg-white text-primary hover:bg-cta hover:text-white border-0 shadow-glow">
                    <Link to={slides[current].link} className="flex items-center gap-2">
                      {slides[current].cta}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-2xl border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40">
                    <Link to={slides[current].link2}>{slides[current].cta2}</Link>
                  </Button>
                </div>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                  {[
                    { value: 'iPhones', label: 'Smartphones' },
                    { value: 'MacBooks', label: 'Laptops' },
                    { value: 'Repairs', label: 'Spares & More' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-bodoni text-2xl font-bold text-white">{stat.value}</p>
                      <p className="font-jost text-[11px] text-white/40 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Product visual */}
            <div className="w-full lg:w-[48%] h-[340px] sm:h-[420px] lg:h-full relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, type: 'spring', stiffness: 80 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-cta/20 blur-[100px] rounded-full animate-float" />
                <div className="absolute inset-4 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm" />
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="relative z-10 max-w-[95%] max-h-[85%] object-contain drop-shadow-[0_40px_80px_rgba(99,102,241,0.4)] select-none"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-14 lg:translate-x-0 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-1 overflow-hidden rounded-full transition-all"
            style={{ width: i === current ? '48px' : '24px' }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cta to-accent rounded-full"
              initial={{ scaleX: 0 }}
              animate={i === current ? { scaleX: 1 } : { scaleX: 0 }}
              style={{ transformOrigin: 'left' }}
              transition={i === current ? { duration: 7, ease: 'linear' } : { duration: 0.3 }}
            />
          </button>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-5 lg:right-14 flex gap-2 z-30">
        {[
          { dir: 'prev', fn: () => setCurrent((p) => (p - 1 + slides.length) % slides.length), Icon: ChevronLeft },
          { dir: 'next', fn: () => setCurrent((p) => (p + 1) % slides.length), Icon: ChevronRight },
        ].map(({ dir, fn, Icon }) => (
          <button
            key={dir}
            onClick={fn}
            aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
            className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/15 transition-all"
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
