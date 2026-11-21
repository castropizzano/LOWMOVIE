import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { getPdfPagination } from "@/lib/pdf-pagination";

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

interface PdfPageViewerProps {
  src: string;
  title: string;
  initialPage?: number;
}

const PdfPageViewer = ({ src, title, initialPage = 1 }: PdfPageViewerProps) => {
  const { t } = useTranslation();
  const [numPages, setNumPages] = useState<number>(0);
  const [failed, setFailed] = useState(false);
  const [pageNumber, setPageNumber] = useState(initialPage);
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pagination = getPdfPagination(pageNumber, numPages);

  useEffect(() => {
    setNumPages(0);
    setPageNumber(initialPage);
    setFailed(false);
  }, [src, initialPage]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    const intersection = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setVisible(true); intersection.disconnect(); }
    }, { rootMargin: "200px" });
    intersection.observe(el);
    return () => { observer.disconnect(); intersection.disconnect(); };
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(p => Math.min(Math.max(1, p), numPages));
  }, []);

  const goToPrev = () => { if (pagination.canPrevious) setPageNumber(p => p - 1); };
  const goToNext = () => { if (pagination.canNext) setPageNumber(p => p + 1); };
  const zoomIn = () => setScale((s) => Math.min(2, +(s + 0.2).toFixed(1)));
  const zoomOut = () => setScale((s) => Math.max(0.5, +(s - 0.2).toFixed(1)));

  return (
    <div className="rounded-lg border border-border/40 bg-card/20">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/30 px-2 md:px-4 py-2 bg-card/40">
        <div className="flex flex-wrap items-center gap-1 min-w-0">
          <Button variant="ghost" size="icon"
            onClick={goToPrev}
            disabled={!pagination.canPrevious}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label={t("pdf.previous")}
          >
            <ChevronLeft className="h-4 w-4 text-foreground/70" />
          </Button>
          <span role="status" aria-live="polite" className="text-xs font-semibold text-muted-foreground min-w-[80px] max-w-[140px] text-center">
            {pagination.ready ? `${pagination.current} / ${numPages}` : t(failed ? "pdf.error" : "pdf.loadingPages")}
          </span>
          <Button variant="ghost" size="icon"
            onClick={goToNext}
            disabled={!pagination.canNext}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label={t("pdf.next")}
          >
            <ChevronRight className="h-4 w-4 text-foreground/70" />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon"
            onClick={zoomOut}
            disabled={!pagination.ready || scale <= 0.5}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label={t("pdf.zoomOut")}
          >
            <ZoomOut className="h-4 w-4 text-foreground/70" />
          </Button>
          <span className="text-xs text-muted-foreground min-w-[40px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <Button variant="ghost" size="icon"
            onClick={zoomIn}
            disabled={!pagination.ready || scale >= 2}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label={t("pdf.zoomIn")}
          >
            <ZoomIn className="h-4 w-4 text-foreground/70" />
          </Button>
        </div>
      </div>

      {/* PDF Page */}
      <div ref={containerRef} className="flex justify-center overflow-auto bg-muted/30 py-6 min-h-[240px] max-h-[75vh]">
        {visible && <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={() => { setFailed(true); setNumPages(0); }}
          loading={
            <div className="flex items-center justify-center h-[400px]">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("pdf.loading", { title })}
              </p>
            </div>
          }
          error={
            <div className="flex flex-col gap-4 items-center justify-center h-[400px] px-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("pdf.error")}
              </p>
              <Button asChild variant="outline"><a href={src} target="_blank" rel="noopener noreferrer">{t("pdf.openExternal", { title })}</a></Button>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth > 0 ? Math.max(100, containerWidth - 32) * scale : undefined}
            className="shadow-lg"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>}
      </div>
    </div>
  );
};

export default PdfPageViewer;
