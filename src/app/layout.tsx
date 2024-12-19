import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Kool Kicks",
  description: "Your premier destination for the coolest kicks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
