import { motion } from 'motion/react';
import { Smartphone, UtensilsCrossed, Sparkles } from 'lucide-react';

const steps = [
  { 
    icon: <Smartphone size={32} />,
    title: 'Acesse o iFood', 
    sub: 'Link na bio ou aqui',
    desc: 'O cardápio está pronto esperando por você.'
  },
  { 
    icon: <UtensilsCrossed size={32} />,
    title: 'Escolha seu sabor', 
    sub: 'Muitas opções',
    desc: 'Do açaí mais cremoso aos sorvetes artesanais.'
  },
  { 
    icon: <Sparkles size={32} />,
    title: 'Aproveite!', 
    sub: 'Entrega ultra ágil',
    desc: 'Receba fresquinho onde você estiver em Queimados.'
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-bg-dark px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4 block">Processo Simples</span>
          <h2 className="text-4xl md:text-6xl font-bold headline-shadow inline-block">
            Sua Dose de <span className="headline-accent">Sabor</span> em 3 Passos
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Path (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/5 -z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-accent via-secondary to-accent origin-left"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-bg-dark border border-white/10 flex items-center justify-center text-[10px] font-black font-mono text-muted/40 z-20">
                  0{idx + 1}
                </div>

                {/* Animated Icon Container */}
                <motion.div 
                  whileHover={{ 
                    rotateY: 180,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 bg-bg-mid border border-white/5 rounded-3xl flex items-center justify-center text-accent mb-8 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-accent-soft font-bold text-sm tracking-wide bg-accent/10 px-3 py-1 rounded-full inline-block">
                    {step.sub}
                  </p>
                  <p className="text-muted text-base leading-relaxed max-w-[250px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent/0 group-hover:bg-accent/40 blur-md transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
