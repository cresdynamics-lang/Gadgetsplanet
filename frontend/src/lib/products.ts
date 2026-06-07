export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  img: string;
  category: string;
  brand: string;
  spec: string;
  ram: string;
  processor: string;
  warranty: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isSale?: boolean;
  discount?: string;
}

export const ALL_PRODUCTS: Product[] = [
  { id: 'p1', name: 'iPhone 17 Pro Max', price: 185000, originalPrice: 205000, img: '/iphone 17 pro max.jpg', category: 'Phones', brand: 'Apple', spec: '256GB / 12GB RAM', ram: '12GB', processor: 'A19 Pro', warranty: '1-Year Official Warranty', rating: 5, reviewsCount: 124, isNew: true },
  { id: 'p2', name: 'MacBook Air M5', price: 195000, originalPrice: 220000, img: '/macbook air m5.jpg', category: 'Laptops', brand: 'Apple', spec: 'M5 / 16GB / 512GB', ram: '16GB', processor: 'Apple M5', warranty: '1-Year Official Warranty', rating: 5, reviewsCount: 86, isSale: true, discount: '-11%' },
  { id: 'p3', name: 'ThinkPad X1 Carbon', price: 210000, img: '/lenvovo think pad laptop.jpg', category: 'Laptops', brand: 'Lenovo', spec: 'i7 / 32GB / 1TB', ram: '32GB', processor: 'Intel i7', warranty: '1-Year Official Warranty', rating: 4, reviewsCount: 42 },
  { id: 'p4', name: 'iPhone 16 Pro Max', price: 155000, originalPrice: 175000, img: '/iphone 16 pro max.jpg', category: 'Phones', brand: 'Apple', spec: '128GB / 8GB RAM', ram: '8GB', processor: 'A18 Pro', warranty: '1-Year Official Warranty', rating: 5, reviewsCount: 512, isSale: true },
  { id: 'p5', name: 'iPhone 15 Pro Max', price: 135000, img: '/iphone 15 pro max black titanium.jpg', category: 'Phones', brand: 'Apple', spec: '256GB / 8GB RAM', ram: '8GB', processor: 'A17 Pro', warranty: '1-Year Official Warranty', rating: 5, reviewsCount: 89 },
  { id: 'p6', name: 'HP Pavilion 15', price: 85000, img: '/hp pavilion laptop.jpg', category: 'Laptops', brand: 'HP', spec: 'i5 / 8GB / 512GB', ram: '8GB', processor: 'Intel i5', warranty: '1-Year Store Warranty', rating: 4, reviewsCount: 15 },
  { id: 'p7', name: 'iPhone 14 Pro Black', price: 115000, img: '/iphone 14 pro black.jpg', category: 'Phones', brand: 'Apple', spec: '128GB / 6GB RAM', ram: '6GB', processor: 'A16 Bionic', warranty: '6-Month Store Warranty', rating: 4, reviewsCount: 210 },
  { id: 'p8', name: 'iPhone 12 Pro Max', price: 95000, img: '/iphone 12 pro max black.jpg', category: 'Phones', brand: 'Apple', spec: '128GB / 6GB RAM', ram: '6GB', processor: 'A14 Bionic', warranty: '6-Month Store Warranty', rating: 4, reviewsCount: 340 },
  { id: 'p9', name: 'iPhone 13 Blue', price: 85000, img: '/iphone 13 blue.jpg', category: 'Phones', brand: 'Apple', spec: '128GB / 4GB RAM', ram: '4GB', processor: 'A15 Bionic', warranty: '6-Month Store Warranty', rating: 5, reviewsCount: 180 },
  { id: 'p10', name: 'iPhone SE White', price: 45000, img: '/iphone SE (2nd Gen) white.jpg', category: 'Phones', brand: 'Apple', spec: '64GB / 3GB RAM', ram: '3GB', processor: 'A13 Bionic', warranty: '3-Month Store Warranty', rating: 4, reviewsCount: 95 },
  { id: 'p11', name: 'iPhone XR Blue', price: 35000, img: '/iphone xr blue.jpg', category: 'Phones', brand: 'Apple', spec: '64GB / 3GB RAM', ram: '3GB', processor: 'A12 Bionic', warranty: '3-Month Store Warranty', rating: 4, reviewsCount: 150 },
  { id: 'p12', name: 'iPhone 11 Black', price: 55000, img: '/iphone 11 black.jpg', category: 'Phones', brand: 'Apple', spec: '64GB / 4GB RAM', ram: '4GB', processor: 'A13 Bionic', warranty: '6-Month Store Warranty', rating: 4, reviewsCount: 220 },
];

export const RAM_OPTIONS = ['All', '3GB', '4GB', '6GB', '8GB', '12GB', '16GB', '32GB'];
export const PROCESSOR_OPTIONS = ['All', 'Apple M5', 'Intel i5', 'Intel i7', 'A19 Pro', 'A18 Pro', 'A17 Pro', 'A16 Bionic', 'A15 Bionic', 'A14 Bionic', 'A13 Bionic', 'A12 Bionic'];

export function searchProducts(query: string, products = ALL_PRODUCTS) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.spec.toLowerCase().includes(q) ||
      p.processor.toLowerCase().includes(q),
  );
}

export function filterProducts(
  products: Product[],
  filters: { category?: string; brand?: string; ram?: string; processor?: string; maxPrice?: number; search?: string },
) {
  let result = [...products];
  if (filters.search) result = searchProducts(filters.search, result);
  if (filters.category && filters.category !== 'All') result = result.filter((p) => p.category === filters.category);
  if (filters.brand && filters.brand !== 'All') result = result.filter((p) => p.brand === filters.brand);
  if (filters.ram && filters.ram !== 'All') result = result.filter((p) => p.ram === filters.ram);
  if (filters.processor && filters.processor !== 'All') result = result.filter((p) => p.processor === filters.processor);
  if (filters.maxPrice != null) result = result.filter((p) => p.price <= filters.maxPrice!);
  return result;
}
