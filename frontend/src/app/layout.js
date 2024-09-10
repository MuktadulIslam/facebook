import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook",
  description: "",
  icons: [
    // './favicon.ico'
    '/imgs/icon.png'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-dvh`}>
        {children}
      </body>
    </html>
  );
}
