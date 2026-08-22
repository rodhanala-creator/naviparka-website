import type { Metadata } from "next";
import "./globals.css";
import {Header,Footer} from "@/components/site";
import {CookieConsent} from "@/components/interactive";

export const metadata:Metadata={
  title:{default:"NaviParka — AI Parking Assistant for UK Drivers",template:"%s | NaviParka"},
  description:"NaviParka helps UK drivers understand parking signs, road markings and restrictions using AI-assisted parking guidance.",
  applicationName:"NaviParka",
  icons:{icon:"/icon.png",apple:"/icon.png"}
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
    </head>
    <body><Header/><main>{children}</main><Footer/><CookieConsent/></body>
  </html>
}
