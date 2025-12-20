import { imageKitEndpoint } from "@/constants";
import { ImageProvider } from "@/context/ImageContext";
import { ImageKitProvider } from "@imagekit/next";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ImageKitProvider urlEndpoint={imageKitEndpoint}>
      <ImageProvider>{children}</ImageProvider>
    </ImageKitProvider>
  );
}
