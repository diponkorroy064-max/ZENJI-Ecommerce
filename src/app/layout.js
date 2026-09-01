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
  title: "ZENJI — Anime Streetwear & Cyber Apparel",
  description: "Limited drops. No restocks. Anime-inspired streetwear for gamers and otaku.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}

