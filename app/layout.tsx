import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProjectA",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    
    <SessionProvider session={session}>
      
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader
            color="#6213D2"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #6213D2,0 0 5px #6213D2" />
         
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SpeedInsights />
            <Toaster />
            <PracticeModal/>
            <HeartsModal/>
            <ExitModal/>
            <HeartsModal/>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
