import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string; // e.g. "aspect-video", "aspect-square"
}

const ImageLightbox = ({ 
  src, 
  alt, 
  className, 
  imageClassName,
  aspectRatio 
}: ImageLightboxProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={cn(
            "relative overflow-hidden cursor-pointer group rounded-md border border-border/50 bg-muted/30 hover:border-primary/30 transition-all", 
            aspectRatio,
            className
          )}
        >
          <img 
            src={src} 
            alt={alt} 
            className={cn(
              "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500",
              imageClassName
            )}
            loading="lazy"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-transparent border-none shadow-none">
        <VisuallyHidden>
          <DialogTitle>{alt}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
