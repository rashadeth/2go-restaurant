import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2Go Restaurant",
  description: "Abuja's go-to for fresh, bold Nigerian meals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
