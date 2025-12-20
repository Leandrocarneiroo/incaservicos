
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  layout?: 'horizontal' | 'stacked' | 'symbol';
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  layout = 'horizontal',
  className = '', 
  showText = true,
  size = 'md'
}) => {
  const isDark = variant === 'dark';
  const mainColor = isDark ? '#00438C' : '#FFFFFF';
  const boltColor = '#FDB913';
  const separatorColor = isDark ? '#94A3B8' : '#475569';

  /**
   * Símbolo 'i' / Raio INCA
   * Reconstruído com base na imagem real para garantir a proporção correta entre o raio e a base.
   */
  const IncaSymbol = () => {
    // Configurações de escala baseadas no prop size
    const scales = {
      sm: { w: 'w-10', h: 'h-10', viewBox: '0 0 100 110', rectX: 40, rectW: 42, rectH: 52 },
      md: { w: 'w-16', h: 'h-16', viewBox: '0 0 100 110', rectX: 40, rectW: 42, rectH: 52 },
      lg: { w: 'w-24', h: 'h-24', viewBox: '0 0 100 110', rectX: 40, rectW: 42, rectH: 52 }
    }[size];

    return (
      <div className={`relative ${scales.w} ${scales.h} flex-shrink-0 flex items-end justify-center`}>
        <svg viewBox={scales.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Caule do 'i' - Bloco robusto que se funde com a base das letras */}
          <rect x={scales.rectX} y="52" width={scales.rectW} height={scales.rectH} fill={mainColor} />
          
          {/* Raio Amarelo - Geometria precisa baseada na captura de tela */}
          <path 
            d="M8 4H82L42 48H72L15 106L32 58H4L8 4Z" 
            fill={boltColor} 
          />
        </svg>
      </div>
    );
  };

  const renderLayout = () => {
    const textSizes = {
      sm: 'text-5xl',
      md: 'text-7xl',
      lg: 'text-9xl'
    }[size];

    // Ajustes de margem negativa para aproximar o texto do símbolo como na marca original
    const margins = {
      sm: '-ml-4 mb-[-2px]',
      md: '-ml-7 mb-[-4px]',
      lg: '-ml-12 mb-[-8px]'
    }[size];

    const textStyle: React.CSSProperties = { 
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 900,
      color: mainColor,
      textTransform: 'lowercase',
      letterSpacing: '-0.14em', // Kerning extremamente apertado conforme a foto
      lineHeight: 0.85,
      display: 'inline-block'
    };

    if (layout === 'symbol') return <IncaSymbol />;

    if (layout === 'stacked') {
      return (
        <div className="flex flex-col items-start select-none">
          <div className="flex items-end -ml-2">
            <IncaSymbol />
            <span className={`${textSizes} -ml-5`} style={textStyle}>n</span>
          </div>
          <div className="flex justify-start ml-2">
            <span className={`${textSizes}`} style={textStyle}>ca</span>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-end select-none">
        <IncaSymbol />
        <span className={`${textSizes} ${margins}`} style={textStyle}>nca</span>
      </div>
    );
  };

  return (
    <div className={`flex items-center ${className}`}>
      {renderLayout()}

      {showText && layout !== 'symbol' && (
        <div className={`flex items-center ${size === 'sm' ? 'ml-4' : 'ml-8'}`}>
          {/* Barra Separadora Vertical Fina e Elegante */}
          <div 
            className={`${size === 'sm' ? 'h-8 w-[1px]' : 'h-14 md:h-20 w-[2px]'} opacity-50`}
            style={{ backgroundColor: separatorColor }}
          />
          
          <div className={`flex flex-col ${size === 'sm' ? 'pl-3' : 'pl-6'} space-y-0`}>
            <span 
              className={`font-black uppercase leading-none whitespace-nowrap ${isDark ? 'text-inca-blue' : 'text-white'}`}
              style={{ 
                letterSpacing: '0.22em', // Tracking largo para efeito de bloco
                fontSize: size === 'sm' ? '10px' : '18px'
              }}
            >
              Segurança Eletrônica
            </span>
            <span 
              className={`font-medium uppercase leading-none whitespace-nowrap ${isDark ? 'text-slate-500' : 'text-slate-300'}`}
              style={{ 
                letterSpacing: '0.22em',
                fontSize: size === 'sm' ? '10px' : '18px',
                marginTop: size === 'sm' ? '2px' : '6px'
              }}
            >
              e Monitoramento
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
