export const BUSINESS = {
  name: 'Gadgets Planet Hub',
  tagline: "Kenya's #1 Premium Tech & Repair Store",
  phone: '+254 712 345 678',
  phoneRaw: '254712345678',
  whatsapp: '254712345678',
  email: 'hello@gadgetsplanethub.com',
  supportEmail: 'support@gadgetsplanethub.com',
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
