// Single source of truth. Everything here comes from the CV (CV_Saif_Edin_Kadri.docx).
export const profile = {
  name: 'Saif Edin Kadri',
  first: 'Saif Edin',
  last: 'Kadri',
  title: 'Full-Stack Software Developer',
  tagline: 'I build modern web and mobile applications, turning ideas into real, scalable solutions.',
  location: 'Sidi Bouzid, Tunisia',
  email: 'kadris119@gmail.com',
  phone: '+216 27 157 476',
  github: 'https://github.com/kadrisaifedin',
  linkedin: '', // add your LinkedIn URL here (e.g. https://www.linkedin.com/in/your-name) and the icon appears automatically
  cv: 'cv/Saif_Edin_Kadri_CV.docx',
};

export const about = {
  intro:
    "I'm a Full-Stack Developer and a third-year Web Development and Multimedia student at ISET Sidi Bouzid. I build complete web applications, AI chatbot applications and cross-platform mobile apps with Angular, TypeScript, Laravel, PHP, Flutter and Dart, backed by solid knowledge of databases, servers, networking, security, web design and SEO.",
  seeking: 'Currently seeking a PFE internship in full stack web development.',
};

export const experience = [
  { title: 'Tunisie Télécom', role: 'Full Stack Developer Intern', period: 'Aug 2026 – Sep 2026', logo: 'images/tt.svg',
    text: 'Built a Flutter application (mobile app and website) that compares the Terrain and Workflow Excel files and generates a result file, reducing processing time from 1 hour or more to about 30 seconds, with secure authentication (admin and user roles) and a PHP API back end.' },
  { title: 'Hackathon — ISET SBZ', role: 'Full Stack Developer', period: 'May 2026', logo: 'images/trophy.png',
    text: "A 2-day hackathon with 20 teams of 3 participants. I competed in a team of 3 and built an interactive web application presenting Tunisia's heritage and landmarks to tourists, with an Angular front end, a PHP back end and a MySQL database." },
];

export type SkillGroup = { category: string; items: { name: string; icon: string }[] };
export const skillGroups: SkillGroup[] = [
  { category: 'Frontend', items: [
    { name: 'Angular', icon: 'angular' }, { name: 'React', icon: 'react' },
    { name: 'HTML5', icon: 'html5' }, { name: 'CSS', icon: 'css' },
    { name: 'Flutter Web', icon: 'flutter' } ] },
  { category: 'Backend', items: [
    { name: 'Laravel', icon: 'laravel' }, { name: 'PHP', icon: 'php' },
    { name: 'Spring Boot', icon: 'springboot' }, { name: 'Node.js', icon: 'node' },
    { name: 'REST APIs', icon: 'api' } ] },
  { category: 'Mobile Development', items: [
    { name: 'Flutter', icon: 'flutter' }, { name: 'Dart', icon: 'dart' } ] },
  { category: 'Programming Languages', items: [
    { name: 'JavaScript', icon: 'js' }, { name: 'TypeScript', icon: 'ts' },
    { name: 'Java', icon: 'java' }, { name: 'Python', icon: 'python' },
    { name: 'PHP', icon: 'php' }, { name: 'C', icon: 'c' }, { name: 'Dart', icon: 'dart' } ] },
  { category: 'Databases', items: [
    { name: 'MySQL', icon: 'mysql' }, { name: 'Oracle', icon: 'db' },
    { name: 'SQL / PL/SQL', icon: 'sql' } ] },
  { category: 'Tools & Technologies', items: [
    { name: 'Git', icon: 'git' }, { name: 'Maven', icon: 'maven' },
    { name: 'WordPress', icon: 'wordpress' }, { name: 'Photoshop', icon: 'photoshop' },
    { name: 'Premiere', icon: 'premiere' } ] },
  { category: 'Game Dev & Design', items: [
    { name: 'Unity', icon: 'unity' }, { name: '3D', icon: 'd3' }, { name: '2D', icon: 'd2' } ] },
];

export const softSkills = ['Problem solving', 'Organization', 'Verbal communication', 'Leadership', 'Teamwork', 'Adaptability', 'Self-learning'];

export type MockupKind = 'tourism' | 'compare' | 'chatbot' | 'course' | 'music' | 'internship' | 'api' | 'cms' | 'wordpress';
export type Project = {
  name: string; kind: MockupKind; type: string; description: string; tech: string[]; image?: string; logo?: string; fit?: 'contain';
};
// Order matters: the carousel opens on index 1 (the centre card).
export const projects: Project[] = [
  { name: 'Minassa', kind: 'course', type: 'Web App', image: 'images/minassa.webp', description: 'An online course platform with a database and an API.', tech: ['Angular', 'Node.js'] },
  { name: 'AI Chatbot Website', kind: 'chatbot', type: 'AI Web App', image: 'images/nexus.webp', description: 'An AI chatbot web application: ask anything and get instant answers.', tech: ['Angular', 'PHP', 'MySQL'] },
  { name: 'Sky', kind: 'music', type: 'Mobile App', image: 'images/sky.webp', fit: 'contain', description: 'A local music player mobile app.', tech: ['Flutter', 'Dart'] },
  { name: 'Yalla Tounsna', kind: 'tourism', type: 'Hackathon Web App', image: 'images/yalla.webp', description: "A hackathon project: an interactive web application presenting Tunisia's heritage and landmarks to tourists.", tech: ['Angular', 'SQL'] },
  { name: 'Site de Stage', kind: 'internship', type: 'Web App', image: 'images/stage.webp', description: 'A platform to manage end-of-studies internships: company offers, student assignment, supervisor follow-up and reports.', tech: [] },
  { name: 'Excel Data Comparison', kind: 'compare', type: 'Mobile & Web App', image: 'images/tt.svg', fit: 'contain', description: 'Built at Tunisie Télécom: compares two Excel files and generates the result file in about 30 seconds instead of 1 hour or more.', tech: ['Flutter', 'PHP API'] },
  { name: 'Student REST API', kind: 'api', type: 'REST API', description: 'A Spring Boot API for student management.', tech: ['Spring Boot'] },
  { name: 'Mini-CMS', kind: 'cms', type: 'Web App', image: 'images/minicms.webp', description: 'A content management web application built step by step in a server-side framework workshop.', tech: ['Laravel'] },
  { name: 'Educational Website', kind: 'wordpress', type: 'Website', image: 'images/Educa_ Build Your Future.png', description: 'An educational website built with WordPress.', tech: ['WordPress'] },
];
export const INITIAL_PROJECT = 1;

export const education = {
  degree: "Bachelor's Degree in Web Development and Multimedia",
  school: 'ISET SBZ',
  period: 'September 2024 – June 2027',
  status: 'Currently in third year.',
  courses: ['Web Development', 'Software Engineering', 'Databases', 'Networking', 'Computer Architecture'],
};

export const languages = [
  { name: 'Arabic', level: 'Native', flag: 'tn' },
  { name: 'French', level: 'Fluent', note: 'Second language', flag: 'fr' },
  { name: 'English', level: 'Fluent', note: 'Second language', flag: 'gb' },
] as const;

export const certifications = [
  { title: 'Leadership Certificate', issuer: 'ISET SBZ', date: '', kind: 'certificate' },
  { title: '20-team Hackathon competition', issuer: 'ISET SBZ', date: 'May 2026', kind: 'award' },
];

export const nav = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' },
];
