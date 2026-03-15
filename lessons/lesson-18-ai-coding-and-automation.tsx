import { LessonLayout } from "@/components/lesson-layout";
import { CodePlayground } from "@/components/code-playground";
import { MermaidDiagram } from "@/components/mermaid-diagram";
import { GenerativeUIDemo } from "@/components/generative-ui-demo";
import { Tabs } from "@/components/ui/tabs";
import { InterviewSimulator } from "@/components/interview-simulator";

export default function Lesson18() {
  return (
    <LessonLayout
      slug="lesson-18-ai-coding-and-automation"
      title="AI Coding and Automation"
      summary="shipping faster with coding agents and CI hooks"
      buildThisWeek="Ship a mini-project for ai coding and automation with measurable metrics, a short demo video, and a repository README that explains design trade-offs."
    >
      <p className="text-lg leading-8 text-muted-foreground">You are not here to memorize definitions of ai coding and automation; you are here to build judgment. In 2026, teams hire for people who can move from fuzzy requirement to shipped workflow, and this lesson is engineered to train that habit.</p>
      <p className="text-lg leading-8 text-muted-foreground">When ai coding and automation feels abstract, anchor it in one user moment: a customer asks a question, your system reasons with context, and a measurable business action follows. If you can map concept-to-impact, you are already thinking like an AI Engineer.</p>
      <p className="text-lg leading-8 text-muted-foreground">The fastest growth loop is simple: predict, implement, observe, and revise. You will make small bets in code, inspect model behavior, and then tighten prompts, retrieval, schema constraints, and UI affordances based on evidence.</p>
      <p className="text-lg leading-8 text-muted-foreground">A practical engineer tracks trade-offs explicitly. Better quality can raise latency, lower cost can reduce robustness, and more autonomy can introduce risk. Strong portfolios show where you made those trade-offs and why.</p>
      <p className="text-lg leading-8 text-muted-foreground">Treat every prototype like a product seed. Add logs, define expected behavior, list failure modes, and include one guardrail even in tiny demos. This discipline compounds and makes interviews dramatically easier.</p>
      <p className="text-lg leading-8 text-muted-foreground">For ai coding and automation, explain the concept in plain language to a non-technical teammate, then restate it as architecture decisions. That translation skill is one of the strongest seniority signals in AI teams right now.</p>
      <p className="text-lg leading-8 text-muted-foreground">You should expect imperfect outputs. The goal is not magical one-shot prompts; the goal is controllable systems. Build interfaces where users can inspect context, retry strategically, and recover from uncertainty.</p>
      <p className="text-lg leading-8 text-muted-foreground">Any lesson can become portfolio material by adding measurable outcomes: tokens saved, latency reduced, answer accuracy improved, or time-to-resolution decreased. Recruiters remember proof more than buzzwords.</p>
      <p className="text-lg leading-8 text-muted-foreground">As you practice, keep a running changelog of what failed and what you changed. This creates excellent STAR stories for interviews and demonstrates mature engineering process, not just demo polish.</p>
      <p className="text-lg leading-8 text-muted-foreground">Your edge in 2026 is context engineering: deciding what information enters the model, in what format, with what constraints, and with what post-processing. Master that and you can ship in almost any domain.</p>
      <p className="text-lg leading-8 text-muted-foreground">Before you move on, articulate one production risk and one mitigation for today’s topic. This habit trains reliability thinking and prepares you for ownership beyond prototypes.</p>
      <p className="text-lg leading-8 text-muted-foreground">Finally, ship something small this week. Momentum beats perfection, and repeated small wins are exactly how beginners become employable AI Engineers.</p>
      <Tabs
        tabs={[
          {
            label: "Think",
            content: "Describe the user journey and the exact model behavior you want before writing code.",
          },
          {
            label: "Build",
            content: "Implement the smallest useful slice with transparent prompts, context, and output format.",
          },
          {
            label: "Prove",
            content: "Capture one metric and one failure case so your portfolio shows engineering judgment.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`graph LR
A[User Need]-->B[Context Design]
B-->C[Model Reasoning]
C-->D[Tool/Action]
D-->E[Feedback + Metrics]`}
      />
      <CodePlayground
        title="AI Coding and Automation sandbox"
        files={{
          "/index.ts": `type Result = { quality: number; latencyMs: number; costUsd: number };

const evaluate = (result: Result) => {
  const score = result.quality * 0.6 - result.latencyMs * 0.0005 - result.costUsd * 2;
  return Number(score.toFixed(3));
};

console.log("lesson-18-ai-coding-and-automation", evaluate({ quality: 0.9, latencyMs: 800, costUsd: 0.02 }));`,
        }}
      />
      <GenerativeUIDemo
        lessonSlug="lesson-18-ai-coding-and-automation"
        promptSuggestions={[
          "Coach me like a hiring manager and test my understanding.",
          "Give me a production failure scenario and how to mitigate it.",
          "Turn this lesson into a portfolio-ready mini project brief.",
          "Ask me three interview questions and grade my answers.",
        ]}
      />
      <InterviewSimulator />
    </LessonLayout>
  );
}
