
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: 'Orçamento de Câmeras',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'O nome é obrigatório';
        if (value.trim().length < 3) return 'O nome deve ter pelo menos 3 caracteres';
        return undefined;
      case 'phone':
        const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        if (!value.trim()) return 'O telefone é obrigatório';
        if (!phoneRegex.test(value.trim().replace(/\s/g, ''))) return 'Informe um telefone válido (ex: 34 99131-6964)';
        return undefined;
      case 'email':
        if (value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value.trim())) return 'Informe um e-mail válido';
        }
        return undefined;
      case 'message':
        if (!value.trim()) return 'A mensagem é obrigatória';
        if (value.trim().length < 10) return 'A mensagem é muito curta';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) (newErrors as any)[key] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true, message: true });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', subject: 'Orçamento de Câmeras', message: '' });
        setErrors({});
        setTouched({});
      }, 1500);
    }
  };

  const getInputClass = (fieldName: keyof FormErrors) => {
    const baseClass = "w-full px-5 py-4 bg-white border rounded-xl transition-all outline-none";
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-red-500 focus:ring-2 focus:ring-red-200`;
    }
    if (touched[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-500/50 focus:ring-2 focus:ring-inca-cyan/20`;
    }
    return `${baseClass} border-slate-200 focus:ring-2 focus:ring-inca-cyan focus:border-inca-cyan`;
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="bg-inca-blue py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Fale Conosco</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Dúvidas ou orçamentos? Nossa equipe está pronta para atender você com agilidade e transparência.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Informações de Contato</h2>
                <p className="text-slate-600">Escolha o canal de sua preferência para falar com a INCA.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-inca-cyan group-hover:bg-inca-cyan group-hover:text-white transition-all border border-slate-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Telefone e WhatsApp</h4>
                    <p className="text-slate-500 text-sm font-medium">{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-inca-cyan group-hover:bg-inca-cyan group-hover:text-white transition-all border border-slate-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">E-mail Corporativo</h4>
                    <p className="text-slate-500 text-sm font-medium break-all">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-inca-cyan group-hover:bg-inca-cyan group-hover:text-white transition-all border border-slate-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Endereço</h4>
                    <p className="text-slate-500 text-sm font-medium">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-inca-cyan group-hover:bg-inca-cyan group-hover:text-white transition-all border border-slate-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Atendimento</h4>
                    <p className="text-slate-500 text-sm font-medium">Segunda a Sexta: 08:00 – 18:00</p>
                    <p className="text-slate-500 text-sm font-medium">Plantão 24h para Emergências</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-600 shadow-xl transition-all active:scale-95"
                >
                  <MessageCircle className="w-6 h-6" /> Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200/40">
              {submitted ? (
                <div className="text-center py-20 space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-12 h-12" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Mensagem Enviada!</h2>
                  <p className="text-slate-600 max-w-md mx-auto text-lg">
                    Agradecemos seu contato. Nossa equipe analisará sua solicitação e entrará em contato o mais breve possível.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-inca-cyan font-bold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Solicitar Orçamento</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex justify-between">
                        Nome Completo *
                        {touched.name && errors.name && <span className="text-red-500 font-medium text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</span>}
                      </label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text" 
                        placeholder="Ex: João da Silva" 
                        className={getInputClass('name')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex justify-between">
                        Celular / WhatsApp *
                        {touched.phone && errors.phone && <span className="text-red-500 font-medium text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</span>}
                      </label>
                      <input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="tel" 
                        placeholder="(34) 99999-9999" 
                        className={getInputClass('phone')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex justify-between">
                        E-mail
                        {touched.email && errors.email && <span className="text-red-500 font-medium text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
                      </label>
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email" 
                        placeholder="seu@email.com" 
                        className={getInputClass('email')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Assunto</label>
                      <div className="relative">
                        <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-inca-cyan focus:border-inca-cyan transition-all outline-none appearance-none font-medium"
                        >
                          <option>Orçamento de Câmeras</option>
                          <option>Alarme Monitorado</option>
                          <option>Internet Starlink</option>
                          <option>Manutenção Preventiva</option>
                          <option>Outros Serviços</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex justify-between">
                      Mensagem / Descrição do Projeto *
                      {touched.message && errors.message && <span className="text-red-500 font-medium text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</span>}
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Descreva brevemente o que você precisa..." 
                      className={getInputClass('message')}
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-inca-blue text-white py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>Enviar Mensagem <Send className="w-6 h-6" /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium">Prometemos responder em até 24 horas úteis.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full bg-slate-200 border-t border-slate-300">
        <iframe 
          title="Localização INCA"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.16781213038!2d-47.693452243765184!3d-19.141757912423187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bb2e66699d7a27%3A0xc6c7d7e6d2a84976!2sNova%20Ponte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
          className="w-full h-full border-0 grayscale opacity-70"
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
