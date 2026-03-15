import Link from "next/link";
import { curriculum } from "@/lib/curriculum";
import { CurriculumCard } from "@/components/curriculum-card";
import { ProgressTracker } from "@/components/progress-tracker";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-12">
      <section className="space-y-4 text-center">
        <h1 className="text-5xl font-extrabold">From Zero to Hired AI Engineer in 2026</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">21 lessons, 7 modules, 1 career. Learn by building with interactive demos, an AI mentor, and portfolio-ready projects.</p>
        <Link href="/curriculum"><Button>Start Learning</Button></Link>
      </section>
      <ProgressTracker />
      <section className="grid gap-4 md:grid-cols-3">
        {curriculum.slice(0, 6).map((lesson) => <CurriculumCard key={lesson.slug} lesson={lesson} />)}
      </section>
    </main>
  );
}
