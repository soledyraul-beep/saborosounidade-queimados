import { motion } from 'motion/react';

const reasons = [
  { icon: '🧊', title: 'Sempre Fresquinho', desc: 'Preparado na hora do pedido, nunca congelado' },
  { icon: '💜', title: 'Cremosidade Real', desc: 'Textura densa e aveludada, do jeito que tem que ser' },
  { icon: '⚡', title: 'Rápido e Fácil', desc: 'Peça pelo WhatsApp em segundos, sem app' },
  { icon: '🏆', title: 'Qualidade Premium', desc: 'Ingredientes selecionados, padrão que você sente' }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-bg-dark px-4 relative overflow-hidden">
      {/* Decorative background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4 block">Diferenciais</span>
          <h2 className="text-4xl md:text-6xl font-bold headline-shadow inline-block">
            4 razões pra você <span className="headline-accent">pedir agora</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative p-8 rounded-[32px] bg-bg-mid/40 border border-white/5 backdrop-blur-sm group hover:bg-bg-mid/60 transition-all duration-500"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-[32px] p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#FF00C8] to-[#9D4EDD] -z-10" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF00C8]/20 to-[#9D4EDD]/20 flex items-center justify-center text-4xl mb-8 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed text-base opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
