import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import DiagnosticBanner from '../components/DiagnosticBanner';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustSignals from '../components/TrustSignals';
import Newsletter from '../components/Newsletter';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Wrench } from 'lucide-react';

const Home = () => {
  const laptopDeals = [
    { id: 'l1', name: 'MacBook Pro M3', price: 245000, img: '/macbook air m5.jpg', brand: 'Apple', spec: '14" / 16GB / 512GB', ram: '16GB', processor: 'Apple M5', warranty: '1-Year Official Warranty', rating: 5, reviewsCount: 34, isNew: true },
    { id: 'l2', name: 'HP Spectre x360', price: 175000, img: '/lenvovo think pad laptop.jpg', brand: 'HP', spec: 'Intel i7 / 16GB / 1TB', ram: '16GB', processor: 'Intel i7', warranty: '1-Year Store Warranty', rating: 4, reviewsCount: 18 },
    { id: 'l3', name: 'Dell XPS 15', price: 215000, img: '/lenvovo think pad laptop.jpg', brand: 'Dell', spec: 'OLED / i9 / 32GB', ram: '32GB', processor: 'Intel i7', warranty: '1-Year Official Warranty', rating: 5, reviewsCount: 22, isSale: true },
    { id: 'l4', name: 'Asus ROG Zephyrus', price: 195000, img: '/lenvovo think pad laptop.jpg', brand: 'Asus', spec: 'RTX 4070 / 16GB', ram: '16GB', processor: 'Intel i7', warranty: '1-Year Store Warranty', rating: 5, reviewsCount: 45 },
    { id: 'l5', name: 'Lenovo Yoga 7i', price: 115000, img: '/lenvovo think pad laptop.jpg', brand: 'Lenovo', spec: 'i5 / 8GB / 512GB', ram: '8GB', processor: 'Intel i5', warranty: '6-Month Store Warranty', rating: 4, reviewsCount: 12 },
    { id: 'l6', name: 'Surface Laptop 5', price: 135000, img: '/macbook air m5.jpg', brand: 'Microsoft', spec: '13.5" / i7 / 16GB', ram: '16GB', processor: 'Intel i7', warranty: '1-Year Store Warranty', rating: 4, reviewsCount: 29 },
  ];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="flex flex-col gap-16 md:gap-20 pb-16 mesh-bg">
      <Hero />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <DiagnosticBanner />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <Categories />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <TrustSignals />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <FeaturedProducts />
      </motion.div>

      {/* Flagship Laptops */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="container"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="section-eyebrow">Editor's Choice</p>
            <h2 className="section-title">
              Flagship <span className="gradient-text">Laptops</span>
            </h2>
          </div>
          <Link to="/category/laptops" className="see-all-link">
            Browse All Laptops <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="product-grid">
          {laptopDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.section>

      {/* Repair CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link to="/category/laptops" className="group bg-white border border-grey-mid/60 rounded-3xl p-8 hover:border-cta/30 hover:shadow-card-hover transition-all">
            <p className="section-eyebrow">E-Commerce</p>
            <h3 className="font-bodoni text-2xl font-bold text-primary">Shop Laptops</h3>
            <p className="font-jost text-[13px] text-grey-text mt-2">Premium laptops with warranty badges and secure M-Pesa checkout.</p>
            <span className="inline-flex items-center gap-2 mt-4 font-jost text-[13px] font-bold text-cta group-hover:gap-3 transition-all">
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link to="/book-repair" className="group bg-primary rounded-3xl p-8 hover:bg-cta transition-all">
            <p className="font-jost text-[11px] font-bold text-cta uppercase tracking-widest flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5" /> Repairs
            </p>
            <h3 className="font-bodoni text-2xl font-bold text-white mt-2">Book a Repair</h3>
            <p className="font-jost text-[13px] text-white/50 mt-2">Free diagnostic in Kitengela. Track your device status online.</p>
            <span className="inline-flex items-center gap-2 mt-4 font-jost text-[13px] font-bold text-white group-hover:gap-3 transition-all">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </motion.section>

      {/* Promo banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="container"
      >
        <div className="relative w-full min-h-[320px] md:min-h-[400px] rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 hero-mesh" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10" />

          <div className="relative z-20 p-10 md:p-16 flex flex-col justify-center max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <Star className="w-3.5 h-3.5 text-accent-yellow fill-accent-yellow" />
              <span className="font-jost text-[11px] font-bold text-white/70 uppercase tracking-wider">#1 in Kenya</span>
            </div>
            <h3 className="font-bodoni text-4xl md:text-5xl font-bold leading-tight text-white">
              Think Different.<br />
              <span className="gradient-text">Think Gadgets Planet Hub.</span>
            </h3>
            <p className="font-jost text-base text-white/50 leading-relaxed">
              Explore the full Apple ecosystem and premium tech — curated, genuine, and delivered to your door.
            </p>
            <Link
              to="/category/phones"
              className="inline-flex items-center gap-3 w-fit bg-white text-primary px-7 py-3.5 rounded-2xl font-jost font-bold text-[14px] hover:bg-cta hover:text-white transition-all shadow-glow active:scale-95"
            >
              Explore Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <img
            src="/iphone 17 pro max.jpg"
            alt="Featured product"
            className="absolute right-[-60px] md:right-0 bottom-[-80px] md:bottom-[-60px] h-[110%] md:h-[130%] object-contain z-0 opacity-40 md:opacity-70 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none"
          />
        </div>
      </motion.section>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <Newsletter />
      </motion.div>
    </div>
  );
};

export default Home;
