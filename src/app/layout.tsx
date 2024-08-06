import type { Metadata } from "next";
import { Andada_Pro, Open_Sans, Archivo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/next-ui";

// Importando Andada Pro
const andadaProFontFamily = Andada_Pro({
  weight: ["400", "500", "800"],
  subsets: ["latin"],
  variable: "--font-family-primary",
});

// Importando Open Sans
const openSansFontFamily = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family-secondary",
});

// Importando Archivo
const archivoFontFamily = Archivo({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family-display",
});

export const metadata: Metadata = {
  title: "Studio Ghibli",
  description: "Página de apresentação para Studio Ghibli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${andadaProFontFamily.variable} ${openSansFontFamily.variable} ${archivoFontFamily.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
