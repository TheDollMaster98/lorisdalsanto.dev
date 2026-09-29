import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";

export const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});
