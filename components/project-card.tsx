"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: readonly string[];
  impact: string;
  link: string;
  image: string;
};

export function ProjectCard({ title, description, tech, impact, link, image }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-2xl border border-blue-500/25 bg-zinc-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-44 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>
        <p className="mt-3 text-sm font-medium text-zinc-100">Impact: {impact}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200"
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:gap-3"
        >
          View on GitHub <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}
