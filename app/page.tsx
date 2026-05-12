'use client';

import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Code } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp } from '@/components/animations';

export default function Inicio() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E88FF]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-300/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-white text-[#1E88FF] text-sm font-bold mb-8 shadow-sm">
                 <span className="relative flex h-2.5 w-2.5 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E88FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1E88FF]"></span>
                 </span>
                 Tecnología que trabaja para ti
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-[#0A1F44]">
                Impulsa tu negocio con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88FF] to-blue-500">tecnología inteligente</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                Desarrollo de software a la medida, chatbots con IA y automatización de procesos diseñados para escalar tus ventas y optimizar tu operación diaria.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto" className="px-8 py-4 rounded-xl bg-[#0A1F44] hover:bg-[#0A1F44]/90 transition-colors font-bold text-center text-white shadow-xl shadow-[#0A1F44]/20 flex items-center justify-center gap-2">
                  Solicitar asesoría gratuita <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/servicios" className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 transition-colors font-bold text-center text-slate-800 shadow-sm flex items-center justify-center">
                  Descubrir servicios
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-[600px]"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl skew-y-[-6deg] translate-x-12">
                <div className="w-full h-full bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex flex-col">
                  <div className="h-8 border-b border-slate-200 flex items-center px-4 gap-2 bg-white">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 p-6 relative">
                    <div className="w-3/4 h-32 bg-white rounded-lg shadow-sm border border-slate-100 mb-4" />
                    <div className="w-1/2 h-8 bg-white rounded-lg shadow-sm border border-slate-100" />
                    <div className="absolute bottom-6 right-6 w-24 h-24 bg-[#1E88FF] rounded-lg blur-2xl opacity-20" />
                  </div>
                </div>
              </div>
              <div className="absolute left-0 bottom-1/4 w-[280px] h-[520px] bg-white border border-slate-200 rounded-[2.5rem] p-3 shadow-2xl rotate-6 z-20">
                <div className="w-full h-full bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col relative overflow-hidden">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-200 rounded-full z-30" />
                  <div className="flex-1 p-4 bg-white flex flex-col justify-end pt-12 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent" />
                    <div className="w-3/4 p-3 bg-slate-100 rounded-2xl rounded-tl-sm text-sm mb-4 text-slate-700 self-start border border-slate-100 shadow-sm relative z-10">
                      Hola, ¿tienen disponibilidad para hoy?
                    </div>
                    <div className="w-5/6 p-3 bg-[#1E88FF] rounded-2xl rounded-tr-sm text-sm text-white self-end shadow-sm relative z-10">
                      ¡Hola! 👋 Sí, tenemos espacio a las 4:00 PM o 6:00 PM. ¿Cuál prefieres?
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (PROMOTIONAL) */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-transparent">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight text-[#0A1F44]">
              Tu proyecto en manos<br/> de <span className="text-[#1E88FF]">especialistas.</span>
            </h2>
            <div className="space-y-6">
              {[
                "Desarrollo 100% personalizado adaptado a ti.",
                "Soluciones tecnológicas escalables (crecen contigo).",
                "Uso de tecnologías modernas y de alto rendimiento.",
                "Comunicación directa y transparencia.",
                "Soporte y acompañamiento continuo."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#1E88FF] shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700 font-semibold">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
               <Link href="/soluciones" className="inline-flex items-center gap-2 text-[#1E88FF] font-bold hover:gap-4 transition-all">
                  Explorar nuestras soluciones <ArrowRight className="w-5 h-5"/>
               </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] hidden md:block"
          >
             <div className="absolute inset-0 bg-white shadow-xl rounded-3xl border border-slate-200 flex items-center justify-center p-8">
                <div className="w-full h-full bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
                   <Code className="w-32 h-32 text-blue-200" />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent" />
                </div>
             </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="py-24 px-6 relative bg-[#0A1F44] text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-display text-5xl md:text-6xl font-bold mb-6"
          >
            Automatiza. Conecta. <span className="text-[#1E88FF]">Vende más.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-white/70 mb-12 font-medium"
          >
            Da el primer paso hacia la transformación digital de tu negocio.
          </motion.p>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1E88FF] hover:bg-blue-500 transition-colors font-bold text-white shadow-xl shadow-blue-500/20 text-lg hover:-translate-y-1">
              Contáctanos hoy <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
