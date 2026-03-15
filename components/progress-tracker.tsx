"use client";

import { useEffect, useState } from "react";
import { loadProgress } from "@/lib/progress";

export function ProgressTracker() {
  const [done, setDone] = useState(0);
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    const progress = loadProgress();
    setDone(progress.completedLessons.length);
    setStreak(progress.streak);
  }, []);
  return (
    <div className="rounded-lg border p-4">
      <p className="font-semibold">Progress Tracker</p>
      <p className="text-sm text-muted-foreground">Completed lessons: {done}/21</p>
      <p className="text-sm text-muted-foreground">Current streak: {streak} days</p>
    </div>
  );
}
