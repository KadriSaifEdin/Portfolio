import type { ReactElement } from 'react';
import {
  SiAngular, SiReact, SiHtml5, SiCss, SiFlutter, SiLaravel, SiPhp, SiSpringboot, SiNodedotjs,
  SiDart, SiJavascript, SiTypescript, SiPython, SiC, SiMysql, SiGit, SiApachemaven, SiWordpress, SiUnity,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { DiPhotoshop } from 'react-icons/di';
import { LuDatabase, LuFilm, LuWebhook, LuTable2, LuBox, LuPenTool } from 'react-icons/lu';

// Brand colours chosen to stay readable on the dark purple tiles.
export const skillIcons: Record<string, { el: ReactElement; color: string }> = {
  angular: { el: <SiAngular />, color: '#ff4d5a' },
  react: { el: <SiReact />, color: '#61dafb' },
  html5: { el: <SiHtml5 />, color: '#ff7a45' },
  css: { el: <SiCss />, color: '#4aa3ff' },
  flutter: { el: <SiFlutter />, color: '#54c5f8' },
  laravel: { el: <SiLaravel />, color: '#ff5a50' },
  php: { el: <SiPhp />, color: '#9aa4ff' },
  springboot: { el: <SiSpringboot />, color: '#6cc24a' },
  node: { el: <SiNodedotjs />, color: '#6fc65a' },
  api: { el: <LuWebhook />, color: '#a78bfa' },
  dart: { el: <SiDart />, color: '#40c4ff' },
  js: { el: <SiJavascript />, color: '#f7df1e' },
  ts: { el: <SiTypescript />, color: '#4c9aff' },
  java: { el: <FaJava />, color: '#f0883e' },
  python: { el: <SiPython />, color: '#ffd43b' },
  c: { el: <SiC />, color: '#7a9cff' },
  mysql: { el: <SiMysql />, color: '#5fb3e8' },
  db: { el: <LuDatabase />, color: '#ff6b5e' },
  sql: { el: <LuTable2 />, color: '#a78bfa' },
  git: { el: <SiGit />, color: '#ff6a45' },
  maven: { el: <SiApachemaven />, color: '#ff5b8a' },
  wordpress: { el: <SiWordpress />, color: '#5aa0ff' },
  photoshop: { el: <DiPhotoshop />, color: '#31a8ff' },
  unity: { el: <SiUnity />, color: '#e8e6f5' },
  d3: { el: <LuBox />, color: '#a78bfa' },
  d2: { el: <LuPenTool />, color: '#5eead4' },
  premiere: { el: <LuFilm />, color: '#b58cff' },
};

export function Flag({ code }: { code: string }) {
  const common = { width: 44, height: 30, viewBox: '0 0 44 30', 'aria-hidden': true } as const;
  if (code === 'fr')
    return (<svg {...common}><rect width="15" height="30" fill="#2b4bd6" /><rect x="15" width="14" height="30" fill="#f5f5f7" /><rect x="29" width="15" height="30" fill="#e5314a" /></svg>);
  if (code === 'gb')
    return (<svg {...common}><rect width="44" height="30" fill="#1d2f84" /><path d="M0 0L44 30M44 0L0 30" stroke="#fff" strokeWidth="6" /><path d="M0 0L44 30M44 0L0 30" stroke="#d3213f" strokeWidth="2" /><path d="M22 0V30M0 15H44" stroke="#fff" strokeWidth="10" /><path d="M22 0V30M0 15H44" stroke="#d3213f" strokeWidth="6" /></svg>);
  // Tunisia
  return (<svg {...common}><rect width="44" height="30" fill="#e5192e" /><circle cx="22" cy="15" r="8.5" fill="#fff" /><circle cx="22" cy="15" r="5.6" fill="#e5192e" /><circle cx="23.4" cy="15" r="4.5" fill="#fff" /><path d="M24.2 11.8l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3z" fill="#e5192e" /></svg>);
}

export function Logo() {
  return <img src="images/logo.png" alt="SK" width={57} height={37} className="logo-img" />;
}
