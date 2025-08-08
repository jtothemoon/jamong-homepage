"use client";

const HeroAnimations = () => {
  return (
    <>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Right side animation */}
      <div className="absolute right-0 top-0 z-[-1] opacity-40 lg:opacity-60 overflow-visible" aria-hidden="true">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="장식용 그래픽 요소"
          className="will-change-transform animate-pulse"
          style={{ overflow: 'visible' }}
        >
          {/* 메인 그라데이션 원 */}
          <circle
            cx="300"
            cy="150"
            r="200"
            fill="url(#modernGradient1)"
            className="animate-spin"
            style={{ animationDuration: '20s' }}
          />
          
          {/* 보조 원들 */}
          <circle
            cx="450"
            cy="300"
            r="120"
            fill="url(#modernGradient2)"
            opacity="0.6"
          />
          
          <circle
            cx="100"
            cy="400"
            r="80"
            fill="url(#modernGradient3)"
            opacity="0.4"
          />
          
          {/* 장식용 작은 원들 */}
          <circle cx="500" cy="100" r="8" fill="url(#accentGradient)" opacity="0.8" />
          <circle cx="150" cy="200" r="6" fill="url(#accentGradient)" opacity="0.6" />
          <circle cx="550" cy="450" r="10" fill="url(#accentGradient)" opacity="0.7" />
          
          <defs>
            <linearGradient id="modernGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" stopOpacity="0.1" />
            </linearGradient>
            
            <linearGradient id="modernGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f093fb" />
              <stop offset="100%" stopColor="#f5576c" stopOpacity="0.2" />
            </linearGradient>
            
            <linearGradient id="modernGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.3" />
            </linearGradient>
            
            <radialGradient id="accentGradient">
              <stop offset="0%" stopColor="#ffecd2" />
              <stop offset="100%" stopColor="#fcb69f" stopOpacity="0.8" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom left animation */}
      <div className="absolute bottom-0 left-0 z-[-1] opacity-50 lg:opacity-70 overflow-visible" aria-hidden="true">
        <svg
          width="400"
          height="300"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="장식용 그래픽 요소"
          className="will-change-transform"
          style={{ overflow: 'visible' }}
        >
          {/* 유동적인 웨이브 라인들 */}
          <path
            d="M-50 200 Q100 150 200 180 Q300 210 450 160"
            stroke="url(#waveGradient1)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          
          <path
            d="M-30 220 Q120 170 220 200 Q320 230 470 180"
            stroke="url(#waveGradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          
          <path
            d="M-70 240 Q80 190 180 220 Q280 250 430 200"
            stroke="url(#waveGradient3)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          
          {/* 장식용 도형들 */}
          <rect
            x="50"
            y="100"
            width="8"
            height="8"
            rx="2"
            fill="url(#shapeGradient)"
            opacity="0.7"
            transform="rotate(45 54 104)"
          />
          
          <rect
            x="250"
            y="80"
            width="12"
            height="12"
            rx="3"
            fill="url(#shapeGradient)"
            opacity="0.5"
            transform="rotate(30 256 86)"
          />
          
          <circle
            cx="320"
            cy="120"
            r="6"
            fill="url(#shapeGradient)"
            opacity="0.6"
          />
          
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a8edea" stopOpacity="0" />
              <stop offset="50%" stopColor="#fed6e3" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffecd2" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d299c2" stopOpacity="0" />
              <stop offset="50%" stopColor="#fef9d7" stopOpacity="1" />
              <stop offset="100%" stopColor="#d299c2" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#89f7fe" stopOpacity="0" />
              <stop offset="50%" stopColor="#66a6ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#89f7fe" stopOpacity="0" />
            </linearGradient>
            
            <radialGradient id="shapeGradient">
              <stop offset="0%" stopColor="#ff9a9e" />
              <stop offset="100%" stopColor="#fecfef" stopOpacity="0.8" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default HeroAnimations;