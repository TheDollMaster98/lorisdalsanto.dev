"use client";

import { useEffect, useState } from "react";

// Copia l'indirizzo negli appunti: il link mailto non fa niente sui computer
// senza un programma di posta configurato (frequente in azienda).
export function CopyEmail({
  email,
  label,
  done,
}: {
  email: string;
  label: string;
  done: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Appunti non disponibili: resta il link mailto.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="border-b border-line pb-0.5 text-sm text-ink-muted transition-colors hover:border-ink hover:text-ink"
    >
      <span aria-live="polite">{copied ? done : label}</span>
    </button>
  );
}
