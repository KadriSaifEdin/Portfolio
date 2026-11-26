import { FaFolderOpen } from 'react-icons/fa';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LuArrowRight, LuChevronLeft, LuChevronRight, LuGithub, LuX } from 'react-icons/lu';
import { INITIAL_PROJECT, profile, projects, type Project } from '../data';
import { useReveal } from './hooks';
import { Shot } from './ProjectMockup';

const N = projects.length;
const rel = (i: number, cur: number) => {
  let r = (((i - cur) % N) + N) % N;
  if (r > N / 2) r -= N;
  return r;
};

function Card({ p, r, onSelect, onOpen }: { p: Project; r: number; onSelect: () => void; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const center = r === 0;
  // Subtle 3D tilt that follows the pointer on the centre card only.
  const move = (e: React.PointerEvent) => {
    if (!center || e.pointerType === 'touch') return;
    const b = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
    ref.current?.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
    ref.current?.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
  };
  const leave = () => { ref.current?.style.setProperty('--rx', '0deg'); ref.current?.style.setProperty('--ry', '0deg'); };
  const pos = center ? 'center' : r === -1 ? 'left' : r === 1 ? 'right' : r < 0 ? 'far-left' : 'far-right';
  return (
    <article className={`pcard pcard--${pos}`} aria-hidden={!center} aria-label={`${p.name}`}>
      <div className="pcard__tilt" ref={ref} onPointerMove={move} onPointerLeave={leave}>
        <div className="pcard__shot"><Shot p={p} /></div>
        <h3 className="pcard__name">{p.name}</h3>
        <p className="pcard__desc">{p.description}</p>
        <ul className="pcard__tags">
          <li className="tag tag--type">{p.type}</li>
          {p.tech.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
        <button className="btn btn--ghost btn--sm" tabIndex={center ? 0 : -1} onClick={onOpen}>View Project <LuArrowRight /></button>
      </div>
      {!center && Math.abs(r) === 1 && (
        <button className="pcard__hit" onClick={onSelect} aria-label={`Show ${p.name}`} />
      )}
    </article>
  );
}

function Details({ p, onClose }: { p: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (p && !d.open) d.showModal();
    if (!p && d.open) d.close();
  }, [p]);
  return (
    <dialog ref={ref} className="modal glass" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()} aria-labelledby="modal-title">
      {p && (
        <div className="modal__body">
          <button className="modal__x" onClick={onClose} aria-label="Close"><LuX /></button>
          <div className="modal__shot"><Shot p={p} /></div>
          <h3 id="modal-title">{p.name}</h3>
          <p>{p.description}</p>
          <ul className="pcard__tags"><li className="tag tag--type">{p.type}</li>{p.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
          <p className="modal__note">{p.image || p.logo ? 'No public demo link is listed for this project. You can find my code and other work on GitHub.' : 'The preview is an illustrative mockup. No public demo link is listed for this project, so you can find my code on GitHub.'}</p>
          <a className="btn btn--primary btn--sm" href={profile.github} target="_blank" rel="noopener noreferrer"><LuGithub /> View GitHub profile</a>
        </div>
      )}
    </dialog>
  );
}

export default function Projects() {
  const ref = useReveal<HTMLElement>();
  const [index, setIndex] = useState(INITIAL_PROJECT);
  const [open, setOpen] = useState<Project | null>(null);
  const go = useCallback((d: number) => setIndex((i) => (i + d + N) % N), []);
  const drag = useRef<number | null>(null);

  return (
    <section id="projects" ref={ref} className="projects reveal">
      <div className="wrap">
        <h2 className="h2 h2--center"><span className="badge badge--sm" aria-hidden><FaFolderOpen /></span> My Projects</h2>
        <p className="sub">A selection of my recent work</p>
      </div>
      <div className="carousel" role="group" aria-roledescription="carousel" aria-label="Projects"
           tabIndex={0}
           onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); }}
           onPointerDown={(e) => { drag.current = e.clientX; }}
           onPointerUp={(e) => {
             if (drag.current !== null) { const dx = e.clientX - drag.current; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); }
             drag.current = null;
           }}>
        <button className="arrow arrow--l" onClick={() => go(-1)} aria-label="Previous project"><LuChevronLeft /></button>
        <div className="carousel__stage">
          {projects.map((p, i) => (
            <Card key={p.name} p={p} r={rel(i, index)} onSelect={() => setIndex(i)} onOpen={() => setOpen(p)} />
          ))}
        </div>
        <button className="arrow arrow--r" onClick={() => go(1)} aria-label="Next project"><LuChevronRight /></button>
        <p className="sr" aria-live="polite">Project {index + 1} of {N}: {projects[index].name}</p>
      </div>
      <div className="dots" role="tablist" aria-label="Choose project">
        {projects.map((p, i) => (
          <button key={p.name} role="tab" aria-selected={i === index} aria-label={p.name} className={i === index ? 'is-on' : ''} onClick={() => setIndex(i)} />
        ))}
      </div>
      <Details p={open} onClose={() => setOpen(null)} />
    </section>
  );
}
