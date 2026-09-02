import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 antialiased selection:bg-red-600 selection:text-white transition-colors duration-300 font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-screen flex-col justify-between">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}