'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });
    
    // Simulate network request
    setTimeout(() => {
      setFormState({ status: 'success' });
    }, 1500);
  };

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto min-h-screen">
      {/* Hero Section */}
      <header className="mb-24">
        <div className="max-w-3xl">
          <p className="font-label text-primary text-[10px] uppercase tracking-[0.2em] mb-4">Case File No. 402 // Inquiries</p>
          <h1 className="text-5xl md:text-7xl font-headline tracking-tight text-on-background leading-none">
            Let's Connect.
          </h1>
          <div className="mt-8 evidence-border pl-8 py-2">
            <p className="text-lg text-on-surface-variant max-w-xl font-body leading-relaxed">
              Secure communications for regulatory consultation, editorial inquiries, or professional engagements regarding the intersection of FDA integrity and GxP compliance.
            </p>
          </div>
        </div>
      </header>

      {/* Main Layout: Asymmetric Dossier Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Professional Contact Dossier */}
        <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
          <section className="bg-surface-container p-10 rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 0" }}>clinical_notes</span>
            </div>
            <h2 className="text-2xl font-headline text-primary mb-8 tracking-wide">Consulting Services</h2>
            <div className="space-y-8">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Entity</p>
                <p className="text-lg font-headline text-on-surface italic">SMM Arete GxP Consulting Services</p>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Specialization</p>
                <p className="text-sm font-body text-secondary leading-relaxed">
                  Advanced Quality Systems, Investigative Auditing, and Regulatory Strategy for Life Sciences.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Global Reach</p>
                    <p className="text-sm font-body text-on-surface">Headquartered in the US, Serving International Clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">mail</span>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Primary Contact</p>
                    <a href="mailto:sereen.morgan-murray@smmarete.com" className="text-sm font-body text-on-surface hover:text-primary transition-colors">sereen.morgan-murray@smmarete.com</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Media/Press Card */}
          <section className="bg-surface-container-low p-10 rounded-lg border border-outline-variant/10">
            <h3 className="text-xl font-headline text-primary mb-4 italic">Media &amp; Editorial</h3>
            <p className="text-sm font-body text-on-surface-variant mb-6">
              For press kits, interview requests, or speaking engagements related to investigative journalism and FDA regulations.
            </p>
            <Link href="#" className="text-primary font-label text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group">
              Request Press Kit 
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </section>
        </div>

        {/* Right Column: Formal Intake Form */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-surface-container-high p-8 md:p-16 rounded-lg relative">
            <div className="absolute top-0 left-0 w-1 h-24 bg-primary"></div>
            
            {formState.status === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <span className="material-symbols-outlined text-6xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <h3 className="font-headline text-3xl text-on-surface mb-4">Transmission Successful</h3>
                <p className="font-body text-on-surface-variant max-w-md mx-auto mb-8">
                  Your inquiry has been securely logged. The advisory team will review your submission and respond within 48 business hours.
                </p>
                <button 
                  onClick={() => setFormState({ status: 'idle' })}
                  className="bg-surface-container hover:bg-surface-container-low text-primary px-8 py-3 rounded-md font-label uppercase tracking-widest text-xs font-bold border border-primary/20 transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 transition-opacity duration-300" style={{ opacity: formState.status === 'submitting' ? 0.5 : 1 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Name Field */}
                  <div className="group">
                    <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-3" htmlFor="name">Full Legal Name</label>
                    <input 
                      required
                      disabled={formState.status === 'submitting'}
                      className="w-full bg-secondary-fixed text-on-secondary px-4 py-3 rounded-md outline-none border-b-2 border-transparent focus:border-primary transition-all font-body placeholder:text-on-secondary/50 disabled:opacity-50" 
                      id="name" 
                      name="name" 
                      placeholder="Enter your name" 
                      type="text" 
                    />
                  </div>
                  {/* Email Field */}
                  <div className="group">
                    <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-3" htmlFor="email">Professional Email Address</label>
                    <input 
                      required
                      disabled={formState.status === 'submitting'}
                      className="w-full bg-secondary-fixed text-on-secondary px-4 py-3 rounded-md outline-none border-b-2 border-transparent focus:border-primary transition-all font-body placeholder:text-on-secondary/50 disabled:opacity-50" 
                      id="email" 
                      name="email" 
                      placeholder="email@organization.com" 
                      type="email" 
                    />
                  </div>
                </div>
                {/* Organization Field */}
                <div className="group">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-3" htmlFor="org">Organization / Affiliation</label>
                  <input 
                    disabled={formState.status === 'submitting'}
                    className="w-full bg-secondary-fixed text-on-secondary px-4 py-3 rounded-md outline-none border-b-2 border-transparent focus:border-primary transition-all font-body placeholder:text-on-secondary/50 disabled:opacity-50" 
                    id="org" 
                    name="org" 
                    placeholder="Legal Entity Name" 
                    type="text" 
                  />
                </div>
                {/* Message Field */}
                <div className="group">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-3" htmlFor="message">Statement of Inquiry</label>
                  <textarea 
                    required
                    disabled={formState.status === 'submitting'}
                    className="w-full bg-secondary-fixed text-on-secondary px-4 py-3 rounded-md outline-none border-b-2 border-transparent focus:border-primary transition-all font-body placeholder:text-on-secondary/50 resize-none disabled:opacity-50" 
                    id="message" 
                    name="message" 
                    placeholder="Provide context regarding your request..." 
                    rows="6"
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                  <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest max-w-xs leading-relaxed italic">
                    * Information provided is handled with the highest level of professional confidentiality.
                  </p>
                  <button 
                    disabled={formState.status === 'submitting'}
                    className="w-full md:w-auto burnished-gold-gradient text-on-primary px-12 py-5 rounded-md font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed" 
                    type="submit"
                  >
                    {formState.status === 'submitting' ? 'Transmitting...' : 'Transmit Message'}
                    {formState.status !== 'submitting' && (
                      <span className="material-symbols-outlined text-sm">send</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Subtle Decorative Image / Texture */}
          <div className="mt-16 h-64 w-full relative grayscale opacity-40 hover:grayscale-0 transition-all duration-700 rounded-lg overflow-hidden group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcpawCrw0j4Pq7F34LVKKurodBuJ85D955JPQmSkn488hX_8B48IgZF5qBIkyrrIgQcQzPBvf6hz2vLydEFcSfeM_1a2C6kp5LNXzP92w1kDUf_yHKRRrmjB0AZSyBykYHm6KzQmhOEFSCgOZN3HGVwwQI9tiDH6Ikf_ePiWx6L0cV1JTYFzj16N3CrtWpwmeLL6c8ZJc9DhJRrRnlSZ3opjQcxxJrDGyPGqAbYaOz8ago8G6TUv5bXZ8-42oolEFUsyN7yjIIXRc"
              alt="Bureaucratic desk with vintage papers"
              fill
              className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-emerald-950 w-full mt-32 absolute left-0 right-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-24 border-t border-white/5 max-w-screen-2xl mx-auto">
          <div>
            <div className="text-lg font-headline text-amber-100 mb-6 uppercase tracking-widest">SEREEN MORGAN-MURRAY</div>
            <p className="font-label uppercase tracking-widest text-[10px] text-stone-500 leading-loose">
              © 2024 SEREEN MORGAN-MURRAY. ALL RIGHTS RESERVED. INVESTIGATIVE EDITORIAL CASE FILE NO. 402
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 font-label">
            <Link href="#" className="uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4">Privacy Policy</Link>
            <Link href="#" className="uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4">Terms of Service</Link>
            <Link href="#" className="uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4">Press Kit</Link>
            <Link href="#" className="uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4">Newsletter</Link>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="font-label uppercase tracking-widest text-[10px] text-stone-500 mb-4">Follow the Investigation</p>
            <div className="flex gap-6">
              <Link href="#" className="text-amber-200 hover:text-amber-100 transition-colors">
                <span className="material-symbols-outlined">history_edu</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-amber-100 transition-colors">
                <span className="material-symbols-outlined">share</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
