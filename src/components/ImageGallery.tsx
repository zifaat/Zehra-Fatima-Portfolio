import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  rounded?: boolean;
  aspectRatio?: "1:1" | "4:3" | "16:9" | "auto";
}

const ImageGallery = ({
  images = [
    {
      src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      alt: "Placeholder image",
      caption: "Sample caption",
    },
    {
      src: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&q=80",
      alt: "Placeholder image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      alt: "Placeholder image 3",
    },
  ],
  columns = 3,
  gap = "md",
  rounded = true,
  aspectRatio = "4:3",
}: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  const aspectRatioClasses = {
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-[16/9]",
    auto: "aspect-auto",
  };

  const columnSizeClasses = {
    1: "h-auto",
    2: "h-auto md:h-64",
    3: "h-auto md:h-56",
    4: "h-auto md:h-48",
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length,
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    }
  };

  return (
    <div className="w-full bg-background">
      <div
        className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}
        onKeyDown={handleKeyDown}
      >
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div
                className={`overflow-hidden ${rounded ? "rounded-lg" : ""} cursor-pointer transition-transform hover:scale-[1.02] border border-border`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div
                  className={`${aspectRatioClasses[aspectRatio]} ${columnSizeClasses[columns]}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {image.caption && (
                  <div className="p-2 text-sm text-muted-foreground">
                    {image.caption}
                  </div>
                )}
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
              <div className="relative bg-background rounded-lg overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10 rounded-full bg-background/80 hover:bg-background"
                  onClick={() => setSelectedImageIndex(null)}
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full max-h-[85vh] object-contain"
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {image.caption && (
                  <div className="p-4 text-center">{image.caption}</div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
