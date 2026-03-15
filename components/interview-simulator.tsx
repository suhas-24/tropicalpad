"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ChatMessage = { id: string; role: "user" | "assistant"; content: string };

export function InterviewSimulator() {
  const [answer, setAnswer] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const send = async (content: string) => {
    const next = [...messages, { id: crypto.randomUUID(), role: "user" as const, content }];
    setMessages(next);
    setIsLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ mode: "interview", messages: next }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: data.content ?? "No response" }]);
    setIsLoading(false);
  };

  return (
    <section className="space-y-3 rounded-lg border p-4">
      <h3 className="font-semibold">Interview Simulator</h3>
      <Button onClick={() => send("Start a mock AI engineer interview.")}>Start interview</Button>
      <div className="space-y-2 text-sm">{messages.map((m) => <p key={m.id}><strong>{m.role}</strong>: {m.content}</p>)}</div>
      {isLoading && <p className="text-sm">Interviewer is typing…</p>}
      <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); if (!answer) return; send(answer); setAnswer(""); }}>
        <input className="flex-1 rounded border bg-background px-3 py-2" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Your answer..." />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}
