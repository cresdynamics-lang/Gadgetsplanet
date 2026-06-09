import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Search, Heart, ShoppingBag, User, Menu, X, Sparkles, Wrench } from 'lucide-react';
import { useCustomerAuth } from '../context/CustomerAuthContext';
import { BUSINESS } from '../lib/business';

const Navbar = () => {
  const { cartCount } = useCart();
  const { isAuthenticated, logout } = useCustomerAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const q = searchParams.get('search');
    if (location.pathname === '/shop' && q) setSearchQuery(q);
  }, [location.pathname, searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      navigate(`/shop?search=${encodeURIComponent(q)}`);
    } else {
      navigate('/shop');
    }
    setIsMobileSearchOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Phones', path: '/category/phones' },
    { name: 'Tablets', path: '/category/tablets' },
    { name: 'Laptops', path: '/category/laptops' },
    { name: 'Earphones', path: '/category/earphones' },
    { name: 'Accessories', path: '/category/accessories' },
    { name: 'Repairs', path: '/repairs' },
    { name: 'Contact', path: '/contact' },
  ];

  const SearchForm = ({ className = '' }: { className?: string }) => (
    <form onSubmit={handleSearch} className={`relative flex gap-2 ${className}`}>
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-text pointer-events-none" />
        <input
          type="search"
          placeholder="Search iPhones, Samsung, laptops, earphones..."
          className="w-full h-11 bg-grey-light/80 border border-grey-mid/80 rounded-2xl pl-11 pr-4 font-jost text-[13px] outline-none focus:border-cta/50 focus:bg-white focus:ring-2 focus:ring-cta/10 transition-all placeholder:text-grey-text/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="h-11 px-4 bg-primary text-white rounded-2xl font-jost text-[13px] font-bold hover:bg-cta transition-colors shrink-0"
      >
        Search
      </button>
    </form>
  );

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-cta/30 via-accent/20 to-cta/30 animate-shimmer" />
        <div className="container relative flex h-9 items-center justify-between">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-jost font-semibold">
            <Sparkles className="w-3 h-3 text-cta" />
            <span className="text-white/90">{BUSINESS.slogan}</span>
          </div>
          <p className="flex-1 text-center text-[11px] font-jost font-medium tracking-wide text-white/80 sm:flex-none">
            Smartphones · iPhones · Samsung · Laptops · Repairs · Accessories
          </p>
          <div className="hidden sm:flex items-center gap-4">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="text-[11px] font-jost text-white/70 hover:text-white transition-colors">Logout</button>
            ) : (
              <Link to="/login" className="text-[11px] font-jost text-white/70 hover:text-white transition-colors">Login</Link>
            )}
            <Link to="/track-repair" className="text-[11px] font-jost text-white/70 hover:text-white transition-colors">Track Repair</Link>
          </div>
        </div>
      </div>

      <div className={`glass-header transition-shadow duration-300 ${scrolled ? 'shadow-card' : ''}`}>
        <div className="container flex h-[68px] items-center justify-between gap-3">
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cta to-accent shadow-glow">
              <div className="h-3.5 w-3.5 rounded-sm bg-white/90 rotate-45" />
            </div>
            <div className="hidden sm:block">
              <span className="block font-bodoni text-[17px] font-bold leading-none tracking-tight text-primary">Gadgets Planet</span>
              <span className="block font-jost text-[8px] font-bold uppercase tracking-[0.15em] text-cta leading-tight">Your Phone Garage</span>
            </div>
          </Link>

          <SearchForm className="hidden md:flex flex-1 max-w-[480px] mx-4" />

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl text-primary hover:bg-grey-light transition-colors"
              aria-label="Search"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <Link to="/repairs" className="hidden lg:flex h-10 items-center gap-1.5 px-3 rounded-xl text-primary hover:bg-grey-light transition-colors font-jost text-[12px] font-semibold">
              <Wrench className="w-4 h-4 text-cta" /> Repairs
            </Link>
            <Link to="/wishlist" className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl text-primary hover:bg-grey-light transition-colors">
              <Heart className="w-[18px] h-[18px]" />
            </Link>
            <Link to="/cart" className="relative flex h-10 w-10 items-center justify-center rounded-xl text-primary hover:bg-grey-light transition-colors">
              <ShoppingBag className="w-[18px] h-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gradient-to-r from-cta to-accent px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to={isAuthenticated ? '/track-repair' : '/login'} className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl text-primary hover:bg-grey-light transition-colors">
              <User className="w-[18px] h-[18px]" />
            </Link>
            <button
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-primary hover:bg-grey-light transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileSearchOpen && (
          <div className="md:hidden border-t border-grey-mid/60 px-5 py-4 bg-white">
            <SearchForm />
          </div>
        )}
      </div>

      <div className="hidden lg:block border-b border-grey-mid/60 bg-white/50 backdrop-blur-sm">
        <div className="container overflow-x-auto no-scrollbar">
          <nav className="flex items-center gap-1 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-jost text-[13px] font-medium px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  location.pathname === link.path ? 'bg-primary text-white' : 'text-secondary hover:text-primary hover:bg-grey-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-grey-mid shadow-card">
          <div className="container py-5 space-y-4">
            <SearchForm />
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="font-jost text-[13px] font-medium py-3 px-4 rounded-xl bg-grey-light hover:bg-primary hover:text-white transition-all text-center">
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex gap-3 pt-2 border-t border-grey-mid">
              <Link to="/book-repair" className="flex-1 py-2.5 text-center text-[13px] font-jost font-bold bg-cta text-white rounded-xl">Book Repair</Link>
              <Link to="/shop" className="flex-1 py-2.5 text-center text-[13px] font-jost font-medium border border-grey-mid rounded-xl">Shop</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
