import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from '../components/theme-provider';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jhon Orozco | Developer",
    template: "%s | Jhon Orozco",
  },
  description: "Jhon Orozco Developer",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "mMzSsvn3ko0x1qRD00S7GzBIqs3PVJjsi4Gn1f0OpcQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6XRMGWD958"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6XRMGWD958');
          `}
        </Script>
      </body>
    </html>
  );
}

