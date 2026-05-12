'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from './brand';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path 
      ? 'text-[#1E88FF] transition-colors' 
      : 'text-slate-600 hover:text-[#1E88FF] transition-colors';
  };

  const getMobileLinkClass = (path: string) => {
    return pathname === path 
      ? 'text-lg font-bold text-[#1E88FF]' 
      : 'text-lg font-medium text-slate-800';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link href="/" className={getLinkClass('/')}>Inicio</Link>
          <Link href="/soluciones" className={getLinkClass('/soluciones')}>Soluciones</Link>
          <Link href="/servicios" className={getLinkClass('/servicios')}>Servicios</Link>
          <Link href="/portafolio" className={getLinkClass('/portafolio')}>Portafolio</Link>
          <Link href="/planes" className={getLinkClass('/planes')}>Planes</Link>
          <Link href="/contacto" className="px-6 py-3 rounded-full bg-[#1E88FF] hover:bg-blue-600 transition-colors text-white font-bold shadow-lg shadow-blue-500/30">
            Cotizar ahora
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-2xl">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/')}>Inicio</Link>
          <Link href="/soluciones" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/soluciones')}>Soluciones</Link>
          <Link href="/servicios" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/servicios')}>Servicios</Link>
          <Link href="/portafolio" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/portafolio')}>Portafolio</Link>
          <Link href="/planes" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/planes')}>Planes</Link>
          <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="mt-4 px-6 py-4 rounded-xl bg-[#1E88FF] text-white text-center font-bold shadow-lg shadow-blue-500/30">
            Cotizar ahora
          </Link>
        </div>
      )}
    </nav>
  );
}
