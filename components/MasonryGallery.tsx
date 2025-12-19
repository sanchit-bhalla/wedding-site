"use client";
import { useState } from "react";
// import Image from "next/image";
import { Image } from "@imagekit/next";
import Modal from "./Modal";
import { ImageKitFile } from "../types/imagekit";

interface MasonryGalleryProps {
  media: ImageKitFile[];
}

export default function MasonryGallery({ media }: MasonryGalleryProps) {
  const [selected, setSelected] = useState<ImageKitFile | null>(null);
  const imageKitEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "";
  // console.log({ imageKitEndpoint });

  return (
    <div className="px-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {media.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(item)}
            className="break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] w-full"
          >
            {item.fileType === "image" ? (
              <div className="relative w-full">
                <Image
                  urlEndpoint={imageKitEndpoint}
                  // src={item.url}
                  src={item.filePath}
                  alt={`Image ${idx + 1}`}
                  width={item.width || 400}
                  height={item.height || 600}
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
        ))}
      </div>
      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
