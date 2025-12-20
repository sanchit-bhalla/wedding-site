import ImageComp from "@/components/ImageComp";
import { ImageKitFile } from "@/types/imagekit";
import { Image } from "@imagekit/next";

interface PhotoPageProps {
  params: Promise<{ id: string }>;
}

async function getImageById(fileId: string): Promise<ImageKitFile | null> {
  const PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;
  const API_URL = `https://api.imagekit.io/v1/files/${fileId}/details`;
  const AUTH_STRING = btoa(`${PRIVATE_KEY}:`); // Base64 encoding for Basic Auth

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        // Use Basic Auth: "Basic " + Base64-encoded(private_key + ":")
        Authorization: `Basic ${AUTH_STRING}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const file = (await response.json()) as ImageKitFile;
    return file;
  } catch (error) {
    console.error("Failed to fetch images from ImageKit:", error);
    return null;
  }
}
const Photo = async ({ params }: PhotoPageProps) => {
  const { id } = await params;
  const file = await getImageById(id);
  if (!file) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl -mt-25">Image not found!</h1>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full flex items-center justify-center shadow-lg">
      <Image
        src={file.url}
        width={file?.width || 1200}
        height={file?.height || 800}
        alt={`${file?.name?.split(".")?.[0] || "File"}`}
        className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
        // quality={95}
      />
    </div>
  );
};

export default Photo;
