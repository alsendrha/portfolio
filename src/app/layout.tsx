import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/menu/Menubar";
import Sidebar from "@/components/menu/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Min-young Portfolio",
  description: "Min-young Portfolio",
  icons: {
    icon: "/p_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <div className="w-full flex relative">
          <Menubar />
          <div className="w-full flex border-l">
            {children}
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
