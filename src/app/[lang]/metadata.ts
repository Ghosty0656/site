import type { Metadata } from "next";

const SITE_URL = "https://hytalemodding.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: SITE_URL,
    languages: {
      en: `${SITE_URL}/en`,
      fr: `${SITE_URL}/fr`,
      de: `${SITE_URL}/de`,
    },
  },

  openGraph: {
    type: "website",
    siteName: "Hytale Modding",
    url: SITE_URL,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hytale Modding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};
