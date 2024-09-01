import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import {NextFont} from "next/dist/compiled/@next/font";
import { Header } from "@/components/shared/header"

const nunito:NextFont = Nunito({

  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],

});

export const metadata: Metadata = {
  title: "Next Sushi Pizza | Home page",
  description: "Order sushi and pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className='min-h-screen'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
