import { SHOP_DATA } from '../data';
import { Instagram, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-dark pt-20 pb-10 px-4 border-t border-secondary/20 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">Saboroso Açaí e Sorvete</h3>
          <p className="text-muted text-sm max-w-sm mx-auto md:mx-0 mb-6">
            O açaí mais saboroso de Queimados/RJ. Aberto todos os dias para te servir o melhor.
          </p>
          <div className="space-y-4 text-sm text-muted/60">
            <a 
              href={SHOP_DATA.links.googleMaps} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-accent transition-colors group"
            >
              <span className="group-hover:scale-110 transition-transform">📍</span>
              {SHOP_DATA.address}
            </a>
            <p>🕙 {SHOP_DATA.hours}</p>
          </div>
        </div>

        {/* Socials & Links */}
        <div className="flex flex-col items-center md:items-end justify-center gap-6">
          <div className="flex items-center gap-4">
             <a 
              href={SHOP_DATA.links.ifood} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full text-white hover:bg-accent transition-all duration-300 transform hover:-rotate-12"
              title="Pedir no iFood"
            >
              <ShoppingBag size={24} />
            </a>
             <a 
              href={SHOP_DATA.links.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full text-white hover:bg-accent transition-all duration-300 transform hover:rotate-12"
              title="Seguir no Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted/20 text-center font-mono">
        <p>© 2026 {SHOP_DATA.name} · Todos os direitos reservados</p>
        <p>Desenvolvido com 💜 em {SHOP_DATA.city}</p>
      </div>
    </footer>
  );
}
