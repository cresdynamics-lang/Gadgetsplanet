import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Tablet, Headphones, Watch, Camera, Gamepad2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Phones', icon: Smartphone, path: '/category/phones', gradient: 'from-violet-500 to-indigo-600' },
  { name: 'Laptops', icon: Laptop, path: '/category/laptops', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Tablets', icon: Tablet, path: '/category/tablets', gradient: 'from-emerald-500 to-teal-500' },
  { name: 'Audio', icon: Headphones, path: '/category/audio', gradient: 'from-orange-500 to-amber-500' },
  { name: 'Watches', icon: Watch, path: '/category/wearables', gradient: 'from-pink-500 to-rose-500' },
  { name: 'Cameras', icon: Camera, path: '/category/cameras', gradient: 'from-slate-500 to-zinc-600' },
  { name: 'Gaming', icon: Gamepad2, path: '/category/gaming', gradient: 'from-purple-500 to-violet-600' },
];

const Categories = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="section-eyebrow">Browse by Category</p>
            <h2 className="font-bodoni text-2xl md:text-3xl font-semibold text-primary tracking-tight">
              Shop Your Way
            </h2>
          </div>
          <Link to="/shop" className="see-all-link hidden sm:flex">
            All Categories <ArrowRight className="w-4 h-4" />
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
                className="group flex-shrink-0 flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-grey-mid/60 hover:border-cta/30 hover:shadow-card-hover transition-all duration-300 min-w-[100px]"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                </div>
                <span className="font-jost text-[12px] font-semibold text-primary text-center whitespace-nowrap group-hover:text-cta transition-colors">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}

          <Link
            to="/shop"
            className="flex-shrink-0 flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-primary min-w-[100px] hover:bg-cta transition-colors duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <span className="font-jost text-[12px] font-semibold text-white text-center">View All</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
