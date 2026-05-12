import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Kairos Tech | Desarrollo de Software a la Medida',
  description: 'Empresa de desarrollo tecnológico especializada en software a la medida, chatbots con IA, automatización y páginas web profesionales.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-slate-50" suppressHydrationWarning>
        <Navbar />
        <main className="pt-24 min-h-screen">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
