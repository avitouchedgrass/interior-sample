import type { Metadata, Viewport } from "next";
import { Italiana, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400", "500"],
  variable: "--font-editorial",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAISON ÉLARA — Interior Design Atelier",
  description:
    "Maison Élara is a concept interior design atelier crafting residences, restaurants and retreats wrapped in golden light. A conceptual representation by Avi.",
  keywords: [
    "interior design",
    "atelier",
    "luxury interiors",
    "concept website",
    "Maison Élara",
  ],
  openGraph: {
    title: "MAISON ÉLARA — Interior Design Atelier",
    description:
      "Spaces that breathe in golden light. A concept interior design studio experience.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0b09",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${italiana.variable} ${fraunces.variable} ${manrope.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="bottom-center" richColors closeButton />
      </body>
    </html>
  );
}
