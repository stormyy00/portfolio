/* eslint-disable new-cap */
import Navigation from "@/components/Navigation";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

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
    <html
      lang="en"
      className={` ${montserrat.variable}`}
    >
      <body>
        <div className="bg-web-black w-full flex items-center justify-center flex-col overflow-hidden">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
