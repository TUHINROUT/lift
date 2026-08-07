import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evio Elevator | Luxury Home Elevators",
  description:
    "Elevate your lifestyle with Evio Elevator luxury home elevators. No pit, no machine room, quick installation. 15+ years of excellence, 5000+ happy customers across 25+ countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-text">{children}</body>
    </html>
  );
}
