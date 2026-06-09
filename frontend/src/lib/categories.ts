export const STORE_CATEGORIES = [
  { id: 'phones', name: 'Phones', label: 'High-End Phones', description: 'iPhones, Samsung & premium smartphones' },
  { id: 'tablets', name: 'Tablets', label: 'Tablets', description: 'iPads and premium tablets' },
  { id: 'laptops', name: 'Laptops', label: 'Laptops & MacBooks', description: 'MacBooks, Windows laptops & notebooks' },
  { id: 'earphones', name: 'Earphones', label: 'Earphones & Earbuds', description: 'AirPods, earbuds, earphones & Earpods' },
  { id: 'accessories', name: 'Accessories', label: 'Accessories & Spares', description: 'Cases, chargers, cables & genuine spares' },
] as const;

export const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  STORE_CATEGORIES.map((c) => [c.id, c.label]),
);

export function getCategoryLabel(id?: string) {
  if (!id) return 'Products';
  return CATEGORY_LABELS[id.toLowerCase()] ?? id.charAt(0).toUpperCase() + id.slice(1);
}
