import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SHOP_DATA } from '../data';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-[999]"
        >
          <a
            href={SHOP_DATA.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-transform group"
          >
            <MessageCircle className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-sm hidden sm:block">Pedir agora</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
