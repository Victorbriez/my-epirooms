import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My-EpiRooms",
  description: "Interface de visualisation des salles à Epitech",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/icons/icon-192x192.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/icons/icon-192x192.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#020817" />
        <meta name="apple-mobile-web-app-status-bar" content="#020817" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={`${geistMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
