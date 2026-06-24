'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const FlipbookViewer = dynamic(() => import('../../components/FlipbookViewer'), {
  ssr: false,
});

export default function BuyBook() {
  const [format, setFormat] = useState('hardcover');
  
  const formats = {
    hardcover: { name: 'Hardcover Editorial Edition', price: '40.00', url: 'https://shop.ingramspark.com/b/084?params=8z0C8xq2Yl01c2YfYkjhdRw5TUTktMOpGNuN3AygLD1', label: 'Buy Hardcover' },
    paperback: { name: 'Paperback Standard Edition', price: '35.99', url: 'https://shop.ingramspark.com/b/084?params=GMW76Tyyq7pfCn7UjKI4UUGaZVMCgDHaK1lu6Wc5beW', label: 'Buy Paperback' },
    ebook: { name: 'Digital eBook', price: '19.99', url: 'https://a.co/d/0f8fovkw', label: 'Buy eBook' }
  };

  return (
    <main className="pt-32">
      {/* Book Showcase */}
      <section className="max-w-screen-2xl mx-auto px-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Book Cover Visual */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
              <div className="relative z-10 w-[400px] h-[600px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500 rounded-sm overflow-hidden">
                <Image 
                  src="/Front.jpeg"
                  alt="Beyond the Badge official book cover"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex gap-4 mt-8 justify-center relative z-10 w-[400px]">
              <img src="/Front.jpeg" alt="Front Cover" className="w-16 h-auto border border-outline-variant/20 cursor-pointer hover:border-primary transition-colors"/>
              <img src="/spine.jpeg" alt="Angle View" className="w-16 h-auto border border-outline-variant/20 cursor-pointer hover:border-primary transition-colors"/>
              <img src="/back.jpeg" alt="Back Cover" className="w-16 h-auto border border-outline-variant/20 cursor-pointer hover:border-primary transition-colors"/>
            </div>
          </div>
          {/* Book Details Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase">Dossier Access: Phase One</span>
              <h1 className="text-6xl md:text-7xl font-headline font-bold text-on-surface leading-tight tracking-tighter">Beyond the Badge</h1>
              <span className="font-label text-xs uppercase tracking-widest text-primary block mt-4">Official edition of Beyond the Badge</span>
            </div>
            <div className="border-l-2 border-primary pl-6 py-2 mt-4">
              <p className="text-xl font-headline italic text-on-surface-variant">A practical guide from a former FDA Investigator on navigating regulatory compliance and transitioning into consulting.</p>
            </div>
            <p className="text-lg text-on-surface-variant/80 font-body leading-relaxed max-w-xl">
              In this high-stakes memoir, former FDA investigator Sereen Morgan-Murray pulls back the curtain on the clandestine world of regulatory oversight. From hidden boardrooms to the front lines of public safety, "Beyond the Badge" is a meticulous record of one woman's pursuit of truth against the machinery of global power.
            </p>

            {/* Format Selection */}
            <div className="space-y-4 pt-2">
              <span className="font-label text-xs tracking-widest text-on-surface-variant uppercase">Select Format</span>
              <div className="flex gap-4">
                {Object.entries(formats).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setFormat(key)}
                    className={`px-6 py-3 rounded-md font-label uppercase tracking-widest text-[10px] transition-all border ${format === key ? 'border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(200,169,110,0.2)]' : 'border-outline-variant/30 text-stone-400 hover:border-primary/50 hover:text-stone-300'}`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end gap-4 mt-2">
              <span className="text-5xl font-headline font-bold text-primary">${formats[format].price}</span>
              <span className="font-label text-xs tracking-widest text-stone-500 pb-2 uppercase">{formats[format].name}</span>
            </div>
            <div className="flex gap-6 items-center pt-4">
              <div className="flex -space-x-2">
                <span className="material-symbols-outlined text-primary scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label text-[10px] uppercase tracking-widest text-stone-400">4.8/5 Rated by Independent Critics</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Verified physical edition
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 items-center pt-8">
              <div>
                <a href={formats[format].url} target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 burnished-gold-gradient text-on-primary font-body font-bold text-sm uppercase tracking-widest rounded-md hover:scale-[1.02] active:scale-95 transition-transform shadow-lg text-center min-w-[240px]">
                  {formats[format].label}
                </a>
              </div>
              
              {/* Scan to Buy QR Code */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-high border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-md">
                <div className="relative p-2 bg-white rounded-md w-[80px] h-[80px] flex items-center justify-center shadow-inner">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(formats[format].url)}`} 
                    alt="Scan to buy" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 border border-primary/10 pointer-events-none rounded-md"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">Scan to Buy</span>
                  <span className="font-body text-[11px] text-stone-400 max-w-[120px] leading-tight mt-1">Open link instantly on your mobile device</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flipbook Sample Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-32">
        <FlipbookViewer fileUrl="/Sample.pdf" />
      </section>

      {/* Footer */}
      <footer className="w-full bg-emerald-950 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-24 max-w-screen-2xl mx-auto">
          <div className="space-y-6">
            <span className="text-lg font-headline text-amber-100 uppercase tracking-widest">SEREEN MORGAN-MURRAY</span>
            <p className="font-label uppercase tracking-widest text-[10px] text-stone-500 leading-relaxed">
              © 2024 SEREEN MORGAN-MURRAY. ALL RIGHTS RESERVED. INVESTIGATIVE EDITORIAL CASE FILE NO. 402
            </p>
          </div>
          <div className="flex flex-col gap-4 font-label uppercase tracking-widest text-[10px]">
            <Link href="#" className="text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-colors">Press Kit</Link>
            <Link href="#" className="text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-colors">Newsletter</Link>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="text-right">
              <span className="font-label text-[10px] text-primary uppercase tracking-widest block mb-2">Office Status</span>
              <span className="font-headline italic text-amber-100/60">Field Operations: Active</span>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-amber-200">
                <span className="material-symbols-outlined text-sm">mail</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-amber-200">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
