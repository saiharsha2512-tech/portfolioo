"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X,
  Code2, Database, Smartphone, Server, Sparkles, ChevronDown, ArrowUp
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "MediVerse",
    category: "FULL-STACK HEALTHCARE",
    description: "A healthcare platform connecting patients and doctors with appointments, medicine ordering, AI health assistance and digital healthcare services.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    href: "https://github.com/saiharsha2512-tech/MediVerse1",
    accent: "cyan"
  },
  {
    number: "02",
    title: "iTantra",
    category: "OFFLINE-FIRST VOICE COMMUNICATION",
    description: "A multilingual voice communication app for low-bandwidth settings, with voice alerts and distress messages across Indian languages.",
    stack: ["Flutter", "Dart", "Android", "Vosk / Sherpa-ONNX"],
    href: "https://github.com/saiharsha2512-tech/iTantra",
    accent: "violet"
  }
];

const skills = [
  { name: "Java / DSA / OOP", icon: Code2 },
  { name: "React / Next.js / JavaScript", icon: Sparkles },
  { name: "Node.js / Express / REST APIs", icon: Server },
  { name: "Flutter / Dart / Android", icon: Smartphone },
  { name: "MongoDB / PostgreSQL / MySQL", icon: Database }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const y = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="noise" />
      <motion.div className="floating-orb orb-one" style={{ y: orbY }} />
      <motion.div className="floating-orb orb-two" style={{ y: orbY2 }} />

      <nav className="nav">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">H</span>
          <span>HARSH<span className="accent">A</span></span>
        </button>

        <div className="nav-links">
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <button key={id} onClick={() => go(id)} className={active === id ? "active" : ""}>{id}</button>
          ))}
        </div>

        <a className="nav-cta" href="mailto:saiharsha2512@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15}/>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <motion.div className="mobile-menu" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }}>
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <button key={id} onClick={() => go(id)}>{id}</button>
          ))}
        </motion.div>
      )}

      <section id="home" className="section hero">
        <div className="hero-grid" />
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="status-dot" /> AVAILABLE FOR INTERNSHIPS
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            Building digital <span className="gradient-text">experiences</span><br />that feel alive.
          </motion.h1>

          <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
            I&apos;m <strong>Harsha</strong> — a second-year B.Tech CSE student specializing in Software Product Engineering.
            I build full-stack and mobile apps, and I&apos;m seeking a software engineering internship.
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
            <button className="primary-btn" onClick={() => go("projects")}>Explore my work <ArrowDown size={17}/></button>
            <a className="ghost-btn" href="https://github.com/saiharsha2512-tech" target="_blank" rel="noreferrer">
              <Github size={18}/> GitHub
            </a>
          </motion.div>

          <div className="hero-meta">
            <span><MapPin size={14}/> Tamil Nadu, India</span><span>•</span><span>Kalvium × Kalasalingam University</span>
          </div>
        </div>

        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .25 }}>
          <div className="portrait-glow" />
          <div className="portrait-card">
            <div className="portrait-image">
              <Image src="/images/profile/harsha.jpg" alt="Harsha" fill priority sizes="(max-width: 850px) 78vw, 390px" />
              <div className="image-overlay" />
            </div>
            <div className="floating-chip chip-one">React</div>
            <div className="floating-chip chip-two">Node.js</div>
            <div className="floating-chip chip-three">Flutter</div>
          </div>
        </motion.div>

        <motion.button className="scroll-hint" onClick={() => go("about")} animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.7 }}>
          SCROLL <ChevronDown size={14}/>
        </motion.button>
      </section>

      <section id="about" className="section about">
        <div className="section-head"><span>01 — ABOUT</span><span>THE PERSON BEHIND THE CODE</span></div>
        <div className="about-layout">
          <motion.div className="big-statement" whileInView={{ opacity: [0,1], y: [30,0] }} viewport={{ once: true }}>
            Curious by default.<br/><span>Builder by choice.</span>
          </motion.div>
          <div className="about-copy">
            <p>I&apos;m a second-year B.Tech CSE student in Kalvium&apos;s Software Product Engineering program at Kalasalingam University.</p>
            <p>I build full-stack and mobile applications, practice Java, DSA, OOP and DBMS, and enjoy collaborative, project-based development. I&apos;m looking for an internship where I can contribute to real software and keep growing.</p>
            <div className="stats">
              <div><strong>02</strong><span>Featured projects</span></div>
              <div><strong>SIH 2026</strong><span>Selected team</span></div>
              <div><strong>2025–29</strong><span>B.Tech CSE</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="section-head"><span>02 — TOOLKIT</span><span>WHAT I BUILD WITH</span></div>
        <div className="skills-layout">
          <div className="skill-intro">
            <Sparkles size={25}/>
            <h2>A stack that lets<br/><span>ideas ship.</span></h2>
            <p>Languages, full-stack tools and mobile development I&apos;ve used in projects and coding practice.</p>
          </div>
          <div className="skill-list">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div className="skill-row" key={skill.name} initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}>
                  <div className="skill-icon"><Icon size={21}/></div>
                  <div className="skill-name">{skill.name}</div>
                  <span className="skill-context">Hands-on</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-head"><span>03 — SELECTED WORK</span><span>THINGS I&apos;VE SHIPPED</span></div>
        <div className="project-stack">
          {projects.map((project, i) => (
            <motion.article key={project.title} className={`project-card ${project.accent}`} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, delay: i*.08 }}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
              </div>
              <a href={project.href} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.title}`}><ArrowUpRight /></a>
              <div className="project-shine" />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-card">
          <div className="contact-grid" />
          <span className="eyebrow">04 — CONTACT</span>
          <h2>Have an idea?<br/><span>Let&apos;s build it.</span></h2>
          <p>I&apos;m seeking a paid software engineering internship to contribute to production work and grow my Java, backend and full-stack skills.</p>
          <a className="primary-btn big" href="mailto:saiharsha2512@gmail.com">Start a conversation <Mail size={18}/></a>
          <div className="socials">
            <a href="https://github.com/saiharsha2512-tech" target="_blank" rel="noreferrer"><Github/> GitHub</a>
            <a href="https://www.linkedin.com/in/sai-harsha-046051380/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Harsha</span>
        <span>Designed &amp; built with curiosity.</span>
        <button onClick={() => go("home")} aria-label="Back to top"><ArrowUp size={16}/></button>
      </footer>
    </main>
  );
}