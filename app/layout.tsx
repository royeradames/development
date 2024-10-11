import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import StoryblokProvider from "@/storyblok/StoryblokProvider";
import { apiPlugin, storyblokInit, StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/utils/fetchStory";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerStory, footerStory] = await Promise.all([
    fetchStory("header"),
    fetchStory("footer"),
  ]);
  return (
    <html lang="en" data-theme="forest">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoryblokProvider>
          <StoryblokStory story={headerStory} bridgeOptions={{}} />
          {children}
          <StoryblokStory story={footerStory} bridgeOptions={{}} />
        </StoryblokProvider>
      </body>
    </html>
  );
}
