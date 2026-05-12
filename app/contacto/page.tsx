'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '@/components/animations';
import { CheckCircle2 } from 'lucide-react';

export default function Contacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/kairostechbots@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      const result = await res.json();
      
      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="pb-24">
      {/* CONTACT HERO & FORM */}
      <section className="pt-20 pb-24 px-6 relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E88FF]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
             <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-[#0A1F44]">
               Automatiza. Conecta. <br/><span className="text-[#1E88FF]">Vende más.</span>
             </h1>
             <p className="text-xl text-slate-600 mb-12 font-medium max-w-2xl mx-auto">
               En Kairos Tech desarrollamos tecnología que trabaja para ti y ayuda a tu negocio a crecer. Déjanos tus datos para recibir asesoría.
             </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 max-w-xl mx-auto text-left"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#0A1F44]">Solicita tu asesoría gratuita</h3>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-green-900 mb-2">¡Solicitud enviada con éxito!</h4>
                <p className="text-green-700 font-medium">Nos pondremos en contacto contigo lo antes posible.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 font-bold text-[#1E88FF]">Volver</button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="Nueva cotización KAIROS TECH" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Nombre completo</label>
                  <input required type="text" name="nombre" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E88FF] focus:ring-1 focus:ring-[#1E88FF] transition-all focus:bg-white" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Correo electrónico</label>
                  <input required type="email" name="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E88FF] focus:ring-1 focus:ring-[#1E88FF] transition-all focus:bg-white" placeholder="Ej. juan@correo.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Empresa / Negocio (Opcional)</label>
                  <input type="text" name="empresa" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E88FF] focus:ring-1 focus:ring-[#1E88FF] transition-all focus:bg-white" placeholder="Ej. Tu Negocio S.A." />
                </div>
                 <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Teléfono (WhatsApp)</label>
                    <input required type="tel" name="telefono" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E88FF] focus:ring-1 focus:ring-[#1E88FF] transition-all focus:bg-white" placeholder="Ej. 22 22 22 22 22" />
                 </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">¿En qué te podemos ayudar?</label>
                  <textarea required name="mensaje" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E88FF] focus:ring-1 focus:ring-[#1E88FF] transition-all focus:bg-white resize-none" placeholder="Cuéntanos brevemente qué necesitas automatizar o desarrollar..."></textarea>
                </div>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-bold">Ocurrió un error al enviar. Por favor, intenta de nuevo.</p>
                )}

                <button type="submit" disabled={status === 'loading'} className="w-full bg-[#1E88FF] disabled:bg-blue-300 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors mt-6 shadow-lg shadow-blue-500/30 flex justify-center items-center">
                  {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
