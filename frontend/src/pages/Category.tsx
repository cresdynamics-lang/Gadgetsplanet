import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ALL_PRODUCTS } from '../lib/products';
import { getCategoryLabel, STORE_CATEGORIES } from '../lib/categories';

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const categoryId = id?.toLowerCase() ?? '';
  const meta = STORE_CATEGORIES.find((c) => c.id === categoryId);
  const filteredProducts = ALL_PRODUCTS.filter((p) => p.category.toLowerCase() === categoryId);

  return (
    <div className="bg-background pb-24">
      <div className="bg-white border-b border-grey-mid/60 py-12 mb-8">
        <div className="container">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[12px] font-jost text-grey-text">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-primary">Shop</Link>
              <span>/</span>
              <span className="text-primary font-semibold">{getCategoryLabel(categoryId)}</span>
            </div>
            <h1 className="section-title">{getCategoryLabel(categoryId)}</h1>
            <p className="font-jost text-[14px] text-secondary max-w-xl">
              {meta?.description ?? `Explore our selection of ${getCategoryLabel(categoryId).toLowerCase()}.`}
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-grey-mid/60 gap-4">
          <p className="font-jost text-[14px] text-grey-text">
            Found <span className="text-primary font-bold">{filteredProducts.length}</span> items
          </p>
          <Link to="/shop" className="see-all-link">Browse full catalog →</Link>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="font-bodoni text-xl font-bold text-primary mb-2">Coming Soon</h3>
            <p className="text-grey-text font-jost text-[14px] mb-4">
              We're stocking this category. Call <strong>0711 106 949</strong> or WhatsApp for availability.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/shop" className="btn-primary inline-flex px-8 h-11 items-center">Browse Catalog</Link>
              <Link to="/repairs" className="btn-secondary inline-flex px-8 h-11 items-center">Book a Repair</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
