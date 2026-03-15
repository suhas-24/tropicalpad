import { curriculum } from "@/lib/curriculum";
import { CurriculumCard } from "@/components/curriculum-card";

export default function CurriculumPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-6 text-4xl font-bold">Complete Curriculum</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {curriculum.map((lesson) => <CurriculumCard key={lesson.slug} lesson={lesson} />)}
      </div>
    </main>
  );
}
