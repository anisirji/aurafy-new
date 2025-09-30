import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/toast-provider";

export const metadata: Metadata = {
  title: "Portfolio Website Builder",
  description:
    "Create your professional portfolio in minutes with our easy-to-use builder. Select a style, choose colors, add your details, and you're ready to go!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ToastProvider> {children}</ToastProvider>
      </body>
    </html>
  );
}
