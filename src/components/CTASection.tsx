import { motion } from 'motion/react';
import { SHOP_DATA } from '../data';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary to-secondary px-4 text-center">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent/20" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 headline-shadow tracking-tight">
            Bateu aquela vontade?
          </h2>
          <p className="text-xl md:text-2xl text-accent-soft font-medium mb-12">
            A gente tá aqui esperando por você. 🍇
          </p>
          
          <div className="h-0.5 w-24 bg-accent/30 mx-auto mb-12 rounded-full" />

          <div className="flex flex-col items-center gap-6">
            <motion.a
              href={SHOP_DATA.links.ifood}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 btn-saboroso font-black text-xl md:text-2xl rounded-full shadow-[0_10px_40px_rgba(255,0,200,0.3)]"
            >
              🚀 PEDIR AGORA NO IFOOD
            </motion.a>
            
            <p className="text-muted text-sm font-medium">
              Sem taxa de adesão · Sem cadastro · Só felicidade
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
