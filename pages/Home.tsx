
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Zap, PhoneCall } from 'lucide-react';
import { SERVICES, AUDIENCE_CARDS, ICON_MAP, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-30"
            alt="Segurança e Tecnologia"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-inca-blue/90 via-inca-blue/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-inca-yellow/20 border border-inca-yellow/30 rounded-full text-inca-yellow text-sm font-bold uppercase tracking-wider animate-pulse">
              <Zap className="w-4 h-4" /> Segurança Inteligente
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Sua tranquilidade é nossa <span className="text-inca-yellow">prioridade.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Soluções completas em monitoramento, CFTV, alarmes e infraestrutura para residências, empresas e o setor rural em Nova Ponte/MG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contato" 
                className="flex items-center justify-center gap-2 bg-inca-yellow hover:bg-yellow-500 text-inca-blue px-8 py-4 rounded-xl font-black text-lg transition-all shadow-lg active:scale-95"
              >
                Solicitar Orçamento Grátis <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-inca-blue mb-1">8+</div>
            <div className="text-slate-500 font-medium">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-inca-blue mb-1">500+</div>
            <div className="text-slate-500 font-medium">Projetos Executados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-inca-blue mb-1">100%</div>
            <div className="text-slate-500 font-medium">Suporte Técnico</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-inca-blue mb-1">24h</div>
            <div className="text-slate-500 font-medium">Monitoramento</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Soluções de Ponta</h2>
            <p className="text-slate-600 text-lg">Oferecemos o que há de mais moderno em segurança eletrônica para diversos setores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const IconComp = ICON_MAP[service.icon];
              return (
                <div key={service.id} className="group bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200/60 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-inca-blue rounded-2xl flex items-center justify-center text-inca-yellow mb-6 group-hover:bg-inca-yellow group-hover:text-inca-blue transition-colors duration-300">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/contato" className="mt-auto text-inca-blue font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saber Mais <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-inca-blue/5 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000" 
                alt="Instalação profissional" 
                className="relative z-10 rounded-3xl shadow-2xl border border-slate-200/50"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-8 -right-8 z-20 bg-inca-blue text-white p-8 rounded-2xl shadow-xl hidden md:block border-b-4 border-inca-yellow">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-inca-yellow rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-inca-blue" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Qualidade</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Por que escolher a INCA?</h2>
                <p className="text-slate-600 text-lg">Não somos apenas instaladores. Somos parceiros da sua segurança, focados em soluções personalizadas para cada cenário.</p>
              </div>

              <div className="grid gap-6">
                {[
                  { title: 'Equipe Especializada', desc: 'Técnicos treinados e certificados para garantir a melhor instalação.' },
                  { title: 'Tecnologia Avançada', desc: 'Trabalhamos com as melhores marcas mundiais do mercado (Hikvision, Intelbras, Starlink).' },
                  { title: 'Suporte Pós-Venda', desc: 'Manutenção ágil e atendimento humanizado para qualquer necessidade.' },
                  { title: 'Foco em Resultados', desc: 'Sistemas que realmente funcionam e inibem a criminalidade.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-inca-blue/10 flex items-center justify-center text-inca-blue">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-24 bg-inca-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Atendemos todos os públicos</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Soluções adaptadas para diferentes necessidades e níveis de complexidade.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {AUDIENCE_CARDS.map((card, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl text-center hover:bg-inca-yellow hover:translate-y-[-8px] transition-all cursor-default border border-white/5 group">
                <div className="flex justify-center mb-6 text-inca-yellow group-hover:text-inca-blue transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg group-hover:text-inca-blue transition-colors">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'João Silva', role: 'Fazendeiro', text: 'A instalação da Starlink e das câmeras na fazenda mudou nossa vida. Agora monitoro tudo de qualquer lugar.' },
              { name: 'Maria Santos', role: 'Síndica', text: 'A INCA trouxe uma solução de reconhecimento facial para o condomínio que reduziu custos e aumentou a segurança.' },
              { name: 'Roberto Lima', role: 'Empresário', text: 'Profissionalismo impecável. O sistema de alarmes monitorados é robusto e o suporte é muito rápido.' },
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/50 italic relative">
                <div className="text-inca-yellow mb-4 flex">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-inca-blue flex items-center justify-center text-white font-bold text-xs">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 not-italic">{t.name}</div>
                    <div className="text-xs text-slate-500 not-italic">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-inca-blue to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Zap className="w-96 h-96 absolute -bottom-20 -right-20 rotate-12 text-inca-yellow" />
          <Zap className="w-64 h-64 absolute -top-10 -left-10 -rotate-12 text-inca-yellow" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Pronto para elevar o nível da sua segurança?</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Não espere pelo imprevisto. Solicite hoje mesmo uma visita técnica gratuita e um orçamento sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link 
              to="/contato" 
              className="bg-inca-yellow text-inca-blue hover:bg-yellow-400 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all active:scale-95"
            >
              Começar Agora
            </Link>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} 
              className="flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-xl transition-all"
            >
              <PhoneCall className="w-5 h-5" /> Ligar para INCA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
