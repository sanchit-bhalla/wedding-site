import MasonryGallery from "@/components/MasonryGallery";
import VideoMemory from "@/components/VideoMemory";
import { ImageKitFile } from "@/types/imagekit";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug}`,
    description: `Memories from the ${slug} event of Anuj & Mehak's wedding.`,
  };
}

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

const eventNames: Record<string, string> = {
  "bangles-ceremony": "Bangles Ceremony",
  "pre-wedding-shoot": "Pre Wedding Shoot",
  mehandi: "Mehandi",
  "sagan-and-reception": "Shagun and Reception",
  haldi: "Haldi",
  wedding: "Wedding",
};

async function getImagesFromFolder(slug: string): Promise<ImageKitFile[]> {
  const PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;
  const FOLDER_PATH = `wedding-album/${slug}`;
  const API_URL = "https://api.imagekit.io/v1/files";
  const AUTH_STRING = btoa(`${PRIVATE_KEY}:`); // Base64 encoding for Basic Auth
  // Construct the full URL with the path parameter
  const url = new URL(API_URL);
  url.searchParams.append("path", FOLDER_PATH);

  // ImageKit's List API is paginated and returns up to 1000 files by default.
  // To get more than 1000, you will need to add the 'skip' parameter
  // and make multiple requests (pagination).
  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        // Use Basic Auth: "Basic " + Base64-encoded(private_key + ":")
        Authorization: `Basic ${AUTH_STRING}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      // Handle HTTP errors (e.g., 401 Unauthorized, 404 Not Found)
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const files = (await response.json()) as ImageKitFile[];
    // console.log(`Found ${files.length} files in the folder:`);

    // The response is an array of file objects.
    // You can iterate over them to get the public URL for each image.
    // const imageUrls = files.map((file) => file.url);
    // console.log(imageUrls);

    return files;
  } catch (error) {
    console.error("Failed to fetch images from ImageKit:", error);
    return [];
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const eventName = eventNames[slug] || slug;

  const files = await getImagesFromFolder(slug);
  // console.log(files[0]);

  return (
    <div className="max-w-7xl mx-auto pb-8 md:pb-12 px-4">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-maroon mb-4">
          {eventName}
        </h1>
        <div className="w-32 h-1 bg-gold mx-auto" />
        <p className="font-body text-lg text-maroon/80 mt-6">
          Beautiful memories from our special day
        </p>
      </div>
      <VideoMemory slug={slug} />
      <MasonryGallery media={files} />
    </div>
  );
}
