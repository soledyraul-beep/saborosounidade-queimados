import { motion } from 'motion/react';
import { SHOP_DATA } from '../data';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-bg-dark px-4 text-center overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold mb-8 headline-shadow tracking-tighter"
        >
          Hoje é dia de <span className="headline-accent">Saboroso Açaí</span>.
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg md:text-2xl mb-12 max-w-2xl mx-auto"
        >
          Uma dose de felicidade gelada transforma o seu dia. Peça agora e descubra por que somos o açaí e sorvete mais amado de Queimados.
        </motion.p>

        <div className="flex flex-col items-center gap-10">
          <motion.a
            href={SHOP_DATA.links.ifood}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-12 py-6 btn-saboroso font-black text-2xl md:text-3xl rounded-full shadow-[0_20px_50px_rgba(255,0,200,0.3)]"
          >
            🍨 QUERO SABOREAR AGORA NO IFOOD
          </motion.a>

          <div className="flex items-center gap-6 text-sm font-medium text-muted/80">
            <span>Prefere app? →</span>
            <div className="flex items-center gap-4">
               <a href={SHOP_DATA.links.ifood} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-secondary">Pedir pelo iFood</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
