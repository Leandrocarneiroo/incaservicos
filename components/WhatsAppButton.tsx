
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para segurança eletrônica.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group flex items-center gap-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold px-0 group-hover:px-2">
        Orçamento via WhatsApp
      </span>
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
