import { WhatsAppIcon } from './icons';

export function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/522206324913" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </a>
  );
}
