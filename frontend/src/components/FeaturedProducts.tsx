import { Link } from 'react-router-dom';
import { ArrowRight, Timer } from 'lucide-react';
import ProductCard from './ProductCard';
import { ALL_PRODUCTS } from '../lib/products';

const FeaturedProducts = () => {
  const products = ALL_PRODUCTS.slice(0, 6);

  return (
    <section className="py-4">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="section-eyebrow">
              <Timer className="w-3.5 h-3.5" />
              Limited Time
            </div>
            <h2 className="section-title">
              Flash <span className="gradient-text">Deals</span>
            </h2>
          </div>
          <Link to="/shop" className="see-all-link">
            See All Deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
