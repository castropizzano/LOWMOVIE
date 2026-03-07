import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfPageViewerProps {
  src: string;
  title: string;
}

const PdfPageViewer = ({ src, title }: PdfPageViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const goToPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goToNext = () => setPageNumber((p) => Math.min(numPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2, +(s + 0.2).toFixed(1)));
  const zoomOut = () => setScale((s) => Math.max(0.5, +(s - 0.2).toFixed(1)));

  return (
    <div className="rounded-lg border border-border/40 bg-card/20 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-border/30 px-4 py-2 bg-card/40">
        <div className="flex items-center gap-1">
          <button
            onClick={goToPrev}
            disabled={pageNumber <= 1}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4 text-foreground/70" />
          </button>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground min-w-[80px] text-center">
            {pageNumber} / {numPages}
          </span>
          <button
            onClick={goToNext}
            disabled={pageNumber >= numPages}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Próxima página"
          >
            <ChevronRight className="h-4 w-4 text-foreground/70" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Diminuir zoom"
          >
            <ZoomOut className="h-4 w-4 text-foreground/70" />
          </button>
          <span className="text-xs text-muted-foreground min-w-[40px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            disabled={scale >= 2}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Aumentar zoom"
          >
            <ZoomIn className="h-4 w-4 text-foreground/70" />
          </button>
        </div>
      </div>

      {/* PDF Page */}
      <div ref={containerRef} className="flex justify-center overflow-auto bg-muted/30 py-6" style={{ maxHeight: "75vh" }}>
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-[400px]">
              <p className="text-xs uppercase tracking-widest text-muted-foreground animate-pulse">
                Carregando {title}…
              </p>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-[400px]">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Erro ao carregar PDF
              </p>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth > 0 ? (containerWidth - 48) * scale : undefined}
            className="shadow-lg"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfPageViewer;
