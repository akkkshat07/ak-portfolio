import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800",],
});


export const metadata = {
  title: "ak's Portfolio 😉",
  description: "Developed by Akshat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      > 
      <Header />

      <StairTransition /> 

      <PageTransition>

      {children}
        
      </PageTransition>


        
      </body>
    </html>
  );
}
