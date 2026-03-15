"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: "default" });
    mermaid.render(`m-${Math.random().toString(36).slice(2)}`, chart).then(({ svg }) => {
      if (ref.current) ref.current.innerHTML = svg;
    });
  }, [chart]);

  return <div className="rounded-lg border p-4" ref={ref} />;
}
