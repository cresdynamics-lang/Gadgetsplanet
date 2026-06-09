import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import ProductImage from '../components/ProductImage';
import { ALL_PRODUCTS } from '../lib/products';
import { Star, Heart, Share2, ShieldCheck, Truck, RotateCcw, Minus, Plus, ShoppingBag } from 'lucide-react';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = ALL_PRODUCTS.find((p) => p.id === id) || ALL_PRODUCTS[0];
  const related = ALL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white pb-24">
      <div className="bg-grey-light py-4 mb-8">
        <div className="container">
          <div className="flex items-center gap-2 text-[12px] font-inter text-grey-text">
            <Link to="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <span>/</span>
            <span className="text-black font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="aspect-square product-img-frame rounded-xl border border-grey-mid">
              <ProductImage src={product.img} alt={product.name} className="w-full h-full" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.img, product.img, product.img, product.img].map((img, i) => (
                <div
                  key={i}
                  className={`aspect-square thumb-img-frame rounded-lg border transition-all ${i === 0 ? 'border-black' : 'border-grey-mid hover:border-grey-text'}`}
                >
                  <ProductImage src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-cta uppercase tracking-widest">{product.brand}</span>
                <div className="flex gap-3">
                  <button type="button" className="p-2 hover:bg-grey-light rounded-full transition-colors" aria-label="Add to wishlist">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button type="button" className="p-2 hover:bg-grey-light rounded-full transition-colors" aria-label="Share product">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h1 className="text-[32px] md:text-[40px] font-poppins font-bold text-black leading-tight">{product.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex text-accent-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'text-grey-mid'}`} />
                  ))}
                </div>
                <span className="text-[13px] text-grey-text font-inter">({product.reviewsCount} reviews)</span>
              </div>
              <p className="text-[14px] text-grey-text font-inter">{product.spec}</p>
              {product.warranty && (
                <span className="inline-flex text-[11px] font-jost font-bold text-accent-green bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                  ✓ {product.warranty}
                </span>
              )}
            </div>

            <div className="space-y-2 py-6 border-y border-grey-mid">
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] font-poppins font-bold text-black">KSh {product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-[18px] text-grey-text line-through font-inter">KSh {product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-[13px] font-semibold text-accent-red font-inter">
                  Save KSh {(product.originalPrice - product.price).toLocaleString()}
                </p>
              )}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center border border-grey-mid rounded-lg overflow-hidden">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-grey-light">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-[14px]">{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-grey-light">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  for (let i = 0; i < quantity; i++) addToCart(product);
                }}
                className="btn-primary flex-grow h-12 rounded-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: ShieldCheck, text: 'Genuine Product' },
                { icon: Truck, text: 'Fast Delivery' },
                { icon: RotateCcw, text: 'Easy Returns' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 p-4 bg-grey-light rounded-xl">
                  <Icon className="w-5 h-5 text-black shrink-0" />
                  <span className="text-[12px] font-bold text-black uppercase tracking-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-24 pt-16 border-t border-grey-mid">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Customers Also Bought</h2>
            <Link to="/shop" className="see-all-link">See All →</Link>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
