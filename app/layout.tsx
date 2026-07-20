import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from '../components/theme-provider';

const urbanist = Urbanist({ subsets: ["latin"] });

const siteUrl = "https://jhonorozco.com";
const siteDescription =
  "Desarrollador web freelance especializado en React, Next.js y diseño UI/UX. Creo sitios y aplicaciones web modernas, rápidas y a medida para negocios en Colombia y Latinoamérica.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jhon Orozco | Desarrollador Web Frontend",
    template: "%s | Jhon Orozco",
  },
  description: siteDescription,
  keywords: [
    "desarrollador web freelance",
    "desarrollador frontend",
    "Next.js",
    "React",
    "diseño UI/UX",
    "desarrollo web Colombia",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "mMzSsvn3ko0x1qRD00S7GzBIqs3PVJjsi4Gn1f0OpcQ",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Jhon Orozco | Desarrollador Web",
    title: "Jhon Orozco | Desarrollador Web Frontend",
    description: siteDescription,
    images: [
      {
        url: "/imagen-portafolio-jhonorozco.png",
        width: 900,
        height: 900,
        alt: "Jhon Orozco - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhon Orozco | Desarrollador Web Frontend",
    description: siteDescription,
    images: ["/imagen-portafolio-jhonorozco.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jhon Dayron Orozco",
  alternateName: "Jhon Orozco",
  url: siteUrl,
  image: `${siteUrl}/imagen-portafolio-jhonorozco.png`,
  jobTitle: "Frontend Developer",
  description: siteDescription,
  email: "mailto:jhondao.desarrollo@hotmail.com",
  sameAs: [
    "https://www.linkedin.com/in/jhondao-orozco/",
    "https://github.com/jhondao",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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

