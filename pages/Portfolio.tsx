
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { Search } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  
  const categories = ['Todos', 'Residencial', 'Condomínio', 'Empresarial', 'Rural', 'Público'];
  
  const filteredProjects = filter === 'Todos' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === filter);

  const handleDetailsClick = (title: string) => {
    alert(`Detalhes do projeto: ${title}`);
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="bg-inca-blue py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Nosso Portfólio</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Confira alguns dos nossos projetos executados com sucesso em toda a região. Segurança de alto nível para cada tipo de cliente.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-50/95 backdrop-blur-md sticky top-16 z-30 shadow-sm border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all text-sm ${
                filter === cat 
                  ? 'bg-inca-cyan text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all border border-slate-200/50 flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-inca-cyan text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-inca-cyan transition-colors">{project.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Projeto Concluído</span>
                      <button 
                        onClick={() => handleDetailsClick(project.title)}
                        className="text-inca-cyan text-xs font-bold hover:underline transition-all active:scale-95"
                      >
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 bg-slate-200/50 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Nenhum projeto encontrado nesta categoria</h3>
              <p className="text-slate-500">Tente selecionar outra categoria ou confira todos os nossos trabalhos.</p>
              <button onClick={() => setFilter('Todos')} className="text-inca-cyan font-bold hover:underline transition-all">Ver todos os projetos</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
