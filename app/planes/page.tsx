'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/components/animations';

function PlanCard({ title, desc, popular, custom }: { title: string, desc: string, popular?: boolean, custom?: boolean }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className={`p-8 md:p-10 rounded-3xl border flex flex-col transition-all duration-300 ${popular ? 'bg-white border-[#1E88FF] shadow-2xl shadow-blue-500/20 relative md:-translate-y-4 md:scale-105 z-10' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#1E88FF] text-white text-xs font-black rounded-full uppercase tracking-widest shadow-md">
          Más solicitado
        </div>
      )}
      <h3 className="text-3xl font-bold mb-4 text-[#0A1F44]">{title}</h3>
      <p className="text-slate-600 text-lg mb-8 flex-1 font-medium">{desc}</p>
      
      {custom ? (
        <div className="text-2xl font-bold mb-8 text-[#0A1F44]">Cotización a la medida</div>
      ) : (
        <div className="text-base text-slate-500 mb-8 font-medium">Desde un pago accesible hasta suscripción mensual.</div>
      )}

      <Link href="/contacto" className={`w-full py-4 rounded-xl text-center font-bold text-lg transition-all ${popular ? 'bg-[#1E88FF] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'}`}>
        Cotizar proyecto
      </Link>
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-lg text-[#0A1F44] pr-4">{q}</span>
        <ChevronDown className={`w-6 h-6 shrink-0 text-[#1E88FF] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed text-lg">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Planes() {
  return (
    <div className="pb-24">
      {/* PLANES HERO */}
      <section className="pt-20 pb-16 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
             <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-[#0A1F44]">Nuestros <span className="text-[#1E88FF]">Planes</span></h1>
             <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">Paquetes diseñados para escalar con tu empresa, desde herramientas básicas hasta un ecosistema de software completo.</p>
          </motion.div>
        </div>
      </section>

      {/* PLANES GRID */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <PlanCard 
              title="Chatbot con IA"
              desc="Para empresas que necesitan atención 24/7 de forma inteligente y filtrado automático de prospectos en redes."
            />
            <PlanCard 
              title="Página Web PRO"
              desc="Presencia digital sólida, diseño corporativo único y optimización especializada para captar clientes."
              popular
            />
            <PlanCard 
              title="Software a la Medida"
              desc="Desarrollo completo de sistemas CRM o plataformas únicas personalizadas para tu forma de trabajo."
              custom
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white border-y border-slate-100 mt-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-[#0A1F44]">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <FaqItem q="¿Cuánto tiempo tarda el desarrollo?" a="Depende de la complejidad de la solución. Un chatbot o landing page puede estar listo en 1 a 2 semanas, mientras que un software a la medida más avanzado puede tomar entre 1 y 4 meses. Te daremos un tiempo estimado exacto durante tu asesoría." />
            <FaqItem q="¿Ofrecen soporte después de terminar el proyecto?" a="Sí, todos nuestros proyectos incluyen un periodo de garantía post-lanzamiento y diferentes opciones de pólizas de mantenimiento y soporte mensual para que tu tecnología siempre esté al día." />
            <FaqItem q="¿Pueden integrar WhatsApp a mis campañas de FB e IG?" a="Por supuesto. Somos expertos integrando la API oficial de WhatsApp para crear flujos automatizados de respuesta conectados directamente al tráfico que generan tus anuncios." />
            <FaqItem q="¿Trabajan con cualquier tipo de empresa o rubro?" a="Sí, nuestras soluciones tecnológicas son completamente adaptables a cualquier industria o sector. Nos enfocamos en entender los procesos específicos de tu negocio para ofrecerte la herramienta ideal que resuelva tus necesidades." />
            <FaqItem q="¿El software que desarrollan puede crecer con mi negocio?" a="Exacto. Desarrollamos con arquitecturas cloud modernas, escalables y modulares. Esto significa que puedes comenzar con algo pequeño y añadir nuevas funcionalidades posteriormente sin tener que rehacer todo desde cero." />
          </div>
        </div>
      </section>
    </div>
  );
}
