import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SHOP_DATA } from '../data';
import { MapPin, ExternalLink, Clock } from 'lucide-react';

export default function LocationMap() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Rio de Janeiro Time (UTC-3)
      const options = { timeZone: 'America/Sao_Paulo', hour: 'numeric' as const, hour12: false };
      const formatter = new Intl.DateTimeFormat('pt-BR', options);
      const rioHour = parseInt(formatter.format(now));
      
      // Shop hours are 10:00 to 23:00 everyday
      setIsOpen(rioHour >= 10 && rioHour < 23);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 w-full max-w-xl mx-auto md:mx-0 p-1 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl"
    >
      <div className="bg-bg-mid rounded-[calc(1.5rem-4px)] overflow-hidden">
        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-accent/20 rounded-lg text-accent">
                <MapPin size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white mb-0.5 text-sm uppercase tracking-wider opacity-60">Endereço</h4>
                <p className="text-white text-sm leading-snug font-medium">
                  {SHOP_DATA.address}
                </p>
              </div>
            </div>

            {/* Hours with dynamic badge */}
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-secondary/20 rounded-lg text-secondary">
                <Clock size={20} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-3 mb-0.5">
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider opacity-60">Horário</h4>
                  <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${isOpen ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                    {isOpen ? 'Aberto Agora' : 'Fechado'}
                  </div>
                </div>
                <p className="text-white text-sm font-medium">
                  {SHOP_DATA.hours}
                </p>
              </div>
            </div>
          </div>
          
          <a 
            href={SHOP_DATA.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-bg-dark font-black rounded-xl text-sm transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-xl"
          >
            VER NO MAPA
            <ExternalLink size={16} />
          </a>
        </div>
        
        {/* Visual Map Placeholder */}
        <div className="h-48 w-full relative bg-bg-dark/50 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
            alt="Mapa de Queimados" 
            className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/40 animate-pulse">
               <MapPin size={32} className="text-accent" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-mid to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
