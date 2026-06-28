"use client";

import { useState } from "react";

type ExperienceRole = {
  title: string;
  date: string;
  location?: string;
  bullets: string[];
};

type ExperienceCompany = {
  id: string;
  company: string;
  roles: ExperienceRole[];
};

const experiences: ExperienceCompany[] = [
  {
    id: "american-express",
    company: "American Express",
    roles: [
      {
        title: "Software Engineer",
        date: "Jan 2025 - Present",
        location: "Phoenix, AZ",
        bullets: [
          "Engineered scalable backend services for the Amex Offers Partner Layer (AOPL), a high-throughput API gateway enabling external partners including Rakuten, CDLX, and Krowd to integrate with internal systems.",
          "Designed and implemented a rule-based orchestration engine using Java and Cassandra to transform, validate, and route partner payloads, reducing onboarding time by 40%.",
          "Built and optimized data processing pipelines handling 500K+ monthly payloads, improving reliability and data accuracy.",
        ],
      },
      {
        title: "Software Engineering Intern",
        date: "Jun 2024 - Aug 2024",
        location: "Phoenix, AZ",
        bullets: [
          "Developed backend systems for high-volume transaction ingestion pipelines processing merchant payment data at scale.",
          "Built a data ingestion and transformation pipeline using Apache Camel to improve reliability and throughput.",
          "Implemented secure data handling and preprocessing utilities for sensitive financial data.",
        ],
      },
    ],
  },
  {
    id: "target",
    company: "Target",
    roles: [
      {
        title: "Software Engineer Intern",
        date: "Sep 2024 - Dec 2024",
        bullets: [
          "Worked on a large-scale video surveillance platform supporting 8,000+ users and over 180,000 connected cameras.",
          "Created automated regression tests for critical user workflows to improve software quality and release reliability.",
          "Built Cypress end-to-end test automation and integrated testing into CI/CD pipelines.",
          "Partnered with engineers across teams to validate new functionality and identify defects before production releases.",
          "Reduced manual testing effort by expanding automated test coverage across key application features.",
        ],
      },
    ],
  },
  {
    id: "microsoft",
    company: "Microsoft",
    roles: [
      {
        title: "Software Engineer Intern",
        date: "Jun 2023 - Aug 2023",
        location: "Redmond, WA",
        bullets: [
          "Built an AI-assisted communication tool leveraging text-to-speech and NLP technologies.",
          "Developed responsive frontend experiences using React, TypeScript, Redux, and Material UI.",
          "Presented the solution to Microsoft VP leadership demonstrating measurable user impact.",
        ],
      },
    ],
  },
  {
    id: "sleep-number",
    company: "Sleep Number",
    roles: [
      {
        title: "Data Science Intern",
        date: "Sep 2022 - Apr 2023",
        bullets: [
          "Designed and developed Power BI dashboards analyzing damaged bed deliveries across warehouse and distribution networks.",
          "Built automated reporting pipelines from Excel datasets to provide real-time visibility into damage trends.",
          "Created visualizations identifying whether damages occurred before warehouse departure or after customer delivery.",
          "Delivered warehouse-level and location-level analytics to help operations teams identify root causes and reduce future damage rates.",
          "Developed KPI dashboards enabling leadership to track damage frequency, trends, and operational performance.",
        ],
      },
    ],
  },
];

export default function ExperienceSection() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const activeExperience =
    experiences.find((experience) => experience.id === activeId) ?? experiences[0];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading experience-heading">
        <h2>/ experience</h2>
        <span />
      </div>

      <div className="experience-tabs">
        <div className="experience-tab-list" role="tablist" aria-label="Experience timeline">
          {experiences.map((experience) => (
            <button
              key={experience.id}
              id={`tab-${experience.id}`}
              className={`experience-tab ${
                experience.id === activeId ? "is-active" : ""
              }`}
              type="button"
              role="tab"
              aria-controls="experience-panel"
              aria-selected={experience.id === activeId}
              onClick={() => setActiveId(experience.id)}
            >
              {experience.company}
            </button>
          ))}
        </div>

        <article
          key={activeExperience.id}
          id="experience-panel"
          className="experience-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeExperience.id}`}
        >
          {activeExperience.roles.map((role) => (
            <div key={`${activeExperience.id}-${role.title}`} className="experience-role">
              <h3>
                {role.title}{" "}
                <span className="experience-company-unit">
                  <span className="experience-at">@</span>{" "}
                  <span className="experience-company">{activeExperience.company}</span>
                </span>
              </h3>
              <p className="experience-meta">
                {role.date}
                {role.location ? ` · ${role.location}` : ""}
              </p>
              <ul className="experience-list">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
