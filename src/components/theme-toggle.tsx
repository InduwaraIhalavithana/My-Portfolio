"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Both icons render; CSS picks one, so there is no hydration flash. */}
      <Sun className="size-5 dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
    </Button>
  );
}
