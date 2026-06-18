import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kirti Rani | B.Tech CSE (AI & ML) Student Portfolio",
  description: "Personal developer portfolio of Kirti Rani, B.Tech CSE (AI & ML) student at CGC Jhanjeri. Showcasing software development, Python automation, machine learning projects, and web development.",
  keywords: [
    "Kirti Rani",
    "Kirti Rani Portfolio",
    "B.Tech CSE",
    "AI & ML Student",
    "CGC Jhanjeri",
    "Machine Learning Developer",
    "Python Developer",
    "Web Developer"
  ],
  authors: [{ name: "Kirti Rani" }],
  creator: "Kirti Rani",
  metadataBase: new URL("https://kirtirani.dev"), // Fallback base URL for metadata
  openGraph: {
    title: "Kirti Rani | B.Tech CSE (AI & ML) Portfolio",
    description: "Discover Kirti Rani's software projects, academic timeline, AI/ML models, and web developer skills.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirti Rani | Portfolio",
    description: "Student Developer working on AI, Machine Learning, Python, and Web Technologies.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
