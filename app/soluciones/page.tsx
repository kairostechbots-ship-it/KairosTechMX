'use client';

import { motion } from 'motion/react';
import { MessageSquare, Clock, TrendingUp, Globe, Settings, Code, Bot, CheckCircle2, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/components/animations';
import Link from 'next/link';

export default function Soluciones() {
  return (
    <div className="pb-24">
      {/* 2. PROBLEMAS */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-[#0A1F44]">¿Te identificas con <br/><span className="text-[#1E88FF]">algún problema?</span></h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">Si te pasa esto, estás perdiendo ventas y tiempo valioso. Tu negocio necesita una actualización tecnológica.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Clientes preguntan y no compran", icon: MessageSquare },
              { title: "Mensajes repetitivos todo el día", icon: Clock },
              { title: "Respuestas tardías = ventas perdidas", icon: TrendingUp },
              { title: "Falta de presencia digital profesional", icon: Globe },
              { title: "Procesos manuales que quitan tiempo", icon: Settings },
              { title: "Usas Excel en lugar de un sistema", icon: Code }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:bg-blue-50/50 hover:border-blue-200 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="pt-2 font-bold text-[#0A1F44] text-lg">
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFICIOS */}
      <section className="py-24 px-6 bg-[#0A1F44] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5B]"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-center font-bold mb-16"
          >
            ¿Qué gana tu negocio al <span className="text-[#1E88FF]">modernizarse?</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {[
              { t: "Más ventas", d: "Aumento de conversión" },
              { t: "Ahorro de tiempo", d: "Horas liberadas a la semana" },
              { t: "Prospectos calificados", d: "Menos curiosos, más clientes" },
              { t: "Imagen profesional", d: "Posicionamiento de marca" },
              { t: "Control operativo", d: "Visibilidad total del negocio" },
              { t: "Escalabilidad", d: "Crecimiento sin dolor" }
            ].map((b, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors backdrop-blur-sm"
               >
                 <div className="text-xl md:text-2xl font-bold mb-2 text-[#1E88FF]">{b.t}</div>
                 <div className="text-sm md:text-base text-white/70 font-medium">{b.d}</div>
               </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link href="/servicios" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0A1F44] hover:bg-slate-100 transition-colors font-bold shadow-xl text-lg">
                Mira cómo lo resolvemos <ArrowRight className="w-5 h-5"/>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
