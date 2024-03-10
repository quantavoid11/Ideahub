import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ClerkProvider } from '@clerk/nextjs'
import {ConvexClerkProvider} from "@/providers/convex-client-provider";

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

          <html lang="en">
          <body>

          {children}</body>
          </html>

  );
}
