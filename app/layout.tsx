import type { Metadata } from "next";
import { Instrument_Sans, Bricolage_Grotesque } from "next/font/google";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "crm360 | The Modern CRM for Growing Sales Teams",
  description:
    "crm360 is the ultimate CRM platform designed to help SMEs and Enterprise organizations close more deals, eliminate data silos, and scale effortlessly.",
  keywords: [
    "CRM",
    "Sales Platform",
    "Customer Relationship Management",
    "Sales Automation",
    "B2B Sales",
    "SaaS CRM",
    "AI CRM",
  ],
  authors: [{ name: "crm360 Team" }],
  creator: "crm360 Inc.",
  publisher: "crm360 Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "crm360 | The Modern CRM for Growing Sales Teams",
    description:
      "Stop running your business on spreadsheets. Move fast, stay organized, and look bigger than you are with automated professional workflows.",
    url: "https://crm360online.com",
    siteName: "crm360",
    images: [
      {
        url: "https://crm360online.com/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "crm360",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "crm360 | The Modern CRM for Growing Sales Teams",
    description:
      "The ultimate CRM platform designed to help SMEs and Enterprise organizations close more deals and scale effortlessly.",
    creator: "@crm360_app",
    images: ["https://crm360online.com/twitter-image.jpg"], // Placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${instrumentSans.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
