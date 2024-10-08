import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import emailjs from "@emailjs/browser";
import conf from "@/conf/conf";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Zahoor Farooq",
  description: "Portfolio Website",
  keywords: ["zahoorfarooq", "zahoor", "farooq"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light text-dark`}>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script>
        <NavBar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
      <Script
        id="email-js-cdn"
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      ></Script>
      <Script id="" type="text/javascript">
        {(function () {
          emailjs.init({
            publicKey: conf.emailjsPublicKey,
          });
        })()}
      </Script>
    </html>
  );
}
