export const DataBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="data-grid-bg absolute inset-0 opacity-30" />
      
      {/* Animated connecting nodes */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(205 77% 48%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(205 77% 48%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(205 77% 48%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated lines */}
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1">
          <animate attributeName="x1" values="10%;15%;10%" dur="8s" repeatCount="indefinite" />
          <animate attributeName="y1" values="20%;25%;20%" dur="8s" repeatCount="indefinite" />
        </line>
        <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1">
          <animate attributeName="x1" values="70%;75%;70%" dur="10s" repeatCount="indefinite" />
          <animate attributeName="y1" values="30%;35%;30%" dur="10s" repeatCount="indefinite" />
        </line>
        <line x1="20%" y1="70%" x2="40%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1">
          <animate attributeName="x1" values="20%;25%;20%" dur="12s" repeatCount="indefinite" />
          <animate attributeName="y1" values="70%;75%;70%" dur="12s" repeatCount="indefinite" />
        </line>
        
        {/* Animated circles (nodes) */}
        <circle cx="15%" cy="25%" r="4" fill="hsl(205 77% 48%)" opacity="0.4">
          <animate attributeName="cy" values="25%;30%;25%" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="75%" cy="35%" r="3" fill="hsl(205 77% 48%)" opacity="0.3">
          <animate attributeName="cx" values="75%;80%;75%" dur="10s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="85%" cy="20%" r="5" fill="hsl(205 77% 48%)" opacity="0.5">
          <animate attributeName="cy" values="20%;25%;20%" dur="9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="30%" cy="75%" r="4" fill="hsl(205 77% 48%)" opacity="0.4">
          <animate attributeName="cx" values="30%;35%;30%" dur="11s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};
