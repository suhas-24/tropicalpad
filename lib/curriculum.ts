export type Lesson = {
  slug: string;
  title: string;
  module: string;
  summary: string;
};

export const curriculum: Lesson[] = [
  { slug: "lesson-01-what-is-ai", title: "What Is AI", module: "Foundations", summary: "why AI exploded and how the 2026 market rewards builders" },
  { slug: "lesson-02-machine-learning-basics", title: "Machine Learning Basics", module: "Foundations", summary: "supervised and unsupervised learning you can ship with" },
  { slug: "lesson-03-neural-networks", title: "Neural Networks", module: "Foundations", summary: "layers, weights, and backprop like recipe tuning" },
  { slug: "lesson-04-transformers-the-real-magic", title: "Transformers: The Real Magic", module: "Foundations", summary: "the architecture that unlocked modern GenAI" },
  { slug: "lesson-05-tokens-embeddings-attention", title: "Tokens, Embeddings, Attention", module: "How LLMs Work", summary: "the LEGO blocks of language intelligence" },
  { slug: "lesson-06-large-language-models", title: "Large Language Models", module: "How LLMs Work", summary: "how GPT-style systems are trained and aligned" },
  { slug: "lesson-07-prompt-engineering", title: "Prompt Engineering", module: "Using LLMs", summary: "repeatable patterns for better model outputs" },
  { slug: "lesson-08-rag-retrieval-augmented-generation", title: "RAG: Retrieval-Augmented Generation", module: "Using LLMs", summary: "grounding models with your private data" },
  { slug: "lesson-09-advanced-rag-2026", title: "Advanced RAG 2026", module: "Using LLMs", summary: "agentic and graph-powered retrieval systems" },
  { slug: "lesson-10-fine-tuning-vs-lora", title: "Fine-tuning vs LoRA", module: "Customizing Models", summary: "customization tradeoffs, cost, and quality" },
  { slug: "lesson-11-ai-agents", title: "AI Agents", module: "Agents & Autonomy", summary: "planning loops, tools, memory, and execution" },
  { slug: "lesson-12-mcp-model-context-protocol", title: "MCP: Model Context Protocol", module: "Agents & Autonomy", summary: "standardized tool and context interoperability" },
  { slug: "lesson-13-multimodal-ai", title: "Multimodal AI", module: "Agents & Autonomy", summary: "combining text, vision, and audio in one workflow" },
  { slug: "lesson-14-diffusion-models", title: "Diffusion Models", module: "Generation & Safety", summary: "image and video generation systems in production" },
  { slug: "lesson-15-evaluation-safety-alignment-guardrails", title: "Evaluation, Safety, Alignment", module: "Generation & Safety", summary: "guardrails and red-teaming for safe deployments" },
  { slug: "lesson-16-production-llmops", title: "Production LLMOps", module: "Production & Career", summary: "latency, observability, and cost controls" },
  { slug: "lesson-17-vertical-domain-ai", title: "Vertical Domain AI", module: "Production & Career", summary: "healthcare, legal, and finance product patterns" },
  { slug: "lesson-18-ai-coding-and-automation", title: "AI Coding and Automation", module: "Production & Career", summary: "shipping faster with coding agents and CI hooks" },
  { slug: "lesson-19-context-engineering-and-ai-security", title: "Context Engineering and AI Security", module: "Production & Career", summary: "prompt injection defense and data boundaries" },
  { slug: "lesson-20-putting-it-all-together", title: "Putting It All Together", module: "Production & Career", summary: "capstone architecture with MCP + RAG + multimodal" },
  { slug: "lesson-21-your-ai-engineer-career-roadmap-2026", title: "Your AI Engineer Career Roadmap 2026", module: "Production & Career", summary: "portfolio strategy, interviews, and salary positioning" },
];

export const lessonMap = Object.fromEntries(curriculum.map((lesson) => [lesson.slug, lesson]));