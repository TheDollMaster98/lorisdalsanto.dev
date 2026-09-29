"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("it-IT", {
  timeZone: "Europe/Rome",
  hour: "2-digit",
  minute: "2-digit",
});

// Ora di Milano, aggiornata ogni pochi secondi. Nel build statico non c'è un'ora
// sensata da scrivere: lato server resta vuota e compare al primo render nel browser.
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 5000);
  return () => clearInterval(id);
}

export function LocalTime({ label }: { label: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => "",
  );

  return (
    <span>
      {label} <time className="tabular-nums">{time}</time>
    </span>
  );
}
