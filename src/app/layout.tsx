import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ConvexClerkProvider} from "@/providers/convex-client-provider";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Toaster } from "sonner";
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ideahub | Convert Ideas To Reality",
  description: "Title of Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


      <ConvexClerkProvider>
        
          <html lang="en">
          <body>
          <Toaster/>
          {children}
          </body>
          </html>
      </ConvexClerkProvider>




  );
}
