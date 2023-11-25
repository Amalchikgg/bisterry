import Header from "@/components/Header";
import "./globals.css";

import CustomFont from "next/font/local";
import Footer from "@/components/Footer";

export const gilroy = CustomFont({
  src: [
    { path: "../public/fonts/Gilroy-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Gilroy-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Gilroy-Semibold.ttf", weight: "600" },
    { path: "../public/fonts/Gilroy-Bold.ttf", weight: "700" },
    { path: "../public/fonts/Gilroy-Extrabold.ttf", weight: "800" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={gilroy.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
