
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/5 py-1' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="transition-transform hover:opacity-90 active:scale-95 shrink-0">
            {/* Logo otimizado para Navbar sem uso de scale CSS distorcivo */}
            <Logo 
              variant="light" 
              layout="horizontal"
              size="sm"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold text-sm uppercase tracking-widest transition-colors hover:text-inca-yellow ${
                  location.pathname === link.path 
                    ? 'text-inca-cyan' 
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-inca-yellow text-inca-blue px-6 py-2.5 rounded-lg font-black text-sm uppercase tracking-tighter hover:bg-yellow-400 transition-all shadow-md active:scale-95"
            >
              Orçamento
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 shadow-2xl absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300 border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-white hover:text-inca-yellow border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-inca-yellow text-inca-blue py-4 rounded-xl font-bold uppercase"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
