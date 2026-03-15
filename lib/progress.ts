const KEY = "genai-progress";

export type ProgressState = {
  completedLessons: string[];
  streak: number;
  lastActiveDate?: string;
};

export const defaultProgress: ProgressState = {
  completedLessons: [],
  streak: 0,
};

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return defaultProgress;
  const raw = localStorage.getItem(KEY);
  if (!raw) return defaultProgress;
  try {
    return JSON.parse(raw) as ProgressState;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: ProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function markLessonComplete(slug: string): ProgressState {
  const progress = loadProgress();
  if (!progress.completedLessons.includes(slug)) {
    progress.completedLessons.push(slug);
  }
  const today = new Date().toISOString().slice(0, 10);
  if (progress.lastActiveDate !== today) {
    progress.streak += 1;
    progress.lastActiveDate = today;
  }
  saveProgress(progress);
  return progress;
}
