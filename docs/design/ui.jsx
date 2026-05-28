// ui.jsx — shared atoms + icons for lumyra screens

// ───────────────────────────────────────────────────────────────────────────
// Icons (lucide-style, mono-stroke)
// ───────────────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 20, stroke = 'currentColor', sw = 2, fill = 'none', children, viewBox = '0 0 24 24' }) => (
  <svg width={size} height={size} viewBox={viewBox} fill={fill} stroke={stroke} strokeWidth={sw}
       strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);

const I = {
  home:      (p) => <Icon {...p}><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11z"/></Icon>,
  users:     (p) => <Icon {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>,
  clipboard: (p) => <Icon {...p}><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M9 12h6M9 16h4"/></Icon>,
  barbell:   (p) => <Icon {...p}><path d="M6 9v6M3 11v2M18 9v6M21 11v2"/><path d="M6 12h12"/></Icon>,
  user:      (p) => <Icon {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></Icon>,
  bell:      (p) => <Icon {...p}><path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 19a2 2 0 0 0 4 0"/></Icon>,
  search:    (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></Icon>,
  plus:      (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  chevR:     (p) => <Icon {...p}><path d="m9 6 6 6-6 6"/></Icon>,
  chevL:     (p) => <Icon {...p}><path d="m15 6-6 6 6 6"/></Icon>,
  chevD:     (p) => <Icon {...p}><path d="m6 9 6 6 6-6"/></Icon>,
  check:     (p) => <Icon {...p}><path d="M4 12l5 5L20 6"/></Icon>,
  arrowUp:   (p) => <Icon {...p}><path d="M12 19V5M5 12l7-7 7 7"/></Icon>,
  arrowDn:   (p) => <Icon {...p}><path d="M12 5v14M19 12l-7 7-7-7"/></Icon>,
  calendar:  (p) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></Icon>,
  heart:     (p) => <Icon {...p}><path d="M19.5 13.5L12 21l-7.5-7.5a5 5 0 0 1 7.5-6.5 5 5 0 0 1 7.5 6.5z"/></Icon>,
  activity:  (p) => <Icon {...p}><path d="M3 12h4l3-8 4 16 3-8h4"/></Icon>,
  drop:      (p) => <Icon {...p}><path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12z"/></Icon>,
  scale:     (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12h6M9 16h6"/><circle cx="12" cy="8" r="1.5"/></Icon>,
  ruler:     (p) => <Icon {...p}><path d="M21 3 3 21M9 6l2 2M12 9l2 2M15 12l2 2M18 15l2 2M6 9l2 2M3 12l2 2"/></Icon>,
  filter:    (p) => <Icon {...p}><path d="M3 5h18l-7 9v6l-4-2v-4L3 5z"/></Icon>,
  more:      (p) => <Icon {...p}><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></Icon>,
  trend:     (p) => <Icon {...p}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></Icon>,
  flame:     (p) => <Icon {...p}><path d="M12 2s4 4 4 9a4 4 0 0 1-8 0c0-2 1-3 1-3s-1 4 2 4 2-4 2-4 5 2 5 7a8 8 0 0 1-16 0c0-7 10-13 10-13z"/></Icon>,
  target:    (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></Icon>,
  zap:       (p) => <Icon {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></Icon>,
  lock:      (p) => <Icon {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></Icon>,
  mail:      (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></Icon>,
  eye:       (p) => <Icon {...p}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></Icon>,
  x:         (p) => <Icon {...p}><path d="M6 6l12 12M18 6 6 18"/></Icon>,
  edit:      (p) => <Icon {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></Icon>,
  sliders:   (p) => <Icon {...p}><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h14M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/></Icon>,
  body:      (p) => <Icon {...p}><circle cx="12" cy="4" r="2"/><path d="M9 8h6l-1 4-1 9h-2l-1-9-1-4z"/></Icon>,
  download:  (p) => <Icon {...p}><path d="M12 4v12M6 12l6 6 6-6"/><path d="M4 20h16"/></Icon>,
  share:     (p) => <Icon {...p}><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 14v6h16v-6"/></Icon>,
  history:   (p) => <Icon {...p}><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></Icon>,
  alert:     (p) => <Icon {...p}><path d="M12 3 2 21h20L12 3z"/><path d="M12 10v4M12 18h0"/></Icon>,
  star:      (p) => <Icon {...p}><path d="m12 3 3 6 6 1-4.5 4.5 1 6.5-5.5-3-5.5 3 1-6.5L3 10l6-1z"/></Icon>,
  settings:  (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a2 2 0 0 0 .4 2.2l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a2 2 0 0 0-2.2-.4 2 2 0 0 0-1.2 1.8V22a2 2 0 0 1-4 0v-.1a2 2 0 0 0-1.2-1.8 2 2 0 0 0-2.2.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a2 2 0 0 0 .4-2.2 2 2 0 0 0-1.8-1.2H2a2 2 0 0 1 0-4h.1a2 2 0 0 0 1.8-1.2 2 2 0 0 0-.4-2.2L3.4 7a2 2 0 1 1 2.8-2.8l.1.1a2 2 0 0 0 2.2.4H9a2 2 0 0 0 1.2-1.8V2a2 2 0 0 1 4 0v.1a2 2 0 0 0 1.2 1.8 2 2 0 0 0 2.2-.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a2 2 0 0 0-.4 2.2V9a2 2 0 0 0 1.8 1.2H22a2 2 0 0 1 0 4h-.1a2 2 0 0 0-1.8 1.2z"/></Icon>,
  logout:    (p) => <Icon {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></Icon>,
};

// ───────────────────────────────────────────────────────────────────────────
// Logo — lumyra wordmark · serif lowercase + sage/lilac orbital mark
// ───────────────────────────────────────────────────────────────────────────
const MFLogo = ({ size = 20, color, mark = true }) => (
  <div className="mf-logo" style={{ fontSize: size, color: color || 'var(--mf-ink-900)' }}>
    {mark && (
      <div className="mark" style={{ width: size * 1.5, height: size * 1.5, borderRadius: 999 }}>
        <svg width={size * 0.95} height={size * 0.95} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="12" cy="12" r="3.2" fill="#fff" stroke="none" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        </svg>
      </div>
    )}
    <span style={{ fontFamily: 'var(--mf-display)', fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.015em' }}>lumyra</span>
  </div>
);

// ───────────────────────────────────────────────────────────────────────────
// Status bar — full-bleed inside our custom screens (no IOSDevice nav)
// ───────────────────────────────────────────────────────────────────────────
const MFStatus = ({ dark = false, time = '9:41' }) => {
  const c = dark ? '#fff' : '#1F1B2E';
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      height: 54, padding: '18px 26px 0',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      zIndex: 30, pointerEvents: 'none',
    }}>
      <span style={{ fontFamily: '-apple-system, "SF Pro"', fontWeight: 600, fontSize: 16, color: c }}>{time}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', paddingTop: 2 }}>
        <svg width="17" height="11" viewBox="0 0 17 11">
          <rect x="0" y="6.5" width="3" height="4.5" rx="0.6" fill={c}/>
          <rect x="4.5" y="4" width="3" height="7" rx="0.6" fill={c}/>
          <rect x="9" y="2" width="3" height="9" rx="0.6" fill={c}/>
          <rect x="13.5" y="0" width="3" height="11" rx="0.6" fill={c}/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11">
          <path d="M7.5 2.7C9.5 2.7 11.3 3.5 12.6 4.8L13.5 3.9C12 2.4 9.8 1.4 7.5 1.4C5.2 1.4 3 2.4 1.5 3.9L2.4 4.8C3.7 3.5 5.5 2.7 7.5 2.7Z" fill={c}/>
          <path d="M7.5 5.9C8.7 5.9 9.7 6.3 10.5 7.1L11.4 6.2C10.3 5.2 9 4.5 7.5 4.5C6 4.5 4.7 5.2 3.6 6.2L4.5 7.1C5.3 6.3 6.3 5.9 7.5 5.9Z" fill={c}/>
          <circle cx="7.5" cy="9.2" r="1.3" fill={c}/>
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="18" height="8" rx="1.5" fill={c}/>
          <path d="M23 4v4c.6-.2 1-.9 1-2s-.4-1.8-1-2z" fill={c} fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  );
};

// ───────────────────────────────────────────────────────────────────────────
// Bottom tab bar
// ───────────────────────────────────────────────────────────────────────────
const MFTabBar = ({ active = 'home' }) => {
  const items = [
    { k: 'home',    label: 'Início',    ico: I.home },
    { k: 'alunos',  label: 'Alunos',    ico: I.users },
    { k: 'aval',    label: 'Avaliar',   ico: I.clipboard },
    { k: 'treino',  label: 'Treinos',   ico: I.barbell },
    { k: 'perfil',  label: 'Perfil',    ico: I.user },
  ];
  return (
    <div className="mf-tabbar">
      {items.map(it => {
        const Ico = it.ico;
        const isActive = it.k === active;
        return (
          <div key={it.k} className={'tab' + (isActive ? ' active' : '')}>
            <div className="ico"><Ico size={22} stroke={isActive ? 'var(--mf-green-700)' : 'var(--mf-ink-400)'} sw={isActive ? 2.4 : 2} /></div>
            <div>{it.label}</div>
          </div>
        );
      })}
      <div style={{
        position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
        width: 139, height: 5, borderRadius: 100, background: 'rgba(0,0,0,0.25)',
        pointerEvents: 'none',
      }}/>
    </div>
  );
};

// ───────────────────────────────────────────────────────────────────────────
// Stat block
// ───────────────────────────────────────────────────────────────────────────
const MFStat = ({ label, value, unit, delta, deltaDir = 'up' }) => (
  <div className="mf-stat">
    <div className="label">{label}</div>
    <div className="value">{value}{unit && <span className="unit">{unit}</span>}</div>
    {delta && (
      <div className={'delta ' + (deltaDir === 'down' ? 'down' : '')}>
        {deltaDir === 'down' ? <I.arrowDn size={11} sw={2.4} /> : <I.arrowUp size={11} sw={2.4} />}
        {delta}
      </div>
    )}
  </div>
);

// ───────────────────────────────────────────────────────────────────────────
// Volume bar (single row of weekly sets per muscle)
// ───────────────────────────────────────────────────────────────────────────
const MFVolBar = ({ label, value, target = [10, 20], max = 24 }) => {
  const fillPct = Math.min(value, max) / max * 100;
  const tStart = target[0] / max * 100;
  const tEnd = target[1] / max * 100;
  const inRange = value >= target[0] && value <= target[1];
  return (
    <div className="mf-vbar">
      <div className="lbl">{label}</div>
      <div className="track">
        <div className="target-zone" style={{ left: `${tStart}%`, width: `${tEnd - tStart}%` }} />
        <div className="fill" style={{
          width: `${fillPct}%`,
          background: inRange ? 'var(--mf-green-500)' : (value > target[1] ? 'var(--mf-amber)' : '#9CA3AF'),
        }}/>
      </div>
      <div className="num">{value}</div>
    </div>
  );
};

// ───────────────────────────────────────────────────────────────────────────
// Stepper
// ───────────────────────────────────────────────────────────────────────────
const MFStepper = ({ steps, current }) => (
  <div className="mf-stepper">
    {steps.map((s, i) => {
      const done = i < current;
      const active = i === current;
      return (
        <React.Fragment key={s}>
          <div className={'step' + (done ? ' done' : '') + (active ? ' active' : '')}>
            <div className="dot">{done ? <I.check size={14} sw={3} /> : i + 1}</div>
            <div className="label">{s}</div>
          </div>
          {i < steps.length - 1 && <div className={'conn' + (done ? ' done' : '')} />}
        </React.Fragment>
      );
    })}
  </div>
);

// ───────────────────────────────────────────────────────────────────────────
// Sparkline (small inline bar/line chart)
// ───────────────────────────────────────────────────────────────────────────
const MFSpark = ({ data, color = '#9173B5', height = 36, width = 110 }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(' ');
  const last = data[data.length - 1];
  const lastX = width;
  const lastY = height - ((last - min) / range) * (height - 4) - 2;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id={'sparkg-' + color.replace('#', '')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={`0,${height} ${pts} ${width},${height}`} fill={`url(#sparkg-${color.replace('#', '')})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastX} cy={lastY} r="3" fill={color} stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
};

// ───────────────────────────────────────────────────────────────────────────
// Avatar (initials)
// ───────────────────────────────────────────────────────────────────────────
const MFAvatar = ({ name = 'AB', size = 'md', color, className = '' }) => {
  const initials = name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const palette = ['#F7F4FB,#5F477A', '#EFF8FF,#175CD3', '#FBF4EA,#B54708', '#FEF3F2,#B42318', '#F4F3FF,#5925DC'];
  const idx = name.charCodeAt(0) % palette.length;
  const [bg, fg] = (color || palette[idx]).split(',');
  return (
    <div className={'mf-avatar ' + size + ' ' + className} style={{ background: bg, color: fg }}>
      {initials}
    </div>
  );
};

Object.assign(window, {
  I, MFLogo, MFStatus, MFTabBar, MFStat, MFVolBar, MFStepper, MFSpark, MFAvatar,
});
