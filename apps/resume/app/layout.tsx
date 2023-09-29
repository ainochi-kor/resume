import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "This is Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="ko">{children}</html>;
}
