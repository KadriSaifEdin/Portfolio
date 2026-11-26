import { FaCode } from 'react-icons/fa';
import { skillGroups, softSkills } from '../data';
import { skillIcons } from './icons';
import { useReveal } from './hooks';

export default function Skills() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="skills" ref={ref} className="skills reveal">
      <div className="wrap">
        <h2 className="h2 h2--center"><span className="badge badge--sm" aria-hidden><FaCode /></span> My Skills</h2>
        <div className="skills__groups">
          {skillGroups.map((g) => (
            <div key={g.category} className="skills__group">
              <h3 className="skills__cat">{g.category}</h3>
              <ul className="skills__list">
                {g.items.map((s) => {
                  const ic = skillIcons[s.icon];
                  return (
                    <li key={s.name} className="skill">
                      <span className="skill__tile" style={{ color: ic.color }}>{ic.el}</span>
                      <span className="skill__name">{s.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <ul className="chips" aria-label="Soft skills">
          {softSkills.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </section>
  );
}
