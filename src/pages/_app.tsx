import "@/styles/globals.css";
import "@/styles/Banner.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
