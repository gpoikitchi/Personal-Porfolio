import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Messipsa Boussaid — Réseaux · Systèmes · Cloud · Cybersécurité",
  description:
    "Portfolio de Messipsa Boussaid — Étudiant en Master Informatique à l'UGA, cherche une alternance 24 mois à partir de septembre 2026 en infrastructure, réseaux ou cybersécurité (Grenoble).",
  keywords: ["alternance", "réseaux", "cybersécurité", "cloud", "Grenoble", "ESGI", "UGA"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
