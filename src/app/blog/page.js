'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { posts } from '../../data/posts';

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('All Files');

  const filters = ['All Files', 'GCP Compliance', 'FDA BIMO Inspections', 'Regulatory Strategy', 'Consulting Transitions', 'Inspection Readiness'];

  // The featured post is at index 0 in the imported posts array.
  // The standard posts grid should omit the featured post.
  const standardPosts = posts.slice(1);

  const filteredPosts = activeFilter === 'All Files' 
    ? standardPosts 
    : standardPosts.filter(post => post.filterCategory === activeFilter);

  return (
    <main className="pt-32 pb-24">
      {/* Hero Section: Insights & Advisory */}
      <section className="px-12 max-w-7xl mx-auto mb-24">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface to-surface-container-low p-16 md:p-24">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_rLtfIbnftAZnAK872XtN4m2Gw8lJaz6c7yN9P16mn2O9g1acRloH_xkoy6sbo26g3XE_zTAd6u22NhvkGygL-zMzVNsJVHXDyguRRf_YkEb4IFgS2jI_wRek_YGeiz0v4TdD82u4MmKgXNfpxN7LZR6kB08OjLHvdM88v5lJ0TmxwKhlfBprl12cP2FedZ-LkbQ3P53pZfpstXDeRPJMXOfOs2_irKyzK1q3fvlfrhZQLfA8brg7gVvn4LrymfIGLjpIMeJ11UE"
              alt="Vintage typewriter and investigative files"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="font-label uppercase tracking-[0.2em] text-primary text-xs mb-4 block">Case File No. 402</span>
            <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tighter text-on-surface mb-6 leading-tight">
              FDA Regulatory Insights &amp; <span className="italic text-primary">Advisory</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80 border-l-2 border-primary pl-6 py-2">
              Beyond the badge, exploring the intersection of high stakes FDA regulation, clinical trial compliance, and strategic advisory grounded in real world inspection experience.
              <br/><br/>
              Insights drawn from real world FDA BIMO inspection experience and global clinical trial oversight.
            </p>
            <span className="font-label text-[10px] uppercase tracking-widest text-primary mt-6 block">Grounded in FDA BIMO inspection experience across United States and international clinical research environments.</span>
          </div>
        </div>
      </section>

      {/* Topic Filtering Chips */}
      <section className="px-12 max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-label text-[10px] uppercase tracking-widest text-outline">Filter by Inquiry:</span>
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-label text-xs tracking-wider border transition-all ${
                activeFilter === filter 
                  ? 'bg-surface-container-highest text-on-surface border-outline-variant/20' 
                  : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant border-transparent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          
          {/* Featured Dossier */}
          {(activeFilter === 'All Files' || activeFilter === 'FDA BIMO Inspections') && (
            <article className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row bg-surface-container-low rounded-lg overflow-hidden border-l-4 border-primary mt-12 mb-12">
              <div className="md:w-1/2 aspect-video md:aspect-auto relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqZbcZ8w1VrZ169Vdez4QfNdCgrtPDH6j8cnxC-Tw_K3QtFbZeh1APDQwrLz2EpBoqP8sdpD9oDs6ZOghH4CQjqXguxsN3QHuIDpYXCtmBAbE5u4R0SDDdmDMeZ33Pz3C2bIvrGeujv8-sPW2v1EzRBB5aHmwr_4bhNVzOgrJV5r3k-xkRpAeyyTx8WbE9M9QeiTaxdMQJQD13_WGM9kqI5SAi7rwXodkDTs9WJZmzJdx6tuQFUodgsj_0Yodo95cVcHstLqOIScg"
                  alt="Regulatory documents and audit trail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-label text-[9px] uppercase tracking-widest rounded-sm border border-primary/20">Featured Dossier</span>
                  <time className="font-label text-[10px] uppercase tracking-widest text-outline" dateTime="2023-12-05">December 5, 2023</time>
                </div>
                <h2 className="font-headline text-4xl text-on-surface mb-6 leading-tight">FDA BIMO Inspections: What Sponsors and CROs Often Miss</h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8 opacity-90">
                  An inside perspective on how FDA BIMO inspections are conducted, where organizations fall short, and how sponsors and CROs can strengthen inspection readiness before regulatory findings occur.
                </p>
                <div className="flex items-center gap-6">
                  <Link href={`/blog/${posts[0].slug}`} className="inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.2em] text-primary hover:text-primary-fixed-dim transition-all">
                    Read the Full File <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Standard Posts */}
          {filteredPosts.map(post => (
            <article key={post.id} className="flex flex-col group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8 bg-surface-container shadow-[0_20px_40px_rgba(212,231,223,0.06)] relative">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-4 mb-4">
                  <time className="font-label text-[10px] uppercase tracking-widest text-outline" dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
                  <span className="w-8 h-[1px] bg-outline-variant/30"></span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-primary">{post.category}</span>
                </div>
                <h3 className="font-headline text-2xl text-secondary mb-4 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.2em] text-primary hover:text-primary-fixed-dim transition-all group-hover:gap-4">
                  Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / Evidence Submission */}
      <section className="mt-32 px-12 max-w-4xl mx-auto">
        <div className="bg-surface-container-high p-12 text-center rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
          <h4 className="font-headline text-3xl text-primary mb-4 italic">Join the Investigative Circle</h4>
          <p className="font-body text-on-surface-variant mb-8 max-w-md mx-auto">
            Subscribe to receive monthly briefings on regulatory shifts and advisory insights directly from the desk of Sereen Murray-Morgan.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-grow bg-surface border border-outline-variant/30 rounded-md px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none placeholder:text-stone-600 font-body" placeholder="Enter your professional email" type="email" required />
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-md font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-32 bg-emerald-950 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-24 max-w-screen-2xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="text-lg font-headline text-amber-100">SEREEN MORGAN-MURRAY</div>
            <p className="font-label uppercase tracking-widest text-[10px] text-stone-500 max-w-xs leading-relaxed">
              A legacy of precision. A future of strategy. Providing high-stakes advisory for those navigating the complexities of modern regulation.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-label uppercase tracking-widest text-[10px] text-amber-200">Resources</h5>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="font-label uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-all">Privacy Policy</Link>
              <Link href="#" className="font-label uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-all">Terms of Service</Link>
              <Link href="#" className="font-label uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-all">Press Kit</Link>
              <Link href="#" className="font-label uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-all">Newsletter</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-6 items-end justify-between">
            <div className="flex gap-4">
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-stone-500 text-sm">share</span>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-stone-500 text-sm">mail</span>
              </Link>
            </div>
            <div className="font-label uppercase tracking-widest text-[10px] text-stone-500 text-right">
              © 2024 SEREEN MORGAN-MURRAY. ALL RIGHTS RESERVED.<br />
              INVESTIGATIVE EDITORIAL CASE FILE NO. 402
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
