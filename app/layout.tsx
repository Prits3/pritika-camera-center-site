import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pritikacameracenter.com"),
  title: {
    default: "Pritika Camera Center | Cameras and Studio Gear in Kathmandu",
    template: "%s | Pritika Camera Center",
  },
  description:
    "Buy professional cameras, lenses, studio gear, and accessories at Pritika Camera Center in Newroad, Kathmandu.",
  keywords: [
    "camera shop Kathmandu",
    "camera store Nepal",
    "lenses Nepal",
    "studio lights Kathmandu",
    "Pritika Camera Center",
  ],
  openGraph: {
    title: "Pritika Camera Center",
    description:
      "Professional photo and video equipment in Kathmandu, Nepal.",
    url: "https://pritikacameracenter.com",
    siteName: "Pritika Camera Center",
    locale: "en_US",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
