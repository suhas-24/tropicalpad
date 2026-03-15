import { notFound } from "next/navigation";
import { curriculum } from "@/lib/curriculum";

const lessonModules = {
  "lesson-01-what-is-ai": () => import("@/lessons/lesson-01-what-is-ai"),
  "lesson-02-machine-learning-basics": () => import("@/lessons/lesson-02-machine-learning-basics"),
  "lesson-03-neural-networks": () => import("@/lessons/lesson-03-neural-networks"),
  "lesson-04-transformers-the-real-magic": () => import("@/lessons/lesson-04-transformers-the-real-magic"),
  "lesson-05-tokens-embeddings-attention": () => import("@/lessons/lesson-05-tokens-embeddings-attention"),
  "lesson-06-large-language-models": () => import("@/lessons/lesson-06-large-language-models"),
  "lesson-07-prompt-engineering": () => import("@/lessons/lesson-07-prompt-engineering"),
  "lesson-08-rag-retrieval-augmented-generation": () => import("@/lessons/lesson-08-rag-retrieval-augmented-generation"),
  "lesson-09-advanced-rag-2026": () => import("@/lessons/lesson-09-advanced-rag-2026"),
  "lesson-10-fine-tuning-vs-lora": () => import("@/lessons/lesson-10-fine-tuning-vs-lora"),
  "lesson-11-ai-agents": () => import("@/lessons/lesson-11-ai-agents"),
  "lesson-12-mcp-model-context-protocol": () => import("@/lessons/lesson-12-mcp-model-context-protocol"),
  "lesson-13-multimodal-ai": () => import("@/lessons/lesson-13-multimodal-ai"),
  "lesson-14-diffusion-models": () => import("@/lessons/lesson-14-diffusion-models"),
  "lesson-15-evaluation-safety-alignment-guardrails": () => import("@/lessons/lesson-15-evaluation-safety-alignment-guardrails"),
  "lesson-16-production-llmops": () => import("@/lessons/lesson-16-production-llmops"),
  "lesson-17-vertical-domain-ai": () => import("@/lessons/lesson-17-vertical-domain-ai"),
  "lesson-18-ai-coding-and-automation": () => import("@/lessons/lesson-18-ai-coding-and-automation"),
  "lesson-19-context-engineering-and-ai-security": () => import("@/lessons/lesson-19-context-engineering-and-ai-security"),
  "lesson-20-putting-it-all-together": () => import("@/lessons/lesson-20-putting-it-all-together"),
  "lesson-21-your-ai-engineer-career-roadmap-2026": () => import("@/lessons/lesson-21-your-ai-engineer-career-roadmap-2026"),
} as const;

export function generateStaticParams() {
  return curriculum.map((lesson) => ({ slug: lesson.slug }));
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const importer = lessonModules[slug as keyof typeof lessonModules];
  if (!importer) return notFound();
  const mod = await importer();
  const Component = mod.default;
  return <Component />;
}
