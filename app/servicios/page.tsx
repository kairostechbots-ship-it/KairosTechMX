'use client';

import { motion } from 'motion/react';
import { Bot, Globe, Code, Settings, CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/components/animations';

function ServiceCard({ icon, title, features }: { icon: React.ReactNode, title: string, features: string[] }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="w-20 h-20 rounded-2xl bg-blue-50 text-[#1E88FF] flex items-center justify-center mb-8 group-hover:bg-[#1E88FF] group-hover:text-white transition-colors border border-blue-100">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-8 text-[#0A1F44]">{title}</h3>
      <ul className="space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-4 text-slate-600 font-medium tracking-tight text-lg">
            <CheckCircle2 className="w-6 h-6 text-[#1E88FF] shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Servicios() {
  return (
    <div className="pb-24">
      {/* SERVICIOS HERO */}
      <section className="pt-20 pb-16 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-[#1E88FF]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-[#0A1F44]">Nuestros <span className="text-[#1E88FF]">Servicios</span></h1>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">Soluciones tecnológicas especializadas de principio a fin para transformar y escalar tu operación comercial.</p>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            <ServiceCard 
              icon={<Bot className="w-10 h-10" />}
              title="Chatbots con IA"
              features={["Atención 24/7 sin descansos.", "Filtran prospectos reales.", "Responden preguntas automáticamente.", "Agendan citas y procesos.", "Integración con WhatsApp, Facebook e Instagram."]}
            />
            <ServiceCard 
              icon={<Globe className="w-10 h-10" />}
              title="Páginas Web Profesionales"
              features={["Diseño moderno y responsivo.", "Optimización para Google (SEO).", "Formularios de contacto inteligentes.", "Portafolio y presentación de servicios.", "Conversión de visitas en prospectos."]}
            />
            <ServiceCard 
              icon={<Code className="w-10 h-10" />}
              title="Software a la Medida"
              features={["Sistemas administrativos y control.", "Sistemas de gestión y CRM personalizados.", "Control de inventarios y flujo.", "Portales privados para empleados.", "Dashboards y reportes analíticos."]}
            />
            <ServiceCard 
              icon={<Settings className="w-10 h-10" />}
              title="Automatización de Procesos"
              features={["Eliminación de tareas repetitivas.", "Integración entre distintos sistemas.", "Notificaciones y alertas automáticas.", "Flujos de aprobación digitalizados."]}
            />
          </motion.div>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="py-24 px-6 relative overflow-hidden bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-[#0A1F44]"
          >
            Así trabajamos tu proyecto
          </motion.h2>

          <div className="space-y-6">
            {[
              { s: "01", t: "Analizamos tu necesidad", d: "Entendemos tus problemas actuales y los objetivos que deseas alcanzar antes de escribir una línea de código." },
              { s: "02", t: "Diseñamos la solución", d: "Creamos un plan arquitectónico del software o estrategia a implementar incluyendo diseño UI/UX." },
              { s: "03", t: "Desarrollamos el sistema", d: "Programación ágil con entregas paulatinas para que veas el progreso de tu plataforma." },
              { s: "04", t: "Implementamos y capacitamos", d: "Liberamos el sistema en producción y enseñamos a tu equipo a aprovecharlo al máximo." },
              { s: "05", t: "Soporte constante", d: "Acompañamiento a largo plazo para asegurar que todo funcione perfecto y evolucione con tu negocio." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="font-display text-6xl font-black text-[#1E88FF]/20 leading-none">{step.s}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#0A1F44]">{step.t}</h3>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
