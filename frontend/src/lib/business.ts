export const BUSINESS = {
  name: 'Gadgets Planet Hub',
  slogan: "Your Everyday's Phone Garage",
  tagline: 'Dealers in smartphones, iPhones, laptops, MacBooks, repairs, spares & accessories',
  description:
    "Gadgets Planet Hub — your everyday's phone garage. Dealers in smartphones, iPhones, laptops, MacBooks, repairs, spares and accessories at Accra Plaza, Nairobi CBD, Kenya.",
  phone: '0711 106 949',
  phoneDisplay: '+254 711 106 949',
  phoneRaw: '254711106949',
  whatsapp: '254711106949',
  email: 'mauricemaina77@gmail.com',
  supportEmail: 'mauricemaina77@gmail.com',
  address: {
    street: 'Accra Plaza',
    area: 'Nairobi CBD',
    city: 'Nairobi',
    region: 'Nairobi County',
    country: 'Kenya',
    full: 'Accra Plaza, Nairobi CBD, Kenya',
  },
  serviceArea: 'Nairobi CBD, Westlands, Eastleigh, Karen & Greater Nairobi',
  hours: {
    weekdays: 'Mon – Fri: 8:00 AM – 8:00 PM',
    weekend: 'Sat – Sun: 9:00 AM – 6:00 PM',
  },
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Accra+Plaza,+Nairobi+CBD,+Kenya&hl=en&z=16&output=embed',
  googleMapsUrl: 'https://maps.google.com/?q=Accra+Plaza,+Nairobi+CBD,+Kenya',
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
