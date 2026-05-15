'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/components/animations';

function ProjectCard({ title, desc, tags, imgUrl }: { title: string, desc: string, tags: string[], imgUrl: string }) {
  return (
    <motion.div variants={fadeInUp} className="group rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-64 sm:h-72 bg-slate-100 relative overflow-hidden">
         <Image 
            src={imgUrl} 
            alt={title} 
            fill 
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
         />
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-3 text-[#0A1F44]">{title}</h3>
        <p className="text-slate-600 text-base mb-8 flex-1 font-medium leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(t => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-bold border border-slate-200">
              {t}
            </span>
          ))}
        </div>
        <Link href="/contacto" className="text-[#1E88FF] font-bold flex items-center gap-2 hover:text-blue-700 transition-colors">
          Cotizar solución similar <TrendingUp className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Portafolio() {
  return (
    <div className="pb-24">
      {/* PORTFOLIO HERO */}
      <section className="pt-20 pb-16 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
             <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-[#0A1F44]">Nuestro <span className="text-[#1E88FF]">Portafolio</span></h1>
             <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">Conceptos de soluciones tecnológicas que implementamos para transformar negocios de distintas industrias.</p>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-12 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10"
          >
            <ProjectCard 
              imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
              title="Software a la Medida"
              desc="Desarrollo de aplicaciones y plataformas web personalizadas que se adaptan exactamente a tus procesos operativos únicos."
              tags={["React", "Node.js", "Cloud"]}
            />
            <ProjectCard 
              imgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
              title="Sistema Administrativo"
              desc="Sistema centralizado para control de inventarios, finanzas, facturación y reportes analíticos con gráficas en tiempo real."
              tags={["Next.js", "PostgreSQL", "Dashboard"]}
            />
            <ProjectCard 
              imgUrl="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=2400&q=80"
              title="Chatbot de Ventas IA"
              desc="Agente de inteligencia artificial para WhatsApp que atiende consultas técnicas 24/7 y cierra citas automáticamente."
              tags={["OpenAI", "WhatsApp API", "IA"]}
            />
            <ProjectCard 
              imgUrl="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2369&ixlib=rb-4.0.3"
              title="Página Web Corporativa"
              desc="Sitio web de alto rendimiento con diseño profesional, SEO avanzado y sistema integrado captador de leads y reservaciones."
              tags={["UI/UX", "SEO", "Alta Conversión"]}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-24 px-6 relative mt-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#0A1F44]">¿Tienes un proyecto en mente?</h2>
            <p className="text-slate-600 text-lg mb-10 font-medium">Cuéntanos tu idea, nosotros encontraremos la mejor tecnología para volverla realidad.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0A1F44] hover:bg-slate-800 text-white font-bold transition-all shadow-xl hover:-translate-y-1">
               Comencemos a trabajar <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </section>
    </div>
  );
}
