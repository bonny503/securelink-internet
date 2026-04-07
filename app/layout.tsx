import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SecureLink Kenya | CCTV & Apartment WiFi',
  description: 'Expert CCTV and WiFi in Nairobi, Kiambu, and Mombasa. We accept Pi Network, USDT, and RUSD.',
  verification: {
    // UPDATED WITH YOUR NEW CODE:
    google: '-wF_69zMEkXBVTYQGG6-D0xhUFsPs2I-cFSBIr99Kr0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
