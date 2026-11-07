import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Ranyata Physiotherapy & Chiropractor Clinic - Best Pain Management in Nizampet",
  description: "Best physiotherapy and chiropractor clinic in Nizampet, Hyderabad. Expert pain management, rehabilitation, and wellness services. Call +91 97007 19727.",
  keywords: "physiotherapy, chiropractor, pain management, Nizampet, Hyderabad, back pain, neck pain, knee pain, sports injury, rehabilitation",
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
