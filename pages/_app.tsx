import "../styles/globals.css";
import { Hanken_Grotesk } from "@next/font/google";

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-hanken_grotesk",
});

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${hanken_grotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
