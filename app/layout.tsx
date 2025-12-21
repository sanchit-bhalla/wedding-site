import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import {
  APP_DESCRIPTION,
  APP_TITLE,
  CREATOR_TWITTER,
  SITE_URL,
} from "@/constants";
import Providers from "@/components/Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_TITLE}`,
    default: APP_TITLE,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "Anuj and Mehak Wedding",
    "Punjabi wedding",
    "Best couple wedding",
    "Amritsari wedding",
    "Lovely couple wedding",
  ],
  authors: [{ name: CREATOR_TWITTER }],
  creator: CREATOR_TWITTER,
  publisher: CREATOR_TWITTER,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${APP_TITLE} ,
    description: ${APP_DESCRIPTION}`,
    url: SITE_URL,
    siteName: APP_TITLE,
    images: [
      {
        url: `${SITE_URL}/images/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Anuj and Mehak pic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_TITLE}`,
    description: APP_DESCRIPTION,
    images: [`${SITE_URL}/images/hero.jpg`],
    creator: CREATOR_TWITTER,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        <Providers>
          <div id="modal-root-id"></div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
