import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { Navigation } from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS Boilerplate - Modern Full-Stack Template",
  description: "A production-ready Next.js boilerplate with TypeScript, Tailwind CSS, and modern features",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Boilerplate"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "NextJS Boilerplate - Modern Full-Stack Template",
    description: "A production-ready Next.js boilerplate with TypeScript, Tailwind CSS, and modern features",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
