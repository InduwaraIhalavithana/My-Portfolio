"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

// The visitor's progress (slides seen, best quiz scores), kept in this browser only. Storage can be
// missing or blocked (private windows, previews), so every read and write is guarded and the page
// still works without it, using an in-memory copy for the current visit.
const SEEN = "study-guide-seen";
const QUIZ = "study-guide-quiz";
const EVENT = "study-guide-progress-change";
const memory: Record<string, string> = {};

function read(key: string): string {
  try {
    return window.localStorage.getItem(key) ?? memory[key] ?? "";
  } catch {
    return memory[key] ?? "";
  }
}

function write(key: string, value: string) {
  memory[key] = value;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Kept in memory only.
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function useStored(key: string) {
  return useSyncExternalStore(subscribe, () => read(key), () => "");
}

/** Topic ids of slides the visitor has opened. */
export function useSeen() {
  const raw = useStored(SEEN);
  const seen = useMemo(() => new Set(raw ? raw.split(",") : []), [raw]);
  const markSeen = useCallback((id: string) => {
    const current = read(SEEN);
    const ids = new Set(current ? current.split(",") : []);
    if (ids.has(id)) return;
    ids.add(id);
    write(SEEN, [...ids].join(","));
  }, []);
  return { seen, markSeen };
}

/** Best knowledge-check score per deck id. */
export function useQuizScores() {
  const raw = useStored(QUIZ);
  const scores = useMemo<Record<string, number>>(() => {
    try {
      return raw ? (JSON.parse(raw) as Record<string, number>) : {};
    } catch {
      return {};
    }
  }, [raw]);
  const saveScore = useCallback((deck: string, score: number) => {
    let all: Record<string, number> = {};
    try {
      all = JSON.parse(read(QUIZ) || "{}") as Record<string, number>;
    } catch {
      all = {};
    }
    if ((all[deck] ?? -1) >= score) return;
    all[deck] = score;
    write(QUIZ, JSON.stringify(all));
  }, []);
  return { scores, saveScore };
}

export function resetProgress() {
  write(SEEN, "");
  write(QUIZ, "{}");
}
