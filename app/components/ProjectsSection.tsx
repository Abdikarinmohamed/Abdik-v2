"use client";

import Image from "next/image";
import { KeyboardEvent, TouchEvent, useState } from "react";

const featuredProjects = [
  {
    title: "CallRecover",
    github: "https://github.com/Abdikarinmohamed/callrecover",
    description:
      "SaaS tool for HVAC businesses that recovers missed calls with automated SMS replies, lead capture, and dashboard messaging.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Twilio"],
    image: "/CallRecover.png",
    objectPosition: "45% center",
  },
  {
    title: "Abdik-v1",
    github: "https://github.com/Abdikarinmohamed/Abdik-v1",
    description:
      "First version of my personal portfolio website built with a responsive modern layout and personal branding focus.",
    tech: ["HTML", "CSS"],
    image: "/Port1.png",
    objectPosition: "55% center",
  },
];

const projects = [
  {
    title: "AI PR Reviewer",
    github: "https://github.com/Abdikarinmohamed/agentic-pr-reviewer",
    description:
      "AI-powered code review assistant that analyzes pull requests and suggests improvements.",
    tech: ["Python", "OpenAI API", "GitHub"],
  },
  {
    title: "Trello Dev",
    github: "https://github.com/Abdikarinmohamed/Trello-dev",
    description:
      "Developer-focused Trello-style task management board for organizing engineering work and project tasks.",
    tech: ["TypeScript", "JavaScript", "CSS"],
  },
  {
    title: "RedStore eCommerce Website",
    github: "https://github.com/Abdikarinmohamed/RedStore-eCommerce-Website",
    description:
      "Responsive eCommerce storefront with product sections, shopping layout, and modern UI components.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h4.03c.73 0 1.42.29 1.94.8l1.45 1.45h5.08A2.75 2.75 0 0 1 21 9v8.25A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-.75a.75.75 0 0 0-.75.75v10.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V9a.75.75 0 0 0-.75-.75h-5.91L10.3 6.21A.75.75 0 0 0 9.78 6H5.75Z" />
    </svg>
  );
}

function ProjectLinks({
  github,
  liveUrl,
  title,
}: {
  github: string;
  liveUrl?: string;
  title: string;
}) {
  return (
    <div className="project-links">
      <a href={github} target="_blank" rel="noreferrer" aria-label={`${title} GitHub`}>
        <GitHubIcon />
      </a>
      {liveUrl ? (
        <a href={liveUrl} target="_blank" rel="noreferrer" aria-label={`${title} live demo`}>
          <ExternalLinkIcon />
        </a>
      ) : null}
    </div>
  );
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const activeProject = featuredProjects[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredProjects.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === featuredProjects.length - 1 ? 0 : current + 1,
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      goToNext();
    }
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStart === null) {
      return;
    }

    const delta = touchStart - event.changedTouches[0].clientX;

    if (Math.abs(delta) > 48) {
      if (delta > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStart(null);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-heading">
        <div className="section-heading">
          <h2>/ software</h2>
          <span />
        </div>
        <a
          className="projects-view-all"
          href="https://github.com/Abdikarinmohamed"
          target="_blank"
          rel="noreferrer"
        >
          View all projects <span aria-hidden="true">→</span>
        </a>
      </div>

      <article
        className="featured-carousel"
        aria-label="Featured projects carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className={`featured-slide ${index === activeIndex ? "is-active" : ""}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 980px) 92vw, 80vw"
              className="featured-slide-image"
              style={{ objectPosition: project.objectPosition }}
              priority={index === 0}
            />
          </div>
        ))}

        <div className="featured-slide-overlay" key={activeProject.title}>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.description}</p>
          <ul className="project-tech-list">
            {activeProject.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <ProjectLinks github={activeProject.github} title={activeProject.title} />
        </div>

        <button
          className="carousel-arrow carousel-arrow-left"
          type="button"
          aria-label="Previous featured project"
          onClick={goToPrevious}
        >
          ←
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          type="button"
          aria-label="Next featured project"
          onClick={goToNext}
        >
          →
        </button>
      </article>

      <div className="project-pagination" aria-label="Featured project pagination">
        {featuredProjects.map((project, index) => (
          <button
            key={project.title}
            className={index === activeIndex ? "is-active" : undefined}
            type="button"
            aria-label={`Show ${project.title}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-top">
              <span className="project-folder">
                <FolderIcon />
              </span>
              <ProjectLinks github={project.github} title={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tech-list">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
