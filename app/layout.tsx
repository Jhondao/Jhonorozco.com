import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../components/theme-provider';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Jhon Orozco Site 💻",
    template: "",
  },
  description: "Portaflio web",
  icons: '',
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
        <meta name="google-site-verification" content="mMzSsvn3ko0x1qRD00S7GzBIqs3PVJjsi4Gn1f0OpcQ" />
      </body>
    </html>
  );
}
