import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  caption?: string;
}

const ImageLightbox = ({ 
  src, 
  alt, 
  className, 
  imageClassName,
  aspectRatio,
  caption,
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
      <DialogContent className="w-[80vw] h-[80vh] max-w-none p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
        <VisuallyHidden>
          <DialogTitle>{alt}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <img 
            src={src} 
            alt={alt} 
            className="max-w-[80vw] max-h-[80vh] object-contain rounded-md shadow-2xl"
          />
          {caption && (
            <p className="self-end mt-2 mr-1 text-[11px] text-muted-foreground/70 tracking-wide">
              {caption}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
