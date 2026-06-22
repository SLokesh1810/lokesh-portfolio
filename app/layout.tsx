import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lokesh-portfolio.vercel.app"),
  title: "Lokesh S | Portfolio",
  description:
    "Portfolio of Lokesh S, an ML and backend engineer building scalable AI systems, data pipelines, and production APIs.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  keywords: [
    "Lokesh S",
    "ML Engineer",
    "Backend Engineer",
    "Python",
    "Flask",
    "Data Engineering",
    "Portfolio",
  ],
  openGraph: {
    title: "Lokesh S | Portfolio",
    description:
      "Explore projects in data engineering, AI resume analysis, and production backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
