"use client";
import { ImageKitFile } from "@/types/imagekit";
import { createContext, useState } from "react";

interface ImageContextProps {
  imageMap: Record<string, ImageKitFile>;
  addImageToMap: (media: ImageKitFile) => void;
}

export const ImageContext = createContext<ImageContextProps | null>(null);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageMap, setImageMap] = useState<Record<string, ImageKitFile>>({});

  const addImageToMap = (media: ImageKitFile) => {
    try {
      if (!media || !media?.fileId) return;
      const newMap = { ...imageMap };
      newMap[media.fileId] = media;
      setImageMap(newMap);
    } catch (err) {
      console.error("Error adding image to map:", err);
    }
  };
  return (
    <ImageContext.Provider value={{ imageMap, addImageToMap }}>
      {children}
    </ImageContext.Provider>
  );
};
