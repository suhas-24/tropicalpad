"use client";

import { useState } from "react";

export function Tabs({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        {tabs.map((tab, i) => (
          <button key={tab.label} className="rounded border px-3 py-1 text-sm" onClick={() => setActive(i)}>{tab.label}</button>
        ))}
      </div>
      <div className="rounded border p-3">{tabs[active]?.content}</div>
    </div>
  );
}
