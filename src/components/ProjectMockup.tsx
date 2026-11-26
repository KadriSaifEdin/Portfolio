import type { MockupKind } from '../data';

// Illustrative CSS/SVG mockups (no real screenshots were provided). Palette-matched, decorative only.
const P = '#7040ff', L = '#a78bfa', D = '#12102a', B = '#1b1738', T = '#ddd6ff';

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 200" className="mock" role="img" aria-hidden preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#241a5e" /><stop offset="1" stopColor="#0c0a1c" /></linearGradient>
        <linearGradient id="mp" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={P} /><stop offset="1" stopColor={L} /></linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#mg)" />
      {children}
    </svg>
  );
}
const win = (x: number, y: number, w: number, h: number) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="8" fill={D} stroke={P} strokeOpacity=".5" />
    <circle cx={x + 10} cy={y + 9} r="2.4" fill="#ff6b8a" /><circle cx={x + 19} cy={y + 9} r="2.4" fill="#ffd166" /><circle cx={x + 28} cy={y + 9} r="2.4" fill="#5eead4" />
  </g>
);

export default function ProjectMockup({ kind }: { kind: MockupKind }) {
  switch (kind) {
    case 'tourism':
      return (
        <Frame>
          <circle cx="318" cy="46" r="20" fill="url(#mp)" opacity=".85" />
          <path d="M0 160Q90 140 200 156T400 148V200H0z" fill={B} />
          <g fill={D} stroke={P} strokeOpacity=".6">
            <path d="M92 156V92Q92 74 118 72H282Q308 74 308 92V156z" />
          </g>
          {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${108 + i * 30} 156V118a12 12 0 0 1 24 0V156z`} fill="url(#mg)" stroke={L} strokeOpacity=".55" />)}
          {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${108 + i * 30} 112V96a12 12 0 0 1 24 0V112z`} fill="url(#mg)" stroke={L} strokeOpacity=".4" />)}
          <path d="M60 60a16 16 0 1 1 32 0c0 14-16 28-16 28S60 74 60 60z" fill="url(#mp)" /><circle cx="76" cy="60" r="5" fill={D} />
          <g fill={L}><path d="M352 120l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" opacity=".7" /><circle cx="40" cy="116" r="3" opacity=".5" /></g>
        </Frame>
      );
    case 'compare':
      return (
        <Frame>
          {[0, 1].map((i) => (
            <g key={i}>
              <rect x={150 + i * 0} y={26 + i * 84} width="92" height="68" rx="6" fill={D} stroke={P} strokeOpacity=".5" />
              {[0, 1, 2, 3].map((r) => <rect key={r} x="156" y={34 + i * 84 + r * 14} width="80" height="8" rx="2" fill={B} />)}
              <rect x="156" y={34 + i * 84} width="80" height="8" rx="2" fill="url(#mp)" opacity=".7" />
              <text x="196" y={108 + i * 84 - 2} fontFamily="'Times New Roman',serif" fontSize="7" fill={T} opacity=".6" textAnchor="middle" />
            </g>
          ))}
          <path d="M250 60h30l-8-8m8 8l-8 8M250 144h30l-8-8m8 8l-8 8" stroke={L} strokeWidth="2" fill="none" strokeLinecap="round" />
          <rect x="290" y="56" width="92" height="88" rx="8" fill={D} stroke="#5eead4" strokeOpacity=".6" />
          {[0, 1, 2, 3, 4].map((r) => <rect key={r} x="298" y={66 + r * 15} width="76" height="9" rx="2" fill={B} />)}
          <rect x="298" y="66" width="76" height="9" rx="2" fill="#5eead4" opacity=".5" />
          <text x="336" y="160" fontFamily="'Times New Roman',serif" fontSize="9" fontWeight="700" fill="#5eead4" textAnchor="middle">~30 s</text>
        </Frame>
      );
    case 'chatbot':
      return (
        <Frame>
          {win(60, 16, 280, 172)}
          <rect x="76" y="40" width="130" height="24" rx="12" fill={B} />
          <rect x="88" y="49" width="90" height="5" rx="2.5" fill={T} opacity=".6" />
          <rect x="164" y="72" width="160" height="34" rx="12" fill="url(#mp)" />
          <rect x="176" y="83" width="120" height="5" rx="2.5" fill="#fff" opacity=".85" /><rect x="176" y="93" width="80" height="5" rx="2.5" fill="#fff" opacity=".6" />
          <rect x="76" y="114" width="150" height="34" rx="12" fill={B} />
          <rect x="88" y="125" width="110" height="5" rx="2.5" fill={T} opacity=".6" /><rect x="88" y="135" width="70" height="5" rx="2.5" fill={T} opacity=".4" />
          <rect x="76" y="158" width="218" height="22" rx="11" fill="none" stroke={L} strokeOpacity=".5" />
          <circle cx="314" cy="169" r="11" fill={P} /><path d="M310 169h8m-3-3l3 3-3 3" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <g fill={L}><circle cx="318" cy="46" r="9" opacity=".25" /><path d="M318 40l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6z" /></g>
        </Frame>
      );
    case 'course':
      return (
        <Frame>
          {win(30, 16, 340, 172)}
          <rect x="40" y="36" width="58" height="142" rx="6" fill={B} />
          {[0, 1, 2, 3].map((i) => <rect key={i} x="48" y={48 + i * 20} width="42" height="6" rx="3" fill={i === 0 ? L : T} opacity={i === 0 ? 0.9 : 0.3} />)}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={108 + i * 86} y="40" width="78" height="62" rx="8" fill={B} stroke={P} strokeOpacity=".4" />
              <rect x={108 + i * 86} y="40" width="78" height="30" rx="8" fill="url(#mp)" opacity={0.85 - i * 0.2} />
              <rect x={116 + i * 86} y="78" width="50" height="5" rx="2.5" fill={T} opacity=".7" /><rect x={116 + i * 86} y="89" width="30" height="4" rx="2" fill={T} opacity=".35" />
            </g>
          ))}
          <rect x="108" y="114" width="250" height="14" rx="7" fill={B} /><rect x="108" y="114" width="150" height="14" rx="7" fill="url(#mp)" />
          <rect x="108" y="140" width="250" height="34" rx="8" fill={B} />
          <path d="M120 162l12-10 10 6 14-12 14 8 16-10 18 9 20-6 24 8" stroke={L} strokeWidth="2" fill="none" />
        </Frame>
      );
    case 'music':
      return (
        <Frame>
          <circle cx="140" cy="102" r="82" fill="#0a0818" stroke={P} strokeOpacity=".6" strokeWidth="1.5" />
          {[70, 60, 50, 40].map((r) => <circle key={r} cx="140" cy="102" r={r} fill="none" stroke="#2c2268" strokeWidth="1.2" />)}
          <path d="M140 20A82 82 0 0 1 222 102" stroke={L} strokeOpacity=".25" strokeWidth="3" fill="none" />
          <circle cx="140" cy="102" r="27" fill="url(#mp)" /><circle cx="140" cy="102" r="5" fill={D} />
          <circle cx="262" cy="30" r="9" fill={B} stroke={L} /><path d="M262 30L196 92" stroke={L} strokeWidth="3.5" strokeLinecap="round" /><rect x="186" y="88" width="14" height="9" rx="2" transform="rotate(40 193 92)" fill={T} />
          <g fill="url(#mp)">{[34, 58, 44, 78, 52, 90, 62, 40, 70, 48].map((h, i) => <rect key={i} x={282 + i * 11} y={150 - h} width="7" height={h} rx="3.5" opacity={0.55 + (i % 4) * 0.1} />)}</g>
          <g stroke={L} strokeWidth="2.4" fill={L}><circle cx="306" cy="42" r="5" /><path d="M311 42V22l12 3" fill="none" strokeLinecap="round" /><circle cx="346" cy="62" r="4" opacity=".7" /><path d="M350 62V46l9 2" fill="none" strokeLinecap="round" opacity=".7" /></g>
          <rect x="262" y="164" width="120" height="4" rx="2" fill={B} /><rect x="262" y="164" width="64" height="4" rx="2" fill="url(#mp)" />
          <path d="M296 184l-6 4 6 4zM312 182l9 6-9 6zM328 184l6 4-6 4z" fill={T} opacity=".85" />
        </Frame>
      );
    case 'internship':
      return (
        <Frame>
          {win(30, 16, 340, 172)}
          {['To do', 'In progress', 'Done'].map((c, i) => (
            <g key={c}>
              <rect x={42 + i * 108} y="36" width="100" height="140" rx="8" fill={B} />
              <rect x={50 + i * 108} y="44" width="40" height="5" rx="2.5" fill={L} />
              {[0, 1, 2].slice(0, 3 - (i === 1 ? 1 : 0)).map((j) => (
                <g key={j}><rect x={50 + i * 108} y={58 + j * 38} width="84" height="30" rx="6" fill={D} stroke={P} strokeOpacity=".35" />
                  <rect x={57 + i * 108} y={66 + j * 38} width="56" height="4" rx="2" fill={T} opacity=".6" /><rect x={57 + i * 108} y={76 + j * 38} width="34" height="4" rx="2" fill={i === 2 ? '#5eead4' : L} opacity=".6" /></g>
              ))}
            </g>
          ))}
        </Frame>
      );
    case 'api':
      return (
        <Frame>
          {win(40, 16, 320, 172)}
          {[['GET', '/students', '#5eead4'], ['POST', '/students', L], ['PUT', '/students/{id}', '#ffd166'], ['DELETE', '/students/{id}', '#ff6b8a']].map(([m, p, c], i) => (
            <g key={m}>
              <rect x="54" y={38 + i * 26} width="292" height="20" rx="6" fill={B} />
              <rect x="60" y={42 + i * 26} width="44" height="12" rx="4" fill={c} opacity=".25" />
              <text x="82" y={51.5 + i * 26} fontFamily="monospace" fontSize="8.5" fontWeight="700" fill={c} textAnchor="middle">{m}</text>
              <text x="114" y={51.5 + i * 26} fontFamily="monospace" fontSize="9" fill={T}>{p}</text>
            </g>
          ))}
          <text x="58" y="156" fontFamily="monospace" fontSize="9" fill={L}>{'{ "id": 1, "name": "…" }'}</text>
          <text x="58" y="172" fontFamily="monospace" fontSize="9" fill={T} opacity=".5">200 OK</text>
        </Frame>
      );
    case 'cms':
      return (
        <Frame>
          {win(30, 16, 340, 172)}
          <rect x="40" y="36" width="70" height="142" rx="6" fill={B} />
          {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="48" y={46 + i * 18} width="50" height="6" rx="3" fill={i === 1 ? L : T} opacity={i === 1 ? 0.9 : 0.3} />)}
          <rect x="120" y="36" width="240" height="20" rx="6" fill={B} />
          <g fill={L} opacity=".7"><rect x="128" y="42" width="10" height="8" rx="2" /><rect x="144" y="42" width="10" height="8" rx="2" /><rect x="160" y="42" width="10" height="8" rx="2" /></g>
          <rect x="120" y="64" width="240" height="114" rx="8" fill={D} stroke={P} strokeOpacity=".35" />
          <rect x="132" y="76" width="120" height="8" rx="4" fill="url(#mp)" />
          {[0, 1, 2, 3].map((i) => <rect key={i} x="132" y={94 + i * 12} width={200 - i * 24} height="5" rx="2.5" fill={T} opacity=".35" />)}
          <rect x="132" y="146" width="56" height="20" rx="10" fill="url(#mp)" />
        </Frame>
      );
    default: // educational website
      return (
        <Frame>
          <g>
            <path d="M200 30L292 62 200 94 108 62z" fill="url(#mp)" />
            <path d="M150 80v26c0 12 22 22 50 22s50-10 50-22V80l-50 18z" fill={B} stroke={P} strokeOpacity=".6" />
            <path d="M286 66v36" stroke={L} strokeWidth="2.4" strokeLinecap="round" /><circle cx="286" cy="106" r="5" fill={L} />
          </g>
          <path d="M96 150Q148 130 200 150V190Q148 170 96 190z" fill={D} stroke={L} strokeOpacity=".7" />
          <path d="M304 150Q252 130 200 150V190Q252 170 304 190z" fill={D} stroke={L} strokeOpacity=".7" />
          {[0, 1, 2].map((i) => <path key={i} d={`M110 ${158 + i * 7}Q140 ${148 + i * 7} 186 ${160 + i * 7}`} stroke={T} strokeOpacity=".35" strokeWidth="2" fill="none" />)}
          {[0, 1, 2].map((i) => <path key={i} d={`M290 ${158 + i * 7}Q260 ${148 + i * 7} 214 ${160 + i * 7}`} stroke={T} strokeOpacity=".35" strokeWidth="2" fill="none" />)}
          <g fill={L}><path d="M50 50l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" opacity=".7" /><path d="M350 128l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" opacity=".6" /><circle cx="70" cy="120" r="3" opacity=".4" /><circle cx="338" cy="34" r="3" opacity=".5" /></g>
        </Frame>
      );
  }
}

export function Shot({ p }: { p: { kind: MockupKind; image?: string; logo?: string; fit?: 'contain'; name: string } }) {
  return p.image ? (
    <div className={`shot-box${p.fit ? ' shot-box--contain' : ''}`}>
      <img className="shot-img" src={p.image} alt={`${p.name} screenshot`} loading="lazy" draggable={false} />
    </div>
  ) : <ProjectMockup kind={p.kind} />;
}
