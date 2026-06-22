import { Brain, Code2, Database, Server, Wrench } from "lucide-react";
import Image from "next/image";

type SkillGroupProps = {
  title: string;
  items: string[];
  icon: string;
  image: string;
};

const iconMap = {
  code2: Code2,
  brain: Brain,
  server: Server,
  wrench: Wrench,
  database: Database,
};

export function SkillGroup({ title, items, icon, image }: SkillGroupProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Code2;

  return (
    <article className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-blue-500/25 dark:bg-zinc-950">
      <div className="relative h-24 w-full">
        <Image src={image} alt={`${title} visual`} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="inline-flex items-center gap-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          <Icon size={18} className="text-orange-600 dark:text-blue-300" />
          {title}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-blue-500/25 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {item}
          </li>
        ))}
        </ul>
      </div>
    </article>
  );
}
