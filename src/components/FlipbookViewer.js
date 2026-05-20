'use client';

import { useState, useEffect, useRef, forwardRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';

// Configure PDF.js worker via CDN — avoids Next.js Webpack bundling issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// 6x9 inch → aspect ratio 2:3
const ASPECT_W = 6;
const ASPECT_H = 9;

// ForwardRef wrappers required by react-pageflip
const BookPage = forwardRef(({ children, isHard }, ref) => (
  <div
    ref={ref}
    data-density={isHard ? 'hard' : 'soft'}
    style={{ backgroundColor: '#fff', overflow: 'hidden' }}
  >
    {children}
  </div>
));
BookPage.displayName = 'BookPage';

export default function FlipbookViewer({ fileUrl }) {
  const [numPages, setNumPages]   = useState(null);
  const [pageWidth, setPageWidth] = useState(0);
  const [isClient, setIsClient]   = useState(false);
  const containerRef = useRef(null);

  useEffect(() => { setIsClient(true); }, []);

  // Measure container and derive the best single-page width
  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const containerW = containerRef.current.clientWidth;
    // The flipbook shows 2 pages side-by-side, leave 64px for outer padding
    const availableW = Math.floor((containerW - 64) / 2);
    // Cap so it doesn't get huge on wide monitors
    const capped = Math.min(availableW, 520);
    setPageWidth(capped);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [isClient, measure]);

  const pageHeight = pageWidth > 0 ? Math.round(pageWidth * (ASPECT_H / ASPECT_W)) : 0;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!isClient) return null;

  return (
    <div className="w-full relative overflow-hidden rounded-2xl border border-white/5 shadow-2xl"
         style={{ background: 'linear-gradient(135deg, #0a1a10 0%, #0d1f14 50%, #0a1a10 100%)' }}>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20"
             style={{ background: 'radial-gradient(ellipse, #c8a96e 0%, transparent 70%)' }} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-14 pb-8 px-6">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-3 opacity-70">
          Complimentary Sample
        </p>
        <h3 className="font-headline text-3xl md:text-4xl text-on-surface mb-3 tracking-tight">
          Read Before You Buy
        </h3>
        <p className="font-body text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
          Flip through the opening chapter. Click or drag the page corners to turn.
        </p>
      </div>

      {/* Flipbook area */}
      <div ref={containerRef} className="relative z-10 w-full flex justify-center items-center pb-12 px-4">
        {pageWidth > 0 && (
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center py-40 text-primary gap-4">
                <svg className="animate-spin w-10 h-10" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                <span className="font-label text-xs uppercase tracking-widest opacity-60">Loading Sample…</span>
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center py-40 text-red-400 gap-3">
                <span className="text-4xl">⚠</span>
                <p className="font-label text-xs uppercase tracking-widest">Failed to load sample PDF</p>
              </div>
            }
          >
            {numPages && pageHeight > 0 && (
              <div style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}>
                <HTMLFlipBook
                  width={pageWidth}
                  height={pageHeight}
                  size="fixed"
                  minWidth={pageWidth}
                  maxWidth={pageWidth}
                  minHeight={pageHeight}
                  maxHeight={pageHeight}
                  maxShadowOpacity={0.4}
                  showCover={true}
                  mobileScrollSupport={true}
                  flippingTime={700}
                  style={{ margin: '0 auto' }}
                >
                  {/* Front cover — hard page */}
                  <BookPage isHard>
                    <Page
                      pageNumber={1}
                      width={pageWidth}
                      height={pageHeight}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </BookPage>

                  {/* Interior pages */}
                  {Array.from({ length: Math.max(0, numPages - 2) }, (_, i) => (
                    <BookPage key={i + 2}>
                      <Page
                        pageNumber={i + 2}
                        width={pageWidth}
                        height={pageHeight}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </BookPage>
                  ))}

                  {/* Back cover — hard page */}
                  <BookPage isHard>
                    <Page
                      pageNumber={numPages > 1 ? numPages : 1}
                      width={pageWidth}
                      height={pageHeight}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </BookPage>
                </HTMLFlipBook>
              </div>
            )}
          </Document>
        )}
      </div>

      {/* Footer hint */}
      <div className="relative z-10 text-center pb-10">
        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-40">
          ← Drag corners to flip pages →
        </p>
      </div>
    </div>
  );
}
