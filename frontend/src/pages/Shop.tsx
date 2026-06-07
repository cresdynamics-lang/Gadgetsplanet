import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, Search, X } from 'lucide-react';
import { ALL_PRODUCTS, RAM_OPTIONS, PROCESSOR_OPTIONS, filterProducts } from '../lib/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [ram, setRam] = useState('All');
  const [processor, setProcessor] = useState('All');
  const [priceRange, setPriceRange] = useState(250000);
  const [sortBy, setSortBy] = useState('newest');
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');

  const activeSearch = searchParams.get('search') || '';

  useEffect(() => {
    setSearchInput(activeSearch);
  }, [activeSearch]);

  const filteredProducts = useMemo(() => {
    let result = filterProducts(ALL_PRODUCTS, {
      category,
      brand,
      ram,
      processor,
      maxPrice: priceRange,
      search: activeSearch,
    });

    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [category, brand, ram, processor, priceRange, activeSearch, sortBy]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ search: searchInput.trim() });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchInput('');
    setSearchParams({});
  };

  const clearFilters = () => {
    setCategory('All');
    setBrand('All');
    setRam('All');
    setProcessor('All');
    setPriceRange(250000);
    clearSearch();
  };

  return (
    <div className="bg-background pb-24">
      <div className="bg-white border-b border-grey-mid/60 py-12 mb-8">
        <div className="container">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[12px] font-jost text-grey-text">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary font-semibold">Shop</span>
            </div>
            <h1 className="section-title">Device Catalog</h1>
            <p className="font-jost text-[14px] text-secondary max-w-xl">
              Browse premium phones and laptops with official warranty badges. Filter by brand, RAM, and processor.
            </p>

            {/* In-page search */}
            <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-lg mt-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-text" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search by name, brand, spec..."
                  className="w-full h-11 bg-grey-light border border-grey-mid rounded-2xl pl-11 pr-4 font-jost text-[13px] outline-none focus:border-cta/50 focus:ring-2 focus:ring-cta/10"
                />
              </div>
              <button type="submit" className="h-11 px-5 bg-primary text-white rounded-2xl font-jost text-[13px] font-bold hover:bg-cta transition-colors shrink-0">
                Search
              </button>
            </form>

            {activeSearch && (
              <div className="flex items-center gap-2">
                <span className="font-jost text-[13px] text-grey-text">
                  Results for: <strong className="text-primary">"{activeSearch}"</strong>
                </span>
                <button onClick={clearSearch} className="flex items-center gap-1 text-[12px] font-jost text-cta font-semibold hover:underline">
                  <X className="w-3 h-3" /> Clear
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-72 space-y-8 shrink-0">
            <div className="bg-white border border-grey-mid/60 rounded-2xl p-6 space-y-6 sticky top-28">
              <h3 className="font-jost text-[14px] font-bold text-primary flex items-center gap-2">
                <Filter className="w-4 h-4 text-cta" /> Filters
              </h3>

              <div className="space-y-3">
                <h4 className="text-[12px] font-jost font-bold text-grey-text uppercase tracking-wider">Category</h4>
                {['All', 'Phones', 'Laptops', 'Tablets', 'Accessories'].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="category" checked={category === cat} onChange={() => setCategory(cat)} className="w-4 h-4 accent-cta" />
                    <span className={`text-[13px] font-jost ${category === cat ? 'text-primary font-semibold' : 'text-grey-text group-hover:text-primary'}`}>{cat}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-[12px] font-jost font-bold text-grey-text uppercase tracking-wider">Brand</h4>
                <div className="flex flex-wrap gap-2">
                  {['All', 'Apple', 'Samsung', 'HP', 'Lenovo'].map((b) => (
                    <button key={b} onClick={() => setBrand(b)} className={`px-3 py-1 rounded-full border text-[11px] font-jost font-medium transition-all ${brand === b ? 'bg-primary text-white border-primary' : 'bg-white text-grey-text border-grey-mid hover:border-cta'}`}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-[12px] font-jost font-bold text-grey-text uppercase tracking-wider flex items-center justify-between">
                  RAM <ChevronDown className="w-3 h-3" />
                </h4>
                <select value={ram} onChange={(e) => setRam(e.target.value)} className="w-full h-10 bg-grey-light border border-grey-mid rounded-xl px-3 font-jost text-[13px] outline-none focus:border-cta/50 cursor-pointer">
                  {RAM_OPTIONS.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>

              <div className="space-y-3">
                <h4 className="text-[12px] font-jost font-bold text-grey-text uppercase tracking-wider">Processor</h4>
                <select value={processor} onChange={(e) => setProcessor(e.target.value)} className="w-full h-10 bg-grey-light border border-grey-mid rounded-xl px-3 font-jost text-[13px] outline-none focus:border-cta/50 cursor-pointer">
                  {PROCESSOR_OPTIONS.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>

              <div className="space-y-3">
                <h4 className="text-[12px] font-jost font-bold text-grey-text uppercase tracking-wider">Max Price</h4>
                <input type="range" min="0" max="250000" step="5000" value={priceRange} onChange={(e) => setPriceRange(parseInt(e.target.value))} className="w-full accent-cta h-1 bg-grey-mid rounded-lg appearance-none cursor-pointer" />
                <p className="font-jost text-[12px] text-primary font-bold">Up to KSh {priceRange.toLocaleString()}</p>
              </div>

              <button onClick={clearFilters} className="w-full py-2.5 border border-grey-mid rounded-xl font-jost text-[12px] font-semibold text-secondary hover:border-cta hover:text-cta transition-all">
                Clear All Filters
              </button>
            </div>
          </aside>

          <main className="flex-grow">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-grey-mid/60 gap-4">
              <p className="font-jost text-[14px] text-grey-text">
                Showing <span className="text-primary font-bold">{filteredProducts.length}</span> products
              </p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-white border border-grey-mid rounded-xl px-4 py-2 font-jost text-[13px] font-semibold text-primary outline-none cursor-pointer focus:border-cta/50">
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                <div className="w-16 h-16 bg-grey-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-grey-text" />
                </div>
                <h3 className="font-bodoni text-xl font-bold text-primary mb-2">No matching products</h3>
                <p className="text-grey-text font-jost text-[14px] mb-8">Try adjusting your filters or search term.</p>
                <button onClick={clearFilters} className="btn-primary">Clear All Filters</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
