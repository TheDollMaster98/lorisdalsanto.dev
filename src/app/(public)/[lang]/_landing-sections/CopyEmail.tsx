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
  // Numero dell'ultima copia riuscita: ogni clic riparte con 2 secondi pieni.
  const [copies, setCopies] = useState(0);
  const [copied, setCopied] = useState(false);

  // Solo il ritorno all'etichetta normale passa dall'effect: ogni nuova copia lo riarma.
  useEffect(() => {
    if (!copies) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copies]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Appunti non disponibili (permesso negato, browser datato): copia classica.
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.append(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      if (!ok) return;
    }
    setCopied(true);
    setCopies((n) => n + 1);
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
