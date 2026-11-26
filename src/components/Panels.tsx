import { useState } from 'react';
import { FaAward, FaEnvelope, FaGlobe, FaGraduationCap, FaMedal } from 'react-icons/fa';
import { LuLinkedin, LuSend, LuGithub, LuMail, LuMapPin, LuPhone, LuDownload, LuMessageCircle } from 'react-icons/lu';
import { certifications, education, languages, profile } from '../data';
import { useReveal } from './hooks';
import { Flag } from './icons';

export function Education() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="education" ref={ref} className="panel-section reveal">
      <div className="wrap">
        <div className="panel glass panel--edu">
          <span className="panel__icon badge"><FaGraduationCap /></span>
          <div className="panel__main">
            <h2 className="h3">Education</h2>
            <p className="panel__strong">{education.degree} – {education.school}</p>
            <p className="panel__muted">{education.period}<br />{education.status}</p>
            <ul className="chips chips--sm" aria-label="Key courses">{education.courses.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="panel__img"><img src="images/campus.webp" alt="ISET Sidi Bouzid campus building" loading="lazy" width={1000} height={657} /></div>
        </div>
      </div>
    </section>
  );
}

export function Languages() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="languages" ref={ref} className="panel-section reveal">
      <div className="wrap">
        <div className="panel glass panel--lang">
          <span className="panel__icon badge"><FaGlobe /></span>
          <h2 className="h3 panel__title">Languages</h2>
          <ul className="langs">
            {languages.map((l) => (
              <li key={l.name} className="lang">
                <Flag code={l.flag} />
                <strong>{l.name}</strong>
                <span>{l.level}</span>
                {'note' in l && <small>{l.note}</small>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="certifications" ref={ref} className="panel-section reveal">
      <div className="wrap">
        <div className="panel glass panel--cert">
          <span className="panel__icon badge"><FaMedal /></span>
          <h2 className="h3 panel__title">Certifications</h2>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.title} className="cert">
                <FaAward aria-hidden />
                <div><strong>{c.title}</strong><span>{c.issuer}{c.date ? ` · ${c.date}` : ''}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'fallback'>('idle');
  const [copied, setCopied] = useState(false);
  const tel = profile.phone.replace(/\s/g, '');
  const wa = tel.replace('+', '');

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* clipboard unavailable */ }
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const name = String(f.get('name') || ''), from = String(f.get('email') || ''), message = String(f.get('message') || ''), topic = String(f.get('topic') || 'General');
    if (f.get('_honey')) return; // spam trap
    setStatus('sending');
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email: from, topic, message, _subject: `[Portfolio] ${topic} — ${name}`, _replyto: from }),
      });
      if (!r.ok) throw new Error(String(r.status));
      setStatus('sent'); form.reset();
    } catch {
      const body = `${message}\n\n— ${name} (${from})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`[Portfolio] ${topic} — ${name}`)}&body=${encodeURIComponent(body)}`;
      setStatus('fallback');
    }
  };

  return (
    <section id="contact" ref={ref} className="panel-section reveal">
      <div className="wrap">
        <div className="panel glass panel--contact">
          <span className="panel__icon badge"><FaEnvelope /></span>
          <div className="contact-grid">
            <div className="panel__main">
              <h2 className="h3">Get In Touch</h2>
              <span className="avail">Open to a PFE internship in full-stack web development</span>
              <p className="panel__muted">Have an opportunity, a project or a question? Email or call me directly, or send a message here. I usually reply within 24 hours.</p>
              <div className="ccards">
                <div className="ccard"><LuMail aria-hidden /><div><small>Email</small><a href={`mailto:${profile.email}`}><strong>{profile.email}</strong></a></div>
                  <button type="button" onClick={copyEmail}>{copied ? 'Copied!' : 'Copy'}</button></div>
                <a className="ccard" href={`tel:${tel}`}><LuPhone aria-hidden /><div><small>Phone</small><strong>{profile.phone}</strong></div></a>
                <a className="ccard" href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"><LuMessageCircle aria-hidden /><div><small>WhatsApp</small><strong>Send a message</strong></div></a>
                <div className="ccard"><LuMapPin aria-hidden /><div><small>Based in</small><strong>{profile.location} · available remotely</strong></div></div>
              </div>
              <div className="socials">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><LuGithub /></a>
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LuLinkedin /></a>}
                <a href={profile.cv} download aria-label="Download CV"><LuDownload /></a>
              </div>
            </div>
            <form className="cform" onSubmit={submit}>
              <div className="cform__row">
                <label>Your name<input name="name" type="text" required autoComplete="name" /></label>
                <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
              </div>
              <label>Reason
                <select name="topic" defaultValue="Internship opportunity">
                  <option>Internship opportunity</option><option>Project / freelance</option><option>Collaboration</option><option>Other</option>
                </select>
              </label>
              <label>Message<textarea name="message" rows={5} required minLength={10} placeholder="Tell me a bit about your company or project, and what you need." /></label>
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden />
              <div className="cform__foot">
                <button type="submit" className="btn btn--primary btn--sm" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'} <LuSend />
                </button>
                <p role="status" aria-live="polite" className="cform__status">
                  {status === 'sent' && 'Thank you! Your message was sent. I will reply by email.'}
                  {status === 'fallback' && 'Your mail app should open with the message ready to send.'}
                </p>
              </div>
              <p className="cform__note">Your details are only used to reply to you.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer__line" /><p>© 2026 Saif Edin Kadri. All rights reserved.</p><span className="footer__line" />
    </footer>
  );
}
