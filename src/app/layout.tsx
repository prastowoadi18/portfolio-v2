import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { METADATA } from "@/constant/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile Prastowo Adi",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || "",
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    title: `${METADATA.openGraph.title}`,
    description: `${METADATA.description}`,
    images: `${METADATA.profile}`,
    url: `${METADATA.openGraph.url}`,
    siteName: `${METADATA.openGraph.siteName}`,
    locale: `${METADATA.openGraph.locale}`,
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
