
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Residencial' | 'Condomínio' | 'Empresarial' | 'Rural' | 'Público';
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
