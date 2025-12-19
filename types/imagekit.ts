export interface ImageKitFile {
  fileId: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  filePath: string;
  fileType: "image" | "non-image";
  height?: number;
  width?: number;
  size: number;
  // ... add other fields if you need them
}
