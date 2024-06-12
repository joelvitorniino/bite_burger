import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import MenuBar from "./component/MenuBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Bite Burger</title>
      </Head>
      <body className={`${inter.className} grid grid-cols-8"`}>
        <MenuBar />
        {children}
      </body>
    </html>
  );
}
