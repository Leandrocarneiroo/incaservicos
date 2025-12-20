
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

  // Cores dinâmicas baseadas no scroll
  const navBg = isScrolled 
    ? 'bg-slate-50/98 backdrop-blur-md shadow-md border-b border-slate-200/60 py-1' 
    : 'bg-transparent py-4';
  
  const textColor = isScrolled ? 'text-slate-800' : 'text-white';
  const logoVariant = isScrolled ? 'dark' : 'light';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="transition-transform hover:opacity-90 active:scale-95 shrink-0">
            <Logo 
              variant={logoVariant} 
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
                className={`font-semibold text-sm uppercase tracking-widest transition-colors ${
                  location.pathname === link.path 
                    ? 'text-inca-cyan' 
                    : `${textColor} hover:text-inca-cyan`
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
              className={`${textColor} p-2 transition-colors`}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-slate-50 border-t border-slate-200' : 'bg-slate-900'} shadow-2xl absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold border-b ${
                  isScrolled ? 'text-slate-800 border-slate-200 hover:text-inca-blue' : 'text-white border-white/5 hover:text-inca-yellow'
                }`}
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
