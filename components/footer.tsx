import Link from 'next/link';
import { Facebook, Instagram, Mail, MessageSquare } from 'lucide-react';
import { LogoWhite } from './brand';
import { WhatsAppIcon } from './icons';

export function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <LogoWhite className="mb-6" />
          <p className="text-white/70 mb-8 max-w-sm font-medium leading-relaxed">
            Convertimos procesos manuales en sistemas inteligentes. Software a la medida, automatización y páginas web de alto impacto en México.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/14bbcdqrVnK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E88FF] transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.instagram.com/kairos.tech.mx?igsh=MTV6eW82dWtpNmMxYQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E88FF] transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="mailto:kairostechbots@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E88FF] transition-colors">
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Navegación</h4>
          <ul className="space-y-3 text-white/70 font-medium">
            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/soluciones" className="hover:text-white transition-colors">Soluciones</Link></li>
            <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link href="/portafolio" className="hover:text-white transition-colors">Portafolio</Link></li>
            <li><Link href="/planes" className="hover:text-white transition-colors">Planes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contacto</h4>
          <ul className="space-y-4 text-white/70 font-medium">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                 <WhatsAppIcon className="w-4 h-4" /> 
              </div>
              220 632 4913
            </li>
            <li className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" /> 
               </div>
               kairostechbots@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm font-medium">
        &copy; {new Date().getFullYear()} Kairos Tech. Todos los derechos reservados.
      </div>
    </footer>
  );
}
