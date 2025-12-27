import { Event } from "../types";

export const imageKitEndpoint =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "";
export const IMAGEKIT_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "";
export const APP_TITLE =
  process.env.NEXT_PUBLIC_APP_TITLE || "Anuj & Mehak - Wedding Memories";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Lovely punjabi couple Anuj & Mehak wedding memories.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const CREATOR_TWITTER =
  process.env.NEXT_PUBLIC_CREATOR_TWITTER ?? "@sanchitbhalla91";

export const videoIdMap: Record<string, string> = {
  // "bangles-ceremony": "FzhGJgBT7mo",
  "pre-wedding-shoot": "cfdNyHt04RE",
  mehandi: "klcXIZN8xrE?si=hDFGGdZH2VtNL4Xo",
  "sagan-and-reception": "Gc6SG39v9XQ",
  "haldi-and-saint": "FzhGJgBT7mo",
  wedding: "FkCnSZPWldI",
};

export const events: Event[] = [
  {
    slug: "bangles-ceremony",
    name: "Bangles Ceremony",
    venue: "Hotel Shiraz Castle",
    date: "09 Nov 2025, 12:00 PM onwards",
    // image: "/images/bangles-ceremony-invite.jpg",
    image: "/images/bangles-ceremony.jpg",
    bgcolor: "#fce7e7",
  },
  {
    slug: "pre-wedding-shoot",
    name: "Pre Wedding Shoot",
    venue: "Rainbow resort, Amritsar",
    date: "23 Nov 2025",
    image: "/images/pre-wedding.jpg",
    bgcolor: "#fce7e7",
  },
  {
    slug: "mehandi",
    name: "Mehandi",
    venue: "Home",
    date: "02 Dec 2025",
    image: "/images/mehandi.jpg",
    bgcolor: "#fce7e7",
  },
  {
    slug: "sagan-and-reception",
    name: "Shagun and Reception",
    venue: "Best Western, Ranjit Avenue, Amritsar",
    date: "03 Dec 2025",
    image: "/images/hero3.jpg",
    bgcolor: "#fce7e7",
  },
  {
    slug: "haldi-and-saint",
    name: "Haldi and Saint",
    venue: "Home",
    date: "04 Dec 2025, 12:00 PM onwards",
    image: "/images/haldi.jpg",
    bgcolor: "#fce7e7",
  },
  {
    slug: "wedding",
    name: "Wedding",
    venue: "B.R. Resort, Wagha Border Road, Amritsar",
    date: "04 Dec 2025, 08:00 PM onwards",
    image: "/images/wedding.jpg",
    bgcolor: "#fce7e7",
  },
];
