export const BUSINESS = {
  name: 'Gadgets Planet Hub',
  slogan: "Your Everyday's Phone Garage",
  tagline: 'Dealers in smartphones, iPhones, laptops, MacBooks, repairs, spares & accessories',
  description:
    "Gadgets Planet Hub — your everyday's phone garage. Dealers in smartphones, iPhones, laptops, MacBooks, repairs, spares and accessories in Kitengela, Kenya.",
  phone: '0711 106 949',
  phoneDisplay: '+254 711 106 949',
  phoneRaw: '254711106949',
  whatsapp: '254711106949',
  email: 'mauricemaina77@gmail.com',
  supportEmail: 'mauricemaina77@gmail.com',
  address: {
    street: 'Namanga Road, Kitengela Town',
    city: 'Kitengela',
    region: 'Kajiado County',
    country: 'Kenya',
    full: 'Namanga Road, Kitengela Town, Kajiado County, Kenya',
  },
  serviceArea: 'Kitengela, Athi River, Syokimau, Mlolongo & Nairobi Region',
  hours: {
    weekdays: 'Mon – Fri: 8:00 AM – 8:00 PM',
    weekend: 'Sat – Sun: 9:00 AM – 6:00 PM',
  },
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5!2d36.956!3d-1.348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112e5b5b5b5b%3A0x0!2sKitengela%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske',
  googleMapsUrl: 'https://maps.google.com/?q=Kitengela,Kenya',
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
