import Image from "next/image";
import Link from "next/link";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Software", href: "#projects" },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.75 5h14.5A2.75 2.75 0 0 1 22 7.75v8.5A2.75 2.75 0 0 1 19.25 19H4.75A2.75 2.75 0 0 1 2 16.25v-8.5A2.75 2.75 0 0 1 4.75 5Zm.16 2 6.5 5.17c.35.28.83.28 1.18 0L19.09 7H4.91Zm15.09 1.5-6.16 4.9a2.95 2.95 0 0 1-3.68 0L4 8.5v7.75c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75V8.5Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Abdikarinmohamed",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdikarin/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5.37 7.82A2.32 2.32 0 1 1 5.34 3.2a2.32 2.32 0 0 1 .03 4.63ZM7.3 20.8H3.42V9.22H7.3V20.8Zm13.3 0h-3.87v-6.16c0-1.55-.56-2.61-1.96-2.61-1.07 0-1.7.72-1.98 1.42-.1.25-.13.59-.13.94v6.41H8.8s.05-10.4 0-11.58h3.87v1.64c.51-.8 1.43-1.94 3.49-1.94 2.55 0 4.45 1.67 4.45 5.26v6.62Z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "#contact",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M15.23 3.9a2.12 2.12 0 0 1 3 3L8.96 16.17 5 17.25l1.08-3.96 9.15-9.39Zm1.4 1.4-8.75 8.99-.27 1.01 1.01-.27 8.79-8.79a.12.12 0 0 0 0-.17l-.6-.6a.12.12 0 0 0-.18 0ZM4 20h16v2H4v-2Z" />
      </svg>
    ),
  },
];

function isExternalLink(href: string) {
  return href.startsWith("http");
}

const technologies = [
  "Java",
  "Python",
  "React",
  "TypeScript",
  "Docker",
  "PostgreSQL",
];

const educationItems = [
  {
    institution: "University of Texas at Austin",
    degree: "M.S. Computer Science — Artificial Intelligence / Machine Learning",
    years: "2026 – Present",
    description:
      "Graduate studies focused on machine learning, optimization, deep learning, and generative AI.",
    current: true,
  },
  {
    institution: "University of Minnesota Twin Cities",
    degree: "B.S. Computer Science",
    years: "2023 – 2025",
    description:
      "Focused on software engineering, algorithms, data structures, distributed systems, and backend development.",
  },
  {
    institution: "Normandale Community College",
    degree: "Computer Science Pathway",
    years: "2021 – 2023",
    description:
      "Completed foundational coursework in computer science, mathematics, and engineering before transferring to the University of Minnesota.",
  },
];

function GraduationCapIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3 1.5 8.25 12 13.5l8-4v6.25h2V8.25L12 3Zm0 8.25L5.97 8.25 12 5.24l6.03 3.01L12 11.25Zm-5.5 1.18v3.88c0 1.18.64 2.21 1.93 3.08 1.15.77 2.34 1.16 3.57 1.16s2.42-.39 3.57-1.16c1.29-.87 1.93-1.9 1.93-3.08v-3.88L12 15.18l-5.5-2.75Zm2 3.88v-.65L12 17.41l3.5-1.75v.65c0 .45-.33.89-.98 1.33-.78.52-1.62.78-2.52.78s-1.74-.26-2.52-.78c-.65-.44-.98-.88-.98-1.33Z" />
    </svg>
  );
}

function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="education-intro">
        <p className="section-eyebrow">Education</p>
      </div>

      <div className="education-timeline">
        {educationItems.map((item) => (
          <article
            key={item.institution}
            className={`education-card ${item.current ? "is-current" : ""}`}
          >
            <div className="education-icon">
              <GraduationCapIcon />
            </div>
            <div className="education-card-content">
              <div className="education-card-header">
                <h3>{item.institution}</h3>
                <span>{item.years}</span>
              </div>
              <p className="education-degree">{item.degree}</p>
              <p className="education-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <h2>/ about me</h2>
        <span />
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            Currently, I&apos;m a Software Engineer at{" "}
            <strong>American Express</strong>, where I build backend services
            and APIs that power Amex Offers, helping move offers from creation
            to card member experiences. Previously, I worked at{" "}
            <strong>Microsoft</strong> and <strong>Target</strong>.
          </p>

          <p>Here are some technologies I have been working with:</p>

          <ul className="tech-list" aria-label="Technologies">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <p>
            In my free time, I enjoy playing soccer, running, and exploring
            fashion.
          </p>
        </div>

        <div className="about-photo-card">
          <Image
            src="/image.png"
            alt="Portrait of Abdikarin Mohamed"
            fill
            sizes="(max-width: 980px) 360px, 360px"
            className="about-photo"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" href="/">
          Abdikarin Mohamed
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="social-links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target={isExternalLink(link.href) ? "_blank" : undefined}
              rel={isExternalLink(link.href) ? "noreferrer" : undefined}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </nav>

      <section id="home" className="hero-section section">
        <div className="hero-copy">
          <h1>
            hi, <span className="hero-name">abdikarin</span> here.
            <span className="hero-cursor" aria-hidden="true" />
          </h1>
          <p className="hero-text">
            Software engineer in Phoenix, Arizona. I build backend services at
            American Express by day and study AI/ML at UT Austin by night.
          </p>
          <div className="hero-actions">
            <a className="button button-secondary" href="#contact">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M4.75 5h14.5A2.75 2.75 0 0 1 22 7.75v8.5A2.75 2.75 0 0 1 19.25 19H4.75A2.75 2.75 0 0 1 2 16.25v-8.5A2.75 2.75 0 0 1 4.75 5Zm.16 2 6.5 5.17c.35.28.83.28 1.18 0L19.09 7H4.91Zm15.09 1.5-6.16 4.9a2.95 2.95 0 0 1-3.68 0L4 8.5v7.75c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75V8.5Z" />
              </svg>
              Say hi!
            </a>
          </div>
        </div>
      </section>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />

      <footer className="site-footer">
        <p>Built and designed by Abdikarin Mohamed.</p>
        <p>All rights reserved. ©</p>
      </footer>
    </main>
  );
}
