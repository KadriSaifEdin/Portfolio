import { useEffect, useState } from 'react';
import { LuArrowRight, LuMenu, LuX } from 'react-icons/lu';
import { nav } from '../data';
import { useActiveSection } from './hooks';
import { Logo } from './icons';

const ids = nav.map((n) => n.id);

export default function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo" onClick={go('home')} aria-label="Saif Edin Kadri — home"><Logo /></a>
        <nav className="nav__links" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={go(n.id)}
               className={active === n.id ? 'is-active' : ''} aria-current={active === n.id ? 'page' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" onClick={go('contact')} className="btn btn--ghost btn--sm nav__cta">Let's Talk <LuArrowRight /></a>
        <button className="nav__toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
                aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <LuX /> : <LuMenu />}
        </button>
      </div>
      <div id="mobile-menu" className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={go(n.id)} className={active === n.id ? 'is-active' : ''}>{n.label}</a>
        ))}
        <a href="#contact" onClick={go('contact')} className="btn btn--primary">Let's Talk <LuArrowRight /></a>
      </div>
    </header>
  );
}
