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

export const metadata = {
  title: "LPKS — PT. Logika Programmer Kode Solusi",
  description: "Teknologi yang Solusi. Membangun Masa Digital yang Lebih Cerdas.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    title: "LPKS",
    description: "Teknologi yang Solusi",
    images: ["/lpks/logo.png"],
  },
  mobileAlternate: {
    title: "LPKS - PT. Logika Programmer Kode Solusi",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
