"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ChatMessage = { role: "user" | "assistant"; content: string };

export function MentorChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "I’m your AI mentor. Ask me what to build next." },
  ]);

  const send = async () => {
    if (!input.trim()) return;
    const next = [...messages, { role: "user" as const, content: input }];
    setMessages(next);
    setInput("");
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ mode: "mentor", messages: next }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { role: "assistant", content: data.content ?? "Let’s iterate on that." }]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[360px] space-y-3 rounded-xl border bg-background p-4 shadow-xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold">AI Mentor</p>
            <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
          </div>
          <div className="max-h-72 space-y-2 overflow-auto rounded border p-2 text-sm">
            {messages.map((m, i) => (
              <p key={i}><strong>{m.role}:</strong> {m.content}</p>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className="flex-1 rounded border bg-background px-3 py-2"
              placeholder="Ask for project ideas, feedback, or interview prep..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <Button onClick={send}>Send</Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setOpen(true)}>Open AI Mentor</Button>
      )}
    </div>
  );
}
