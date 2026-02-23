import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valliams Technologies | AI-Powered Product Engineering for High-Growth SaaS",
  description:
    "Build and scale AI-powered SaaS products with dedicated offshore teams. MERN stack, OpenAI integrations, and agile delivery for seed/Series A startups.",
  keywords: [
    "AI SaaS development",
    "MERN stack",
    "offshore product teams",
    "SaaS engineering",
    "OpenAI integration",
    "product engineering",
  ],
  openGraph: {
    title: "Valliams Technologies | AI-Powered Product Engineering",
    description: "Dedicated offshore AI and MERN teams for high-growth SaaS startups.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className={`min-h-screen bg-neutral-50 text-neutral-900 ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
