"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import { Button } from "@/components/ui/button";

export function CodePlayground({
  title,
  files,
  template = "vanilla-ts",
}: {
  title: string;
  files: Record<string, string>;
  template?: "node" | "react" | "vanilla-ts";
}) {
  const exportCode = () => {
    const content = encodeURIComponent(JSON.stringify(files, null, 2));
    window.open(`https://gist.github.com/new?content=${content}`, "_blank");
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Button onClick={exportCode}>Export to GitHub</Button>
      </div>
      <Sandpack template={template} files={files} />
    </section>
  );
}
