import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../data';

const captions = [
  '🍇 Açaí puro e cremoso',
  '🍪 (SABOROSO DE OREO)',
  '🍓 Frutas selecionadas',
  '🎨 Monte do seu jeito',
  '💜 Feito com amor'
];

const slideImages = IMAGES.slice(0, 5);

export default function VisualProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  return (
    <section className="py-20 bg-bg-dark overflow-hidden px-4">
      <div className="max-w-4xl mx-auto relative group">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[16/9] md:aspect-[21/9] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 bg-bg-mid"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={slideImages[currentIndex]} 
                alt={captions[currentIndex]} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-8"
              >
                <span className="inline-block px-6 py-3 btn-saboroso font-black rounded-full shadow-2xl text-sm md:text-lg transform -rotate-2 border border-white/20">
                  {captions[currentIndex]}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-bg-dark/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-bg-dark transition-all duration-300 pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-bg-dark/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-bg-dark transition-all duration-300 pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {slideImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full -z-10" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 blur-[80px] rounded-full -z-10" />
      </div>
    </section>
  );
}
