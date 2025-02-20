import { Providers } from "@/components/providers";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Spline_Sans } from "next/font/google";
export const metadata: Metadata = {
  title: "ui-kit",
  description: "personal ui kit",
  icons: [{ rel: "icon", url: "https://github.com/jvxz.png" }],
};

const font = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${font.className}`}>
      <Providers><body>{children}</body></Providers>
    </html>
  );
}
