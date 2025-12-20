
import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Award, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Logo from '../components/Logo';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50">
      {/* Header */}
      <section className="bg-inca-blue py-24 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Logo layout="symbol" showText={false} className="scale-[5]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Nossa História</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Desde a fundação, a INCA Segurança Eletrônica se comprometeu em trazer o que há de mais inovador no mercado para a região de Nova Ponte.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-slate-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div className="mb-8">
                <Logo variant="dark" layout="stacked" className="scale-110 origin-left" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Especialistas em Tranquilidade</h2>
              <p>
                A INCA nasceu da necessidade de um serviço técnico especializado e confiável em segurança eletrônica em Minas Gerais. Com o passar dos anos, expandimos nossas fronteiras para atender desde pequenas residências até grandes complexos industriais e fazendas.
              </p>
              <p>
                Nossa filosofia é simples: entender a dor do cliente para oferecer a solução técnica exata. Não vendemos apenas equipamentos, entregamos projetos de segurança integrados que utilizam a inteligência artificial e a conectividade global a favor da proteção patrimonial.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <Award className="w-8 h-8 text-inca-cyan" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Qualidade</div>
                    <div className="text-xs uppercase font-bold text-slate-400">Certificada</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <Clock className="w-8 h-8 text-inca-cyan" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Suporte</div>
                    <div className="text-xs uppercase font-bold text-slate-400">Agilizado</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe Técnica" 
                className="rounded-3xl shadow-2xl relative z-10 border border-slate-200/50"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 bg-inca-cyan rounded-3xl -z-0 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-100/50 p-12 rounded-3xl shadow-sm border border-slate-200/50 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-inca-blue rounded-full flex items-center justify-center text-inca-cyan mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Missão</h3>
              <p className="text-slate-600">Prover soluções integradas de segurança eletrônica com excelência tecnológica, garantindo a proteção e o bem-estar dos nossos clientes.</p>
            </div>
            <div className="bg-slate-100/50 p-12 rounded-3xl shadow-sm border border-slate-200/50 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-inca-blue rounded-full flex items-center justify-center text-inca-cyan mx-auto mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Visão</h3>
              <p className="text-slate-600">Ser referência em inovação e confiança no mercado de segurança e monitoramento em Minas Gerais, liderando pela qualidade técnica.</p>
            </div>
            <div className="bg-slate-100/50 p-12 rounded-3xl shadow-sm border border-slate-200/50 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-inca-blue rounded-full flex items-center justify-center text-inca-cyan mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Valores</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="font-medium">Ética e Transparência</li>
                <li className="font-medium">Inovação Constante</li>
                <li className="font-medium">Comprometimento com o Cliente</li>
                <li className="font-medium">Segurança em Primeiro Lugar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications / Brands */}
      <section className="py-24 bg-slate-100/40 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">Principais Parceiros Tecnológicos</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-3xl font-black text-slate-900">Intelbras</div>
            <div className="text-3xl font-black text-slate-900">HIKVISION</div>
            <div className="text-3xl font-black text-slate-900">Starlink</div>
            <div className="text-3xl font-black text-slate-900">PPA</div>
            <div className="text-3xl font-black text-slate-900">Dahua</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
