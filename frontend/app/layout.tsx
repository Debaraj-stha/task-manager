import type { Metadata } from "next";
import { Geist, Geist_Mono ,Inter,Montserrat} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { cookies } from "next/headers";
import Footer from "@/components/layout/Footer";
import { useAppSelector } from "@/redux/store";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // specify font weights you need
  variable: "--font-inter", // optional CSS variable
});

const montserrat=Montserrat({
  variable:"--font-montserrat",
  subsets:["latin"],
  weight:["400","500","600","700"]
})


export const metadata: Metadata = {
  title: {
    default: "Task manager app",
    template: "%s | Task manager app "
  },
  description: `A full-stack, real-time task management system built with TypeScript, React, Node.js, PostgreSQL, Socket.IO, and Firebase Authentication. 
  This project allows users to create, update, and collaborate on tasks in real-time`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const cookieStore = cookies();
  const token = (await cookieStore).get("token"); // your cookie name

  const isLoggedIn = !!token;  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} antialiased`}>
        
        {/* Only show Header if NOT logged in */}
        {!isLoggedIn && <Header />}

        {children}
       <Toaster />
        <Footer/>
        
        
      </body>
    </html>
  );
}
