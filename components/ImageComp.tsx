"use client";

import { ImageContext } from "@/context/ImageContext";
import { Image } from "@imagekit/next";
import { useContext } from "react";

export default function ImageComp({ id }: { id: string }) {
  const { imageMap } = useContext(ImageContext)!;
  const image = imageMap?.[id];
  if (!image) return null;
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* <Image
          src={id}
          alt="Memory"
          width={1200}
          height={800}
          className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
          quality={95}
        /> */}

      <Image
        src={image.url}
        width={image?.width || 1200}
        height={image?.height || 800}
        alt={`${image?.name?.split(".")?.[0] || "Image"}`}
        className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
        // quality={95}
      />
    </div>
  );
}
