import { motion } from 'motion/react';
import { SHOP_DATA, IMAGES } from '../data';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 bg-bg-dark">
      {/* Dynamic Animated Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-secondary/15 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[30%] right-[10%] w-72 h-72 rounded-full bg-accent/5 blur-[80px]" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-5 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md text-xs font-bold text-accent tracking-[0.2em] uppercase mb-8"
        >
          ✨ Queimados/RJ · Unidade Avenida do Tinguá
        </motion.span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 headline-shadow tracking-tighter">
          O Açaí <br />
          <span className="headline-accent">Mais Saboroso</span> <br />
          de Queimados
        </h1>
        
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Rápido e delicioso como você nunca viu. Açaí premium, sorvetes artesanais e as melhores coberturas direto no seu endereço.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a
            href={SHOP_DATA.links.ifood}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 btn-saboroso font-black text-lg md:text-xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,0,200,0.3)]"
          >
            FAZER MEU PEDIDO NO IFOOD
          </a>
          
          <p className="text-[10px] md:text-xs text-muted/60 font-mono tracking-widest uppercase flex items-center gap-4">
            <span>⚡ Rápido</span>
            <span className="w-1 h-1 bg-accent/30 rounded-full" />
            <span>🍨 Artesanal</span>
            <span className="w-1 h-1 bg-accent/30 rounded-full" />
            <span>📍 Local</span>
          </p>
        </div>
      </motion.div>

    </section>
  );
}
