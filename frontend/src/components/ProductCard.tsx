import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Heart, Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    img: string;
    brand: string;
    spec?: string;
    rating?: number;
    reviewsCount?: number;
    isNew?: boolean;
    isSale?: boolean;
    discount?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card group bg-white border border-grey-mid/60 rounded-2xl overflow-hidden flex flex-col relative transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-cta/20">
      <Link to={`/product/${product.id}`} className="block relative aspect-square bg-gradient-to-b from-grey-light to-white p-5 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-gradient-to-r from-cta to-accent text-white text-[9px] font-jost font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              New
            </span>
          )}
          {product.isSale && (
            <span className="bg-accent-red text-white text-[9px] font-jost font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              Sale
            </span>
          )}
          {product.discount && (
            <span className="bg-accent-red text-white text-[9px] font-jost font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              {product.discount}
            </span>
          )}
        </div>

        <button
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm border border-grey-mid/60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-accent-red/10 hover:border-accent-red/30 z-10"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4 text-grey-text group-hover:text-accent-red transition-colors" />
        </button>
      </Link>

      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="text-[10px] font-jost text-cta font-bold uppercase tracking-wider">{product.brand}</p>

        <Link
          to={`/product/${product.id}`}
          className="font-jost text-[13px] font-semibold text-primary line-clamp-2 leading-snug hover:text-cta transition-colors"
        >
          {product.name}
        </Link>

        {product.spec && (
          <p className="text-[11px] font-jost text-grey-text truncate">{product.spec}</p>
        )}

        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex text-accent-yellow">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < (product.rating || 5) ? 'fill-current' : 'text-grey-mid fill-grey-mid'}`}
              />
            ))}
          </div>
          <span className="text-[10px] font-jost text-grey-text">({product.reviewsCount || 0})</span>
        </div>

        <div className="mt-2 flex flex-col gap-0.5">
          <div className="flex items-baseline gap-2">
            <span className="font-jost text-[16px] font-bold text-primary">
              KSh {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="font-jost text-[11px] text-grey-text line-through">
                KSh {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <span className="font-jost text-[11px] font-semibold text-accent-green">
              Save KSh {(product.originalPrice - product.price).toLocaleString()}
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-3 w-full h-10 bg-primary text-white font-jost text-[12px] font-semibold rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-cta flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
