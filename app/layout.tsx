import type { Metadata } from "next";
import { Geist, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Modern Designs Co — Product Design & Web Development",
  description:
    "Boutique design and development studio for startups and growing businesses. We build products people love to use.",
  openGraph: {
    title: "Modern Designs Co",
    description:
      "Boutique design and development studio for startups and growing businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
