"use client";

import Link from "next/link";
import { curriculum } from "@/lib/curriculum";
import { markLessonComplete } from "@/lib/progress";
import { Button } from "@/components/ui/button";

export function LessonLayout({
  slug,
  title,
  summary,
  buildThisWeek,
  children,
}: {
  slug: string;
  title: string;
  summary: string;
  buildThisWeek: string;
  children: React.ReactNode;
}) {
  const idx = curriculum.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? curriculum[idx - 1] : null;
  const next = idx < curriculum.length - 1 ? curriculum[idx + 1] : null;

  return (
    <article className="mx-auto max-w-4xl space-y-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{summary}</p>
        <Button onClick={() => markLessonComplete(slug)}>Mark complete</Button>
      </header>
      <div className="prose prose-slate dark:prose-invert max-w-none">{children}</div>
      <section className="rounded-lg border p-4">
        <p className="font-semibold">Build This Week</p>
        <p className="text-muted-foreground">{buildThisWeek}</p>
      </section>
      <nav className="flex justify-between">
        {prev ? <Link href={`/lessons/${prev.slug}`}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/lessons/${next.slug}`}>{next.title} →</Link> : <span />}
      </nav>
    </article>
  );
}
