import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from '../components/theme-provider';
import Maintenance from '../components/maintenance';
import { MAINTENANCE_MODE } from '../lib/site-config';
import { CommandPalette } from '../components/command-palette';

const urbanist = Urbanist({ subsets: ["latin"] });

const siteUrl = "https://jhonorozco.com";
const siteDescription =
  "Desarrollador Full Stack / Frontend freelance especializado en React, Next.js, React Native y Drupal. Creo sitios y aplicaciones web y móviles modernas, rápidas y a medida para negocios en Colombia y Latinoamérica.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jhon Orozco | Desarrollador Full Stack / Frontend",
    template: "%s | Jhon Orozco",
  },
  description: siteDescription,
  keywords: [
    "desarrollador web freelance",
    "desarrollador full stack",
    "desarrollador frontend",
    "React Native",
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
    title: "Jhon Orozco | Desarrollador Full Stack / Frontend",
    description: siteDescription,
    images: [
      {
        url: "/imagen_perfil_jhonorozco.png",
        width: 1000,
        height: 1000,
        alt: "Jhon Orozco - Full Stack / Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhon Orozco | Desarrollador Full Stack / Frontend",
    description: siteDescription,
    images: ["/imagen_perfil_jhonorozco.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jhon Dayron Orozco",
  alternateName: "Jhon Orozco",
  url: siteUrl,
  image: `${siteUrl}/imagen_perfil_jhonorozco.png`,
  jobTitle: "Full Stack / Frontend Developer",
  description: siteDescription,
  email: "mailto:jhondao.desarrollo@hotmail.com",
  sameAs: [
    "https://www.linkedin.com/in/jhondao-orozco/",
    "https://github.com/jhondao",
  ],
  knowsAbout: ["React", "Next.js", "React Native", "TypeScript", "Drupal", "Tailwind CSS", "UI/UX Design"],
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
          {MAINTENANCE_MODE ? <Maintenance /> : children}
          <CommandPalette />
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

