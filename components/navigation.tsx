"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { setTheme } = useTheme();
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold">genai-from-zero</Link>
        <div className="flex gap-2">
          <Link href="/curriculum"><Button variant="ghost">Curriculum</Button></Link>
          <Link href="/portfolio"><Button variant="ghost">Portfolio</Button></Link>
          <Button variant="outline" onClick={() => setTheme("dark")}>Dark</Button>
          <Button variant="outline" onClick={() => setTheme("light")}>Light</Button>
        </div>
      </div>
    </nav>
  );
}
