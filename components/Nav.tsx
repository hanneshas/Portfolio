"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const swedenTime = now.toLocaleTimeString("en-US", {
        timeZone: "Europe/Stockholm",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(swedenTime.toLowerCase());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
      <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)]">
        <span className="text-sm text-[var(--color-text)]">
          Sweden{time && ` ${time}`}
        </span>
        <a
          href="mailto:hannes.has@gmail.com"
          className="text-sm text-[var(--color-text)] hover:opacity-60 transition-opacity"
        >
          hannes.has@gmail.com
        </a>
      </div>
    </nav>
  );
}
