import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const urbanist = Urbanist({
  subsets: ["latin"],
  weights: [400, 500, 700],
});

export const metadata = {
  title: "Priyanshu Chahar - Portfolio",
  description: "Priyanshu Chahar's Portfolio",
  keywords:
    "Priyanshu Chahar, Portfolio, Developer, Priyanshu Chahar Portfolio, Priyanshu Chahar Developer, Priyannxhuu, Bluetooxth",
  openGraph: {
    title: "Priyanshu Chahar - Portfolio",
    description: "Priyanshu Chahar's Portfolio",
    type: "website",
    url: "https://priyanshuchahar.vercel.app",
    image: "https://avatars.githubusercontent.com/u/165533860?v=4",
    site_name: "Priyanshu Chahar - Portfolio",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
