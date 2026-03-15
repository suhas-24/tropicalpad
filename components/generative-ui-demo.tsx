"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ChatMessage = { id: string; role: "user" | "assistant"; content: string };

export function GenerativeUIDemo({ lessonSlug, promptSuggestions }: { lessonSlug: string; promptSuggestions: string[] }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const send = async (content: string) => {
    const next = [...messages, { id: crypto.randomUUID(), role: "user" as const, content }];
    setMessages(next);
    setIsLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ lessonSlug, messages: next }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: data.content ?? "No response" }]);
    setIsLoading(false);
  };

  return (
    <Card className="space-y-4 p-4">
      <h3 className="text-lg font-semibold">Generative UI Mentor Demo</h3>
      <div className="flex flex-wrap gap-2">
        {promptSuggestions.map((prompt) => (
          <Button key={prompt} variant="outline" onClick={() => send(prompt)}>{prompt}</Button>
        ))}
      </div>
      <div className="max-h-72 space-y-2 overflow-auto rounded border p-3 text-sm">
        {messages.map((m) => <p key={m.id}><strong>{m.role}:</strong> {m.content}</p>)}
        {isLoading && <p>Thinking…</p>}
      </div>
      <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); if (!input) return; send(input); setInput(""); }}>
        <input className="flex-1 rounded border px-3 py-2 bg-background" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask the mentor..." />
        <Button type="submit">Send</Button>
      </form>
    </Card>
  );
}
