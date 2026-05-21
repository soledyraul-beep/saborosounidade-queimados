import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../data';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-surface px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-bg-dark headline-shadow inline-block mb-4">
            Olha essa <span className="headline-accent">cremosidade...</span>
          </h2>
          <p className="text-gray-600 text-lg">
            O sabor irresistível que conquistou Queimados. Como você vai montar o seu hoje?
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {IMAGES.slice(4).map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedImage(src)}
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg bg-bg-mid"
            >
              <img 
                src={src} 
                alt={`Galeria Açaí ${idx}`} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                <div className="p-3 bg-accent text-bg-dark rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={24} />
                </div>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                  Ampliar Sabor
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Ampliada" 
                className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 md:-top-10 md:-right-10 p-2 bg-accent text-bg-dark rounded-full hover:scale-110 active:scale-95 transition-transform shadow-lg cursor-pointer"
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
