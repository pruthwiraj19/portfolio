'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Briefcase,
  ChevronDown,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionTransition from '@/components/SectionTransition';
import { portfolio } from '@/data/portfolio';
import portrait from '@/public/pruthwiraj-portrait.png';

const navigation = [
  { label: 'Home', id: 'hero' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="mb-4 text-4xl font-bold sm:text-5xl"><span className="text-gradient">{title}</span></h2>
      <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', next === 'light');
    document.documentElement.classList.toggle('dark', next === 'dark');
    setTheme(next);
    try { window.localStorage.setItem('portfolio-theme', next); } catch { /* Theme still works without storage. */ }
  };

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen pb-20 lg:pb-0 lg:snap-y lg:snap-proximity">
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to portfolio</a>
      {theme === 'dark' && <AnimatedBackground />}

      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-primary" style={{ scaleX }} />
      <nav className="fixed left-4 right-4 top-4 z-40 rounded-xl border border-white/15 bg-background/75 px-4 py-3 backdrop-blur-xl lg:left-6 lg:right-6" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <button onClick={() => goTo('hero')} className="section-label text-xl text-foreground">Pruthwiraj</button>
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => <button key={item.id} onClick={() => goTo(item.id)} className="rounded-lg px-3 py-2 text-xs font-medium text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground">{item.label}</button>)}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="theme-toggle rounded-lg border border-primary/30 bg-primary/10 p-2 text-primary transition hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={theme === 'light'} title={theme === 'dark' ? 'Light theme' : 'Dark theme'}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => goTo('contact')} className="hidden rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90 lg:inline-flex">Let&apos;s connect <ArrowUpRight className="ml-2 h-4 w-4" /></button>
            <button onClick={() => setMenuOpen((open) => !open)} className="rounded-lg p-2 text-foreground hover:bg-white/10 lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && <div className="mt-3 grid grid-cols-2 gap-1 border-t border-white/10 pt-3 lg:hidden">{navigation.map((item) => <button key={item.id} onClick={() => goTo(item.id)} className="rounded-lg px-3 py-2 text-left text-sm text-foreground/85 hover:bg-white/10">{item.label}</button>)}</div>}
      </nav>

      <section id="hero" className="section-shell relative flex min-h-[92svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center sm:px-6 lg:snap-start lg:px-8 lg:pt-40">
        <div className="grid-bg absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="side-label side-label-right hidden xl:block">Portfolio</div>
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <motion.div className="mx-auto mb-8 w-fit" initial={{ opacity: 0, y: 24, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .8 }}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/40 via-accent/25 to-primary/15 blur-lg" />
              <div className="glass panel-shift relative h-32 w-32 overflow-hidden rounded-full border border-primary/40 sm:h-48 sm:w-48">
                <Image src={portrait} alt="Portrait of Pruthwiraj Deshmukh" fill priority sizes="(min-width: 640px) 192px, 128px" className="scale-105 object-cover object-[center_12%]" />
              </div>
            </div>
          </motion.div>
          <motion.p className="section-label mx-auto mb-3 text-xs tracking-[.12em] text-primary/90 sm:text-sm" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .1 }}>MMS Marketing · WeSchool 2025–27</motion.p>
          <motion.h1 className="font-display mb-5 text-[clamp(3.2rem,11vw,8rem)] leading-[.9]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}><span className="text-gradient">Pruthwiraj<br />Deshmukh</span></motion.h1>
          <motion.p className="mb-5 text-lg text-muted-foreground sm:text-2xl lg:text-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>Customer insight. Commercial impact.</motion.p>
          <motion.div className="mx-auto mb-8 flex max-w-3xl flex-wrap justify-center gap-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .3 }}>
            {['Market Research', 'Business Analytics', 'Customer Engagement', 'MMS Marketing'].map((skill) => <span key={skill} className="glass rounded-full border border-primary/30 px-4 py-2 text-xs sm:text-sm">{skill}</span>)}
          </motion.div>
          <motion.p className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .4 }}>{portfolio.intro}</motion.p>
          <motion.div className="mx-auto mb-8 max-w-4xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .45 }}>
            <button onClick={() => setHighlightsOpen((open) => !open)} aria-expanded={highlightsOpen} className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02] hover:bg-primary/25"><Sparkles className="h-4 w-4" /> Why work with me? <ChevronDown className={`h-4 w-4 transition-transform ${highlightsOpen ? 'rotate-180' : ''}`} /></button>
            <motion.div initial={false} animate={{ height: highlightsOpen ? 'auto' : 0, opacity: highlightsOpen ? 1 : 0, marginTop: highlightsOpen ? 20 : 0 }} className="overflow-hidden">
              <div className="glass rounded-2xl border border-white/15 p-5 text-left sm:p-6">
                <h2 className="mb-4 text-lg font-semibold text-primary">Evidence from my work</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{portfolio.highlights.map((item) => <div key={item.label} className="rounded-xl border border-primary/25 bg-primary/10 px-4 py-3"><strong className="block text-xl text-primary sm:text-2xl">{item.value}</strong><span className="text-sm text-foreground/80">{item.label}</span></div>)}</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="mb-10 flex flex-wrap justify-center gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .5 }}>
            <button onClick={() => goTo('experience')} className="glow inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-105 hover:bg-primary/90">Explore my journey <ArrowDown className="h-5 w-5" /></button>
            <button onClick={() => goTo('contact')} className="theme-outline inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"><Mail className="h-5 w-5" /> Get in touch</button>
          </motion.div>
          <motion.div className="flex justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .6 }}>
            <a href={`mailto:${portfolio.email}`} className="glass glow rounded-lg p-3 transition hover:scale-110 hover:bg-white/10" aria-label="Email Pruthwiraj"><Mail className="h-6 w-6" /></a>
            <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="glass glow rounded-lg p-3 transition hover:scale-110 hover:bg-white/10" aria-label="Pruthwiraj on LinkedIn"><Linkedin className="h-6 w-6" /></a>
          </motion.div>
          <div className="ticker-track mt-10 overflow-hidden rounded-full border border-white/10 bg-white/[.03] py-2"><motion.div className="section-label whitespace-nowrap text-xs text-foreground/70 sm:text-sm" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, ease: 'linear', repeat: Infinity }}>MARKET RESEARCH · CUSTOMER INSIGHT · BUSINESS ANALYTICS · COMMERCIAL EXECUTION · MARKET RESEARCH · CUSTOMER INSIGHT · BUSINESS ANALYTICS · COMMERCIAL EXECUTION ·</motion.div></div>
        </div>
      </section>

      <SectionTransition label="Experience" index={0} />
      <section id="experience" className="section-shell relative px-4 py-20 sm:px-6 lg:snap-start lg:px-8">
        <div className="side-label side-label-left hidden xl:block">Experience</div>
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader title="Professional Journey" subtitle="Customer-facing commercial work and a foundation in disciplined operations." />
          <div className="relative space-y-10 before:absolute before:bottom-0 before:left-2 before:top-0 before:w-px before:bg-primary/30 md:before:left-1/2">
            {portfolio.experience.map((item, index) => <article key={item.organization} className="relative pl-9 md:pl-0"><div className="absolute left-0 top-3 z-10 h-4 w-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" /><div className={`glass panel-shift rounded-2xl p-6 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}><div className="mb-3 flex items-center gap-2 text-primary"><Briefcase className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-wider">{item.title}</span></div><h3 className="mb-1 text-2xl font-bold">{item.organization}</h3><p className="mb-4 text-sm text-muted-foreground">{item.period} · {item.location}</p><p className="mb-4 text-foreground/80">{item.summary}</p><ul className="space-y-2 border-t border-white/10 pt-4">{item.outcomes.map((outcome) => <li key={outcome} className="flex gap-2 text-sm leading-relaxed text-foreground/70"><span className="text-primary">▹</span>{outcome}</li>)}</ul></div></article>)}
          </div>
        </div>
      </section>

      <SectionTransition label="Achievements & Impact" index={1} />
      <section id="achievements" className="section-shell relative px-4 py-20 sm:px-6 lg:snap-start lg:px-8">
        <div className="side-label side-label-right hidden xl:block">Impact</div>
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader title="Impact in Numbers" subtitle="Results and recognition documented in my CV." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{portfolio.highlights.map((item) => <article key={item.label} className="glass panel-shift rounded-2xl p-6"><Award className="mb-5 h-7 w-7 text-primary" /><strong className="mb-3 block text-3xl font-bold text-gradient">{item.value}</strong><h3 className="mb-2 font-semibold">{item.label}</h3><p className="text-sm text-muted-foreground">{item.detail}</p></article>)}</div>
          <div className="glass mt-6 rounded-2xl border border-accent/30 p-6"><p className="text-sm font-semibold uppercase tracking-wider text-accent">Global Citizen Leadership</p><h3 className="mt-2 text-xl font-bold">1st rank for the school backpack redesign</h3><p className="mt-2 text-sm leading-relaxed text-foreground/70">Primary research with 50+ students informed an ergonomic, smart and eco-friendly prototype.</p></div>
        </div>
      </section>

      <SectionTransition label="Case Studies" index={2} />
      <section id="projects" className="section-shell relative px-4 py-20 sm:px-6 lg:snap-start lg:px-8">
        <div className="side-label side-label-left hidden xl:block">Projects</div>
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader title="Selected Projects" subtitle="Market research and practical ideas shaped by customer needs." />
          <div className="space-y-8">{portfolio.projects.map((project) => <article key={project.number} className="glass panel-shift rounded-2xl p-6 sm:p-8"><div className="mb-5 flex flex-wrap items-start justify-between gap-4"><div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">{project.tag}</p><h3 className="text-2xl font-bold sm:text-3xl">{project.title}</h3><p className="mt-1 text-sm text-primary">{project.organization}</p></div><span className="font-display text-4xl text-primary/40">{project.number}</span></div><p className="mb-6 max-w-4xl leading-relaxed text-foreground/80">{project.description}</p><div className="grid gap-3 sm:grid-cols-2">{project.outcomes.map((outcome) => <p key={outcome} className="rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-foreground/85">{outcome}</p>)}</div></article>)}</div>
        </div>
      </section>

      <SectionTransition label="Expertise" index={3} />
      <section id="skills" className="section-shell relative px-4 py-20 sm:px-6 lg:snap-start lg:px-8">
        <div className="side-label side-label-right hidden xl:block">Skills</div>
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader title="Skills & Strengths" subtitle="Research, relationship building and analytical tools." />
          <div className="grid gap-6 md:grid-cols-3">{Object.entries(portfolio.skills).map(([category, skills]) => <article key={category} className="glass panel-shift rounded-2xl p-6"><h3 className="mb-5 text-xl font-bold text-primary">{category}</h3><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-2 text-xs text-foreground/85">{skill}</span>)}</div></article>)}</div>
          <div className="glass mt-7 rounded-2xl p-6"><h3 className="mb-4 text-lg font-semibold text-accent">Leadership beyond the classroom</h3><div className="grid gap-5 md:grid-cols-2">{portfolio.leadership.map((item) => <div key={item.title}><p className="text-xs text-primary">{item.period}</p><h4 className="mt-1 font-semibold">{item.title}</h4><p className="mt-1 text-sm text-foreground/70">{item.description}</p></div>)}</div></div>
        </div>
      </section>

      <SectionTransition label="Education" index={4} />
      <section id="education" className="section-shell relative px-4 py-20 sm:px-6 lg:snap-start lg:px-8">
        <div className="side-label side-label-left hidden xl:block">Education</div>
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader title="Education & Certifications" subtitle="Marketing studies grounded in pharmacy and continued learning." />
          <div className="grid gap-7 lg:grid-cols-[1.3fr_.7fr]">
            <div className="space-y-4">{portfolio.education.map((item) => <article key={item.degree} className="glass rounded-2xl p-5 sm:p-6"><div className="flex items-start gap-4"><GraduationCap className="mt-1 h-6 w-6 shrink-0 text-primary" /><div className="flex-1"><div className="flex flex-wrap justify-between gap-2"><h3 className="text-lg font-bold">{item.degree}</h3><span className="text-sm text-primary">{item.period}</span></div><p className="mt-1 text-sm text-muted-foreground">{item.school}{item.location && ` · ${item.location}`}</p><p className="mt-2 text-sm text-foreground/75">{item.result}</p></div></div></article>)}</div>
            <aside className="glass h-fit rounded-2xl p-6">
              <h3 className="mb-5 text-xl font-bold text-gradient">Certifications</h3>
              <ul className="space-y-4">{portfolio.certifications.map((certification) => <li key={certification.title} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <h4 className="font-semibold text-foreground">{certification.title}</h4>
                {certification.issuer && <p className="mt-1 text-xs text-muted-foreground">{certification.issuer} · {certification.date}</p>}
                {certification.file && <Link href={`/certificates/${certification.file}`} prefetch={false} target="_blank" rel="noopener noreferrer" aria-label={`View ${certification.title} certificate`} className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:text-accent">View certificate <ArrowUpRight className="h-4 w-4" /></Link>}
              </li>)}</ul>
            </aside>
          </div>
          <p className="mt-7 text-center text-sm text-muted-foreground">Languages: {portfolio.languages.join(' · ')} <span className="mx-3 text-primary">•</span> Interests: {portfolio.interests.join(' · ')}</p>
        </div>
      </section>

      <SectionTransition label="Get in Touch" index={5} />
      <section id="contact" className="section-shell relative px-4 py-20 sm:px-6 lg:snap-start lg:px-8">
        <div className="side-label side-label-right hidden xl:block">Contact</div>
        <div className="mx-auto w-full max-w-5xl text-center">
          <SectionHeader title="Let’s Connect" subtitle="I welcome conversations about marketing, customer research and business analytics." />
          <a href={`mailto:${portfolio.email}`} className="glow inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:scale-105 hover:bg-primary/90">Send an email <ArrowUpRight className="h-5 w-5" /></a>
          <div className="mt-12 grid gap-4 sm:grid-cols-3"><a href={`mailto:${portfolio.email}`} className="glass panel-shift rounded-xl p-5"><Mail className="mx-auto mb-3 h-6 w-6 text-primary" /><span className="block break-all text-sm">{portfolio.email}</span></a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="glass panel-shift rounded-xl p-5"><Linkedin className="mx-auto mb-3 h-6 w-6 text-primary" /><span className="block text-sm">LinkedIn</span></a><a href={`tel:${portfolio.phone.replace(/\s/g, '')}`} className="glass panel-shift rounded-xl p-5"><Phone className="mx-auto mb-3 h-6 w-6 text-primary" /><span className="block text-sm">{portfolio.phone}</span></a></div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> {portfolio.location}</p>
          <p className="mt-16 text-xs text-muted-foreground">© {new Date().getFullYear()} {portfolio.name}</p>
        </div>
      </section>
    </main>
  );
}
