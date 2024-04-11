/* eslint-disable new-cap */
// import Navigation from "@/components/Navigation";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
// import Sidebar from "@/components/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Stormyy",
  description: "stormyy's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${montserrat.variable}`}>
      <body>
        <div className=" bg-gray-200 w-full h-full flex items-center justify-center flex-col overflow-hidden z-10">
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  );
}
