import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Created by Pritish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header />
        
        {children}

        </Providers>
</body>
    </html>
  );
} 
