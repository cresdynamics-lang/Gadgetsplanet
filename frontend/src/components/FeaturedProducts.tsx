import { Link } from 'react-router-dom';
import { ArrowRight, Timer } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'p1',
    name: 'iPhone 17 Pro Max',
    price: 185000,
    originalPrice: 205000,
    img: '/iphone 17 pro max.jpg',
    brand: 'Apple',
    spec: '256GB / 12GB RAM / Titanium',
    rating: 5,
    reviewsCount: 124,
    isNew: true,
  },
  {
    id: 'p2',
    name: 'MacBook Air M5',
    price: 195000,
    originalPrice: 220000,
    img: '/macbook air m5.jpg',
    brand: 'Apple',
    spec: 'M5 Chip / 16GB RAM / 512GB SSD',
    rating: 5,
    reviewsCount: 86,
    isSale: true,
    discount: '-11%',
  },
  {
    id: 'p3',
    name: 'ThinkPad X1 Carbon',
    price: 210000,
    img: '/lenvovo think pad laptop.jpg',
    brand: 'Lenovo',
    spec: 'Intel i7 / 32GB RAM / 1TB SSD',
    rating: 4,
    reviewsCount: 42,
  },
  {
    id: 'p4',
    name: 'iPhone 16 Pro Max',
    price: 155000,
    originalPrice: 175000,
    img: '/iphone 16 pro max.jpg',
    brand: 'Apple',
    spec: '128GB / 8GB RAM / Natural Titanium',
    rating: 5,
    reviewsCount: 512,
    isSale: true,
  },
  {
    id: 'p5',
    name: 'Samsung S24 Ultra',
    price: 165000,
    img: '/iphone 15 pro max black titanium.jpg',
    brand: 'Samsung',
    spec: '256GB / 12GB RAM / Titanium Black',
    rating: 5,
    reviewsCount: 89,
  },
  {
    id: 'p6',
    name: 'iPad Pro M4',
    price: 145000,
    img: '/iphone xr blue.jpg',
    brand: 'Apple',
    spec: 'M4 Chip / 11" Display / 256GB',
    rating: 5,
    reviewsCount: 67,
    isNew: true,
  },
];

const FeaturedProducts = () => {
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
