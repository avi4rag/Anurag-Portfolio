import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Anurag — Full-Stack Developer",
  description:
    "Full-Stack Developer and Software Product Engineering student who designs, ships, and tests real production web apps — from AI-integrated platforms to real-time dashboards.",
  keywords: [
    "Anurag",
    "Full-Stack Developer",
    "Software Product Engineering",
    "React",
    "Next.js",
    "Node.js",
    "Jaipur",
    "India",
  ],
  authors: [{ name: "Anurag" }],
  creator: "Anurag",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Anurag — Full-Stack Developer",
    description:
      "Full-Stack Developer and Software Product Engineering student who designs, ships, and tests real production web apps.",
    siteName: "Anurag Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag — Full-Stack Developer",
    description:
      "Full-Stack Developer and Software Product Engineering student who designs, ships, and tests real production web apps.",
    creator: "@Avi4rag",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "var(--bg-primary)" }}>
        {children}
      </body>
    </html>
  );
}
