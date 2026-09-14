import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie searching web app",
  description: "Simple movie searching web application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
