"use client";

import { useEffect, useState } from "react";
import { curriculum } from "@/lib/curriculum";
import { loadProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";

export function PortfolioBuilder() {
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    const progress = loadProgress();
    setItems(curriculum.filter((l) => progress.completedLessons.includes(l.slug)).map((l) => l.title));
  }, []);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Portfolio Builder</h2>
      <ul className="list-disc pl-6 text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul>
      <Button onClick={() => window.print()}>Generate certificate</Button>
    </section>
  );
}
