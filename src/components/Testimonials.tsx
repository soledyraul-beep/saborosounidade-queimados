import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    location: "Centro, Queimados",
    comment: "Melhor açaí da região! A cremosidade é surreal e os acompanhamentos são sempre fresquinhos. O pedido pelo iFood chega super rápido.",
    avatar: "https://i.pravatar.cc/150?u=mariana",
    stars: 5
  },
  {
    name: "Ricardo Santos",
    location: "Vila Tinguá",
    comment: "Atendimento nota 10. O sorvete de ninho com nutella é meu vício. Sempre que posso passo na loja física, o ambiente é muito agradável.",
    avatar: "https://i.pravatar.cc/150?u=ricardo",
    stars: 5
  },
  {
    name: "Juliana Costa",
    location: "Nossa Sra. de Fátima",
    comment: "Sou cliente fiel! O Saboroso realmente faz jus ao nome. A granola de lá é a melhor que já comi, super crocante.",
    avatar: "https://i.pravatar.cc/150?u=juliana",
    stars: 5
  },
  {
    name: "Felipe Oliveira",
    location: "Local Guide",
    comment: "Preço justo e qualidade superior. O açaí não tem pedrinhas de gelo, é puro fruto mesmo. Recomendo de olhos fechados!",
    avatar: "https://i.pravatar.cc/150?u=felipe",
    stars: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-bg-mid relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-bg-dark mb-4">
            <Quote size={24} fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold headline-shadow block">
            Quem prova, <span className="headline-accent">recomenda</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[350px] md:min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="bg-bg-dark/40 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
                {/* Large quote icon in background */}
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 -rotate-12 pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-[#FF00C8] to-[#9D4EDD]">
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full object-cover border-4 border-bg-dark shadow-xl"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-accent text-bg-dark p-1.5 rounded-full shadow-lg">
                      <Star size={16} fill="currentColor" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex gap-1 mb-4 justify-center md:justify-start">
                      {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                        <Star key={i} size={18} className="text-accent" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-white italic leading-relaxed mb-6 font-medium">
                      "{testimonials[currentIndex].comment}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted text-sm font-medium">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute inset-x-0 md:-inset-x-16 top-1/2 -translate-y-1/2 flex justify-between px-2 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-bg-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-bg-dark transition-all duration-300 pointer-events-auto transform hover:scale-110 active:scale-95 shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-bg-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-bg-dark transition-all duration-300 pointer-events-auto transform hover:scale-110 active:scale-95 shadow-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-10 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
