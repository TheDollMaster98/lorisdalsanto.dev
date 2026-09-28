import "../globals.css";

// Layout minimo per la pagina di smistamento su "/".
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-paper">{children}</body>
    </html>
  );
}
