import Header from "@/app/Header";
import "./globals.css";
import type { Metadata } from "next";
import { HEADER_HEIGHT } from "./constants";

export const metadata: Metadata = {
  title: "Resume",
  description: "This is Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="grid place-items-center">
        <div className="max-w-3xl w-full">
          <Header />
          <div className="pt-1 px-1">
            <div className={`${HEADER_HEIGHT}`}></div>
          </div>
          <section className="p-1">{children}</section>
        </div>
      </body>
    </html>
  );
}
