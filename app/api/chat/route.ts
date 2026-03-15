import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages, lessonSlug, mode }: { messages: UIMessage[]; lessonSlug?: string; mode?: string } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({
      id: crypto.randomUUID(),
      role: "assistant",
      content: `Mock mentor response for ${lessonSlug || mode || "general"}: connect concept to a shipped project this week.`,
    }), { headers: { "content-type": "application/json" } });
  }

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    system: `You are a practical AI Engineer mentor. Lesson context: ${lessonSlug ?? "none"}. Mode: ${mode ?? "chat"}.`,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
