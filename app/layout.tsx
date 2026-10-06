import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsha — Software Product Engineer",
  description: "Portfolio of Harsha — developer, builder and Software Product Engineering student.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}