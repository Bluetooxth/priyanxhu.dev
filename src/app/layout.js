import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Priyanshu Chahar",
  description:
    "Hi, I'm Priyanshu Chahar, a developer and a competitive programmer.",
  keywords:
    "Priyanshu Chahar, Portfolio, Developer, Priyanshu Chahar Portfolio, Priyanshu Chahar Developer, Priyannxhuu, Bluetooxth",
  openGraph: {
    title: "Priyanshu Chahar",
    description:
      "Hi, I'm Priyanshu Chahar, a developer and a competitive programmer.",
    type: "website",
    url: "https://priyanshuchahar.vercel.app",
    image: "https://avatars.githubusercontent.com/u/165533860?v=4",
    site_name: "Priyanshu Chahar",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
