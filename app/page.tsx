"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useMemo, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { ContactForm } from "@/components/contact-form";
import { CpProfilePanel } from "@/components/cp-profile-panel";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroup } from "@/components/skill-group";
import { personalInfo, projects, publication, skills } from "@/data/portfolio-data";

const categories = ["All", "ML", "Backend", "Data Engineering"] as const;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>("All");
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur dark:border-blue-500/20 dark:bg-black/70">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <p className="text-sm font-semibold tracking-wide">{personalInfo.name}</p>
          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="rounded-full px-3 py-1.5 text-sm text-zinc-700 transition hover:text-orange-700 dark:text-zinc-300 dark:hover:text-blue-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-3 py-1.5 text-sm text-zinc-700 transition hover:text-orange-700 dark:text-zinc-300 dark:hover:text-blue-300"
            >
              Contact
            </a>
            <a
              href="#skills"
              className="rounded-full px-3 py-1.5 text-sm text-zinc-700 transition hover:text-orange-700 dark:text-zinc-300 dark:hover:text-blue-300"
            >
              Skills
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-20 bg-gradient-to-b from-orange-50/60 to-transparent px-4 py-12 md:px-6 md:py-16 dark:from-transparent">
        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl dark:text-zinc-100"
            >
              {personalInfo.name}
            </motion.h1>
            <p className="mt-3 text-lg font-semibold text-orange-700 dark:text-blue-300">
              {personalInfo.role}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-300">
              {personalInfo.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-black/15 px-5 py-3 text-sm font-semibold transition hover:border-orange-300 dark:border-blue-500/40 dark:hover:border-blue-300"
              >
                Contact Me
              </a>
              <a
                href="/Lokesh S - Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-black/15 px-5 py-3 text-sm font-semibold transition hover:border-orange-300 dark:border-blue-500/40 dark:hover:border-blue-300"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>

          <CpProfilePanel />
        </section>

        <section id="about">
          <SectionHeading
            eyebrow="About"
            title=""
            description={personalInfo.about}
          />
        </section>

        <section id="projects">
          <SectionHeading
            eyebrow="Projects"
            title="Built with product impact in mind."
            description="Hands-on work across data engineering, ML systems, and backend architecture."
          />
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeFilter === category
                  ? "border-orange-500 bg-orange-500 text-white dark:border-blue-500 dark:bg-blue-500"
                  : "border-black/10 bg-white text-zinc-700 hover:border-orange-300 dark:border-blue-500/30 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-blue-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Core capabilities"
            description="A practical stack optimized for ML experimentation and production backend delivery."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <SkillGroup
                key={group.title}
                title={group.title}
                items={group.items}
                icon={group.icon}
                image={group.image}
              />
            ))}
          </div>
        </section>

        <section id="publications">
          <SectionHeading eyebrow="Publication" title={publication.title} />
          <article className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm dark:border-blue-500/25 dark:bg-zinc-950">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{publication.venue}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {publication.details}
            </p>
            <a
              href={publication.doi}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-orange-700 hover:underline dark:text-blue-300"
            >
              Read publication DOI
            </a>
          </article>
        </section>

        <section id="contact">
          <SectionHeading
            eyebrow="Contact"
            title="Let us build something meaningful."
            description="Open to internships, backend and ML collaborations, and product engineering opportunities."
          />
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <div className="flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-sm dark:border-blue-500/25 dark:bg-zinc-950">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Reach out directly for project discussions, internships, or engineering opportunities.
              </p>
              <div className="mt-4 space-y-4 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-zinc-700 transition hover:text-orange-700 dark:text-zinc-200 dark:hover:text-blue-300"
                >
                  <FaEnvelope size={16} />
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-700 transition hover:text-orange-700 dark:text-zinc-200 dark:hover:text-blue-300"
                >
                  <FaLinkedin size={16} />
                  LinkedIn Profile
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-700 transition hover:text-orange-700 dark:text-zinc-200 dark:hover:text-blue-300"
                >
                  <FaGithub size={16} />
                  GitHub Profile
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
