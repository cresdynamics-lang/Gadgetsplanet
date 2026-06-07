import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BUSINESS, whatsappUrl } from '../lib/business';

const WhatsAppButton = () => {
  const message = `Hi ${BUSINESS.name}! I'm interested in smartphones, laptops, repairs or accessories.`;

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-white font-jost text-[13px] font-bold shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-all active:scale-95"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
};

export default WhatsAppButton;
