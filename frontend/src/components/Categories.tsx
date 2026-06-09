import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Tablet, Headphones, Package, Wrench, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Phones', subtitle: 'iPhone & Samsung', icon: Smartphone, path: '/category/phones', gradient: 'from-violet-500 to-indigo-600' },
  { name: 'Tablets', subtitle: 'iPad & more', icon: Tablet, path: '/category/tablets', gradient: 'from-emerald-500 to-teal-500' },
  { name: 'Laptops', subtitle: 'MacBooks & PCs', icon: Laptop, path: '/category/laptops', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Earphones', subtitle: 'AirPods & earbuds', icon: Headphones, path: '/category/earphones', gradient: 'from-orange-500 to-amber-500' },
  { name: 'Accessories', subtitle: 'Spares & extras', icon: Package, path: '/category/accessories', gradient: 'from-slate-500 to-zinc-600' },
  { name: 'Repairs', subtitle: 'Fix & restore', icon: Wrench, path: '/repairs', gradient: 'from-rose-500 to-pink-600' },
];

const Categories = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="font-bodoni text-2xl md:text-3xl font-semibold text-primary tracking-tight">
              Phones, Laptops & Repairs
            </h2>
            <p className="font-jost text-[13px] text-grey-text mt-1">
              High-end phones, tablets, laptops — plus expert repairs for iPhone, Samsung & more
            </p>
          </div>
          <Link to="/shop" className="see-all-link hidden sm:flex">
            Full Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                to={cat.path}
                className="group flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-grey-mid/60 hover:border-cta/30 hover:shadow-card-hover transition-all duration-300 min-w-[108px]"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                </div>
                <span className="font-jost text-[12px] font-semibold text-primary text-center whitespace-nowrap group-hover:text-cta transition-colors">
                  {cat.name}
                </span>
                <span className="font-jost text-[10px] text-grey-text text-center leading-tight">{cat.subtitle}</span>
              </Link>
            </motion.div>
          ))}

          <Link
            to="/book-repair"
            className="flex-shrink-0 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-primary min-w-[108px] hover:bg-cta transition-colors duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="font-jost text-[12px] font-semibold text-white text-center">Book Repair</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
