import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../data';
import LocationMap from './LocationMap';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const differentials = [
  { icon: '💜', text: 'Açaí e sorvete cremosos e refrescantes' },
  { icon: '🍓', text: 'Coberturas premium e frutas sempre frescas' },
  { icon: '🎯', text: 'Entrega rápida e atendimento nota 10' },
  { icon: '📍', text: 'O saboroso mais amado de Queimados/RJ' }
];

// Select the last 4 images for the establishment slider
const sliderImages = IMAGES.slice(-4);

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <section className="py-20 bg-bg-dark px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 headline-shadow inline-block"
          >
            Saboroso Açaí — <span className="headline-accent">Qualidade</span> que você sente <br className="hidden md:block" />
            em cada colherada.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl"
          >
            Estamos localizados no coração de Queimados, trazendo o melhor do açaí e sorvete para refrescar o seu dia. Nosso diferencial é a rapidez no atendimento sem abrir mão da cremosidade e do sabor que nossos clientes amam.
          </motion.p>

          <div className="grid gap-4 max-w-md mx-auto md:mx-0 mb-10">
            {differentials.map((item, id) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.1 * id,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  x: 10,
                  backgroundColor: "rgba(168, 85, 247, 0.15)",
                  borderColor: "rgba(212, 255, 63, 0.4)"
                }}
                className="flex items-center gap-4 bg-bg-mid/50 p-4 rounded-xl border border-secondary/10 cursor-default transition-colors group"
              >
                <motion.span 
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  className="text-2xl drop-shadow-[0_0_8px_rgba(212,255,63,0.3)] transition-transform duration-300"
                >
                  {item.icon}
                </motion.span>
                <span className="font-medium group-hover:text-accent-soft transition-colors text-lg">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <LocationMap />
        </div>

        {/* Visual Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-[1.2] relative group w-full"
        >
          <div 
            onClick={() => setIsZoomed(true)}
            className="aspect-video md:aspect-[4/5] lg:aspect-square rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(123,47,190,0.5)] relative bg-bg-mid border border-white/5 cursor-zoom-in"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentIndex}
                src={sliderImages[currentIndex]} 
                alt={`Saboroso Unidade Queimados ${currentIndex + 1}`} 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Zoom Indicator */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <div className="p-4 bg-accent/90 text-bg-dark rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <ZoomIn size={32} />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full bg-bg-dark/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-bg-dark transition-all duration-300 pointer-events-auto transform hover:scale-110 active:scale-95 shadow-xl"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full bg-bg-dark/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-bg-dark transition-all duration-300 pointer-events-auto transform hover:scale-110 active:scale-95 shadow-xl"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {sliderImages.map((_, i) => (
                <button 
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className={`h-2 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-10 bg-accent' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full -z-10 blur-[100px] opacity-20" />
        </motion.div>
      </div>

      {/* Establishment Lightbox */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100] bg-bg-dark/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={sliderImages[currentIndex]} 
                alt="Unidade Saboroso Queimados Ampliada" 
                className="max-w-full max-h-[90vh] object-contain rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
                referrerPolicy="no-referrer"
              />
              
              {/* Lightbox Controls */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:-mx-20 pointer-events-none">
                <button 
                  onClick={prevSlide}
                  className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-bg-dark transition-all duration-300 pointer-events-auto shadow-2xl"
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-bg-dark transition-all duration-300 pointer-events-auto shadow-2xl"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              <button 
                onClick={() => setIsZoomed(false)}
                className="absolute -top-12 right-0 md:-top-16 md:-right-4 p-3 bg-accent text-bg-dark rounded-full hover:rotate-90 transition-all shadow-2xl cursor-pointer"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
