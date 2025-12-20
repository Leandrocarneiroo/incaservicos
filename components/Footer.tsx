
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-8">
            <Logo variant="light" layout="stacked" className="scale-100 origin-left" />
            <p className="text-sm leading-relaxed max-w-xs">
              Especialistas em soluções inteligentes de segurança e monitoramento em Nova Ponte e região. Tecnologia de ponta para proteger o que é mais importante para você.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-inca-cyan hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-inca-cyan hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-inca-cyan transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-inca-cyan transition-colors">Sobre Nós</Link></li>
              <li><Link to="/portfolio" className="hover:text-inca-cyan transition-colors">Portfólio</Link></li>
              <li><Link to="/contato" className="hover:text-inca-cyan transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Nossos Serviços</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-inca-cyan transition-colors cursor-pointer">Câmeras de Segurança (CFTV)</li>
              <li className="hover:text-inca-cyan transition-colors cursor-pointer">Alarmes Monitorados</li>
              <li className="hover:text-inca-cyan transition-colors cursor-pointer">Controle de Acesso Facial</li>
              <li className="hover:text-inca-cyan transition-colors cursor-pointer">Internet Satélite Starlink</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Fale Conosco</h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-inca-cyan shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-inca-cyan shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-inca-cyan shrink-0" />
              <span className="break-all">{COMPANY_INFO.email}</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs space-y-2">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <p>CNPJ: {COMPANY_INFO.cnpj}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
