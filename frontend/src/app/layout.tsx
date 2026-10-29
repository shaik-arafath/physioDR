import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhysioDR - Professional Physiotherapy Clinic",
  description: "Expert physiotherapy services for pain relief, rehabilitation, and wellness. Book your appointment today.",
  keywords: "physiotherapy, physical therapy, back pain, neck pain, knee pain, sports injury, rehabilitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
