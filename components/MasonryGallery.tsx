"use client";
import { Image } from "@imagekit/next";
import { ImageKitFile } from "../types/imagekit";
import { useContext } from "react";
import { ImageContext } from "@/context/ImageContext";
import { useRouter } from "next/navigation";

interface MasonryGalleryProps {
  media: ImageKitFile[];
}

export default function MasonryGallery({ media }: MasonryGalleryProps) {
  const router = useRouter();
  const { addImageToMap } = useContext(ImageContext)!;

  const handleImageClick = (item: ImageKitFile) => {
    if (!item?.fileId) return;
    addImageToMap(item);
    router.push(`/events/photo/${item.fileId}`);
  };
  return (
    <div className="px-4">
      <div className="columns-1 min-[450px]:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {media.map((item, idx) => {
          // Scale down to max width = 300px
          const maxWidth = 300;
          const aspectRatio =
            item.width && item.height ? item.height / item.width : 1.5;
          const scaledWidth = Math.min(item.width || maxWidth, maxWidth);
          const scaledHeight = Math.round(scaledWidth * aspectRatio);
          return (
            <div
              key={idx}
              className="break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] w-full"
            >
              {item.fileType === "image" ? (
                <div
                  className="relative w-full"
                  onClick={() => handleImageClick(item)}
                >
                  <Image
                    // src={item.url}
                    src={item.filePath}
                    alt={`Image ${idx + 1}`}
                    width={scaledWidth}
                    height={scaledHeight}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="relative w-full">
                  <video
                    src={item.url}
                    className="w-full h-auto rounded-lg"
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
