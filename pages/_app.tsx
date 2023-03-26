import Footer from "@/src/components/Layout/Footer";
import Header from "@/src/components/Layout/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="items-center  h-screen w-screen">
        <Header />
        <div
          className="max-w-6xl w-full flex flex-col p-6 text"
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
