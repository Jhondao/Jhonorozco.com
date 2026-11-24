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
  "Profesional de Ingeniería de Sistemas especializado en integración de sistemas, automatización de procesos y desarrollo de software para empresas. Conecto plataformas, automatizo operaciones y desarrollo soluciones a medida con React, Next.js, APIs y n8n.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jhon Orozco | Integración de Sistemas y Desarrollo de Software",
    template: "%s | Jhon Orozco",
  },
  description: siteDescription,
  keywords: [
    "integración de sistemas",
    "integración ERP y e-commerce",
    "automatización de procesos",
    "desarrollo de APIs",
    "desarrollo de software a medida",
    "integración de plataformas digitales",
    "desarrollo e-commerce",
    "React",
    "Next.js",
    "n8n",
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
    siteName: "Jhon Orozco | Integración y Desarrollo de Software",
    title: "Jhon Orozco | Integración de Sistemas y Desarrollo de Software",
    description: siteDescription,
    images: [
      {
        url: "/imagen_perfil_jhonorozco.png",
        width: 1000,
        height: 1000,
        alt: "Jhon Orozco - Integración de Sistemas y Desarrollo de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhon Orozco | Integración de Sistemas y Desarrollo de Software",
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
  jobTitle: "Integración de Sistemas y Desarrollo de Software",
  description: siteDescription,
  email: "mailto:jhondao.desarrollo@hotmail.com",
  sameAs: [
    "https://www.linkedin.com/in/jhondao-orozco/",
    "https://github.com/jhondao",
  ],
  knowsAbout: ["Integración de Sistemas", "Automatización de Procesos", "APIs REST", "n8n", "React", "Next.js", "TypeScript", "Drupal"],
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

