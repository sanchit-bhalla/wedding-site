"use client";
import { useEffect } from "react";
import Image from "next/image";
import { ImageKitFile } from "../types/imagekit";

interface ModalProps {
  item: ImageKitFile;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in-up"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gold transition-colors duration-200 z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
        aria-label="Close modal"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.fileType === "image" ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={item.url}
              alt="Memory"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              quality={95}
            />
          </div>
        ) : (
          <video
            src={item.url}
            controls
            autoPlay
            className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg"
          />
        )}
      </div>
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
        Press ESC to close
      </p>
    </div>
  );
}
