import { LuArrowDown, LuDownload, LuMouse } from 'react-icons/lu';
import { profile } from '../data';

export default function Hero() {
  const toProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="home" className="hero">
      <svg className="hero__curves" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="gc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7040ff" stopOpacity=".9" /><stop offset="1" stopColor="#7040ff" stopOpacity="0" /></linearGradient>
        </defs>
        <path d="M0 0 C 90 20 210 20 330 0" stroke="url(#gc)" fill="none" strokeWidth="1.4" opacity=".0" />
        <path d="M-10 330 C 20 120 150 20 320 -10" stroke="url(#gc)" fill="none" strokeWidth="1.6" />
        <path d="M-10 380 C 30 160 170 40 380 -10" stroke="url(#gc)" fill="none" strokeWidth="1" opacity=".5" />
        <path d="M900 880 C 1150 800 1300 640 1450 560" stroke="url(#gc)" fill="none" strokeWidth="2" />
        <path d="M980 900 C 1200 830 1330 700 1450 640" stroke="url(#gc)" fill="none" strokeWidth="1" opacity=".5" />
      </svg>
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__hello">Hello, I'm</p>
          <h1 className="hero__name">{profile.first} <span className="grad">{profile.last}</span></h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__desc">{profile.tagline}</p>
          <div className="hero__cta">
            <a href="#projects" onClick={toProjects} className="btn btn--primary">View My Projects <LuArrowDown /></a>
            <a href={profile.cv} download="Saif_Edin_Kadri_CV.docx" className="btn btn--ghost">Download CV <LuDownload /></a>
          </div>
        </div>
        <div className="hero__portrait">
          <span className="hero__ring hero__ring--a" aria-hidden />
          <span className="hero__ring hero__ring--b" aria-hidden />
          <img src="images/portrait.webp" alt="Portrait of Saif Edin Kadri" width={1100} height={1143} fetchPriority="high" />
        </div>
      </div>
      <a href="#about" className="scroll-ind" aria-label="Scroll down to About"><LuMouse /> <span>Scroll Down</span></a>
    </section>
  );
}
