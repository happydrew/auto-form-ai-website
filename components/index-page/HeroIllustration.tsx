const HeroIllustration = () => {
    return (
      <svg
        width="600"
        height="500"
        viewBox="0 0 600 500"
        style={{
          background: 'linear-gradient(120deg, #f8f9fa 0%, #e9ecef 100%)',
          borderRadius: '16px',
        }}
      >
        {/* 背景装饰 */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: '#818cf8', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>
        
        {/* 主要浏览器窗口 */}
        <rect x="50" y="40" width="500" height="400" rx="8" 
          style={{ fill: 'white', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
        
        {/* 浏览器顶栏 */}
        <rect x="50" y="40" width="500" height="40" rx="8" 
          style={{ fill: '#f1f5f9' }} />
        <circle cx="80" cy="60" r="6" style={{ fill: '#ef4444' }} />
        <circle cx="105" cy="60" r="6" style={{ fill: '#f59e0b' }} />
        <circle cx="130" cy="60" r="6" style={{ fill: '#22c55e' }} />
        
        {/* 表单元素 */}
        <g transform="translate(80, 100)">
          {/* 表单字段组 */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(0, ${i * 70})`}>
              <rect width="440" height="50" rx="6" 
                style={{ fill: '#f8fafc', stroke: '#e2e8f0', strokeWidth: '2' }} />
              <rect x="10" y="15" width="80" height="20" rx="4" 
                style={{ fill: '#e2e8f0' }} />
              <rect x="100" y="15" width="320" height="20" rx="4" 
                style={{ fill: '#e2e8f0', opacity: '0.5' }} />
            </g>
          ))}
        </g>
        
        {/* AI 魔法效果 */}
        <g transform="translate(300, 250)">
          <circle r="40" style={{ fill: 'url(#gradient1)' }}>
            <animate attributeName="r" values="35;45;35" dur="3s" repeatCount="indefinite" />
          </circle>
          <path d="M-20,-20 L20,20 M-20,20 L20,-20" 
            style={{ stroke: '#818cf8', strokeWidth: '4', strokeLinecap: 'round' }} />
        </g>
        
        {/* 一键填充按钮 */}
        <g transform="translate(260, 400)">
          <rect width="80" height="36" rx="18" 
            style={{ fill: '#6366f1', filter: 'drop-shadow(0 2px 4px rgba(99,102,241,0.3))' }} />
          <text x="40" y="24" 
            style={{ fill: 'white', textAnchor: 'middle', fontSize: '14px', fontFamily: 'system-ui' }}>
            AutoFill
          </text>
        </g>
        
        {/* 安全锁图标 */}
        <g transform="translate(500, 80)">
          <circle r="15" style={{ fill: '#22c55e', opacity: '0.1' }} />
          <path d="M-6,0 h12 v-6 a6,6 0 1,0 -12,0 z" 
            style={{ fill: 'none', stroke: '#22c55e', strokeWidth: '2' }} />
        </g>
      </svg>
    )
  }
  
  export default HeroIllustration;