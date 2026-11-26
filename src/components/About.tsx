import { LuArrowRight } from 'react-icons/lu';
import { FaBriefcase, FaUser } from 'react-icons/fa';
import { about, experience } from '../data';
import { useReveal } from './hooks';

export default function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="about reveal">
      <div className="wrap about__grid">
        <div className="about__text">
          <h2 className="h2 h2--line"><span className="badge badge--sm" aria-hidden><FaUser /></span> About Me</h2>
          <p>{about.intro}</p>
          <a className="btn btn--ghost btn--sm" href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Learn More <LuArrowRight />
          </a>
        </div>
        <figure className="about__img glass float">
          <img src="images/workspace.webp" alt="A laptop showing code on a dark desk with purple lighting" loading="lazy" width={1128} height={456} />
        </figure>
      </div>
      <div id="experience" className="wrap exp">
        <h3 className="h3 h3--ic"><span className="badge badge--sm" aria-hidden><FaBriefcase /></span> Experience</h3>
        <div className="exp__grid">
          {experience.map((e) => (
            <article key={e.title} className="exp__card glass">
              <span className="exp__logo"><img src={e.logo} alt={`${e.title} logo`} /></span>
              <div>
                <header><h4>{e.title}</h4><span className="exp__date">{e.period}</span></header>
                <p className="exp__role">{e.role}</p>
                <p className="exp__text">{e.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
