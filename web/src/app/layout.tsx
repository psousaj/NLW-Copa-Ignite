import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NLW Copa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body style={{backgroundImage: 'url(/assets/images/BG.png)'}} className="bg-[#121214]">{children}</body> */}
      <body className="bg-gray-900 bg-app bg-no-repeat bg-cover max-h-screen">{children}</body>
    </html>
  );
}