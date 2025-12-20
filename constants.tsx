
import React from 'react';
import { Camera, Shield, UserCheck, Zap, PhoneCall, Globe, Wifi, Settings, Home, Building2, Factory, Tractor, Landmark } from 'lucide-react';
import { Service, PortfolioProject } from './types';

export const COMPANY_INFO = {
  name: "INCA Segurança Eletrônica e Monitoramento",
  cnpj: "24.838.242/0001-17",
  address: "Avenida Governador Valadares, 1008 – Nova Ponte/MG",
  phone: "(34) 99131-6964",
  whatsapp: "5534991316964",
  email: "inca.eletrica@hotmail.com",
};

export const SERVICES: Service[] = [
  {
    id: 'cftv',
    title: 'Monitoramento CFTV/IP',
    description: 'Instalação de câmeras de alta resolução com acesso remoto pelo celular.',
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'alarmes',
    title: 'Alarmes Monitorados',
    description: 'Sistemas inteligentes de detecção de intrusão com resposta rápida 24h.',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'acesso',
    title: 'Controle de Acesso',
    description: 'Biometria, reconhecimento facial e tags para total controle de entrada.',
    icon: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cerca',
    title: 'Proteção Perimetral',
    description: 'Cerca elétrica, concertina e sensores de barreira para máxima segurança.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1508849789987-4e4710479969?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'interfonia',
    title: 'Interfonia e Vídeo',
    description: 'Vídeo porteiros residenciais e coletivos com integração digital.',
    icon: 'PhoneCall',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'satelite',
    title: 'Internet Satélite (Starlink)',
    description: 'Instalação e configuração de internet via satélite para áreas rurais.',
    icon: 'Wifi',
    image: 'https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'redes',
    title: 'Redes e Fibra Óptica',
    description: 'Estruturação de redes de dados e fusão de fibra para alta performance.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'manutencao',
    title: 'Manutenção Técnica',
    description: 'Assistência preventiva e corretiva para garantir o funcionamento 24/7.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  }
];

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: '1',
    title: 'Segurança em Área Rural',
    category: 'Rural',
    description: 'Monitoramento perimetral e câmeras solares para fazenda de grande porte.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Condomínio Residencial',
    category: 'Condomínio',
    description: 'Portaria inteligente com reconhecimento facial e câmeras Speed Dome.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Centro Comercial',
    category: 'Empresarial',
    description: 'Sistema completo de CFTV IP e alarme de incêndio integrado.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Residência Premium',
    category: 'Residencial',
    description: 'Automação de segurança e câmeras 4K com visão noturna colorida.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  }
];

export const AUDIENCE_CARDS = [
  { title: 'Residencial', icon: <Home className="w-8 h-8" /> },
  { title: 'Condomínios', icon: <Building2 className="w-8 h-8" /> },
  { title: 'Empresas', icon: <Factory className="w-8 h-8" /> },
  { title: 'Fazendas', icon: <Tractor className="w-8 h-8" /> },
  { title: 'Órgãos Públicos', icon: <Landmark className="w-8 h-8" /> },
];

export const ICON_MAP: Record<string, any> = {
  Camera, Shield, UserCheck, Zap, PhoneCall, Globe, Wifi, Settings
};
