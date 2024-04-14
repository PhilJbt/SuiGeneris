import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sui Generis",
  description: "Condensé des erreurs les plus fréquentes en matière de règles et de conventions de la langue française.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
