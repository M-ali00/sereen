import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-start pt-32 pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByLhzdmBB-fNNh1SVEf5s44YUQke6RhOUMnzBu5GEYja234gUnfYZWtim9mj2L6uVHlrxHukHybWBHnJ9yHh8m7M0iIk-Rylv8dFZNqzCmxvp6rkusnhJPRtMk7WbnbaGOqIQ08IqvdVI2DkZQ06yaeeUzlJVtC8M77zS1ncJCHDw7J8Xr6W6fezqHbR6rhTTZExso1aZ3Z5qkn_J6J-i3BCtja921R0FajML7JzUOHFLZpEKK63tZjEAEs1BJraBT5pcpfZzE21A"
            alt="Moody dark library with leather bound books"
            fill
            className="object-cover opacity-30 grayscale mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="font-label text-primary text-[10px] tracking-[0.3em] uppercase mb-6 block">INTERNAL DOSSIER: THE STRATEGIC PLAYBOOK</span>
          <h1 className="font-headline text-5xl md:text-8xl text-on-surface mb-4 leading-tight letter-spacing-cinematic font-bold">
            Beyond the Badge
          </h1>
          <h2 className="font-headline italic text-2xl md:text-4xl text-primary-fixed-dim mb-8">
            An Ex-FDA Consulting Playbook
          </h2>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed opacity-90">
            How Former Regulators and GxP Leaders Build Credibility, Judgment, and Longevity in Consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/buy-book" className="burnished-gold-gradient text-on-primary font-body font-bold px-10 py-5 rounded-md text-sm uppercase tracking-widest shadow-xl text-center">
              Get the Playbook
            </Link>
            <Link href="/about" className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body font-semibold px-10 py-5 rounded-md text-sm uppercase tracking-widest transition-all text-center">
              View Case Files
            </Link>
          </div>
        </div>
      </section>

      {/* The Transition Section */}
      <section className="bg-surface-container py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden relative">
              <Image 
                src="/transition_desk.png"
                alt="An FDA badge and notebook on a mahogany desk, symbolizing the transition from regulator to consultant"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent opacity-60"></div>
            </div>
            {/* Evidence Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-surface-container-highest p-8 max-w-xs shadow-2xl hidden md:block">
              <p className="font-label text-[10px] text-primary mb-2 tracking-widest uppercase">OBSERVATION 402.B</p>
              <p className="font-headline italic text-lg text-on-surface leading-snug">"The transition from regulator to advisor requires a complete recalibration of the strategic lens."</p>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
              After the badge comes off, what’s your next move?
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>Stepping out of the FDA and into the private sector isn't just a change of scenery—it's a fundamental shift in identity. Many former investigators struggle to translate their authoritative technical expertise into the strategic advisory role required by the industry.</p>
              <p>The playbook addresses the unique challenges GxP leaders face during this transition, bridging the gap between raw regulatory oversight and nuanced consulting excellence. This is the blueprint for maintaining your investigative rigor while delivering high-value business outcomes.</p>
            </div>
            <div className="mt-12 pt-12 border-t border-outline-variant/15">
              <Link href="/about" className="flex items-center gap-4 group cursor-pointer inline-flex">
                <span className="text-primary font-label text-xs uppercase tracking-[0.2em]">Read the Preface</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-surface py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20 flex justify-between items-end">
            <div className="max-w-xl">
              <span className="font-label text-primary text-[10px] tracking-widest uppercase mb-4 block underline underline-offset-8">The Pillars of Impact</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface">The Three Pillars of Regulatory Consulting</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-surface-container-low p-10 lg:p-12 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700 ease-in-out"></div>
              
              <div className="flex justify-between items-start mb-16">
                <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-2xl transition-colors duration-500" style={{ fontVariationSettings: "'FILL' 0" }}>query_stats</span>
                </div>
                <span className="font-headline text-primary/20 text-5xl font-bold tracking-tighter group-hover:text-primary/40 transition-colors">01</span>
              </div>
              
              <div className="mt-auto">
                <h3 className="font-headline text-2xl text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">Translate Judgment into Strategy</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm lg:text-base">Go beyond finding faults. Learn to synthesize regulatory findings into actionable, long-term business strategies that safeguard compliance and accelerate growth.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-surface-container-high p-10 lg:p-12 border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-xl hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary"></div>
              <div className="absolute top-8 right-8 hidden xl:block">
                <span className="font-label text-[9px] text-primary tracking-[0.2em] uppercase border border-primary/30 px-3 py-1 rounded-full bg-primary/5">Core Module</span>
              </div>
              
              <div className="flex justify-between items-start mb-16 xl:mt-8">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-on-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <span className="font-headline text-primary/20 text-5xl font-bold tracking-tighter group-hover:text-primary/40 transition-colors">02</span>
              </div>
              
              <div className="mt-auto">
                <h3 className="font-headline text-2xl text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">Transform Experience</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm lg:text-base">Leverage your years of field inspections and GxP leadership as a catalyst for cultural change within pharmaceutical and medical device organizations.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-surface-container-low p-10 lg:p-12 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700 ease-in-out"></div>
              
              <div className="flex justify-between items-start mb-16">
                <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-2xl transition-colors duration-500" style={{ fontVariationSettings: "'FILL' 0" }}>verified</span>
                </div>
                <span className="font-headline text-primary/20 text-5xl font-bold tracking-tighter group-hover:text-primary/40 transition-colors">03</span>
              </div>
              
              <div className="mt-auto">
                <h3 className="font-headline text-2xl text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">Build Credibility</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm lg:text-base">Establish yourself as a trusted authority. Master the communication nuances that differentiate a successful consultant from a standard auditor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Block */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="evidence-border pl-12">
            <blockquote className="font-headline text-3xl md:text-4xl text-on-surface italic leading-snug">
              Consulting is not about having the answers; it is about having the judgment to ask the questions that uncover the truth behind the data. That is the essence of 'The Badge'.
            </blockquote>
            <div className="mt-8">
              <span className="font-label text-primary text-xs tracking-widest uppercase">— FROM CHAPTER 4: THE ADVISORY MINDSET</span>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="bg-surface py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20 items-start">
          <div className="w-full md:w-1/3 sticky top-32">
            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-outline-variant/10 shadow-2xl grayscale relative">
              <Image 
                src="/authorpic.jpeg"
                alt="Professional headshot of Sereen Morgan-Murray, former FDA BIMO Investigator and Global GxP Consultant"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <span className="font-label text-primary text-[10px] tracking-widest uppercase mb-4 block">Meet the Former FDA Investigator Behind the Strategy</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6">Sereen Morgan-Murray</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p className="font-headline italic text-2xl text-on-surface text-primary">Former FDA BIMO Investigator | Global GxP Consultant | Inspection Readiness Strategist</p>
              
              <div className="font-body text-base space-y-6">
                <p>Sereen Morgan-Murray is a former U.S. FDA Bioresearch Monitoring Investigator with over 6 years of direct regulatory experience and more than 15 years in clinical research, GxP compliance, and regulatory oversight.</p>
                <p>During her time at the FDA, Sereen conducted domestic and international inspections across clinical investigator sites, sponsors, CROs, IRBs, and bioequivalence programs, evaluating compliance with 21 CFR regulations and ICH GCP guidelines. Her work included high priority and for cause inspections, regulatory enforcement actions, and advising industry on achieving compliance.</p>
                <p>Today, as the Founder of SMM Arete GxP Consulting Services, she brings that same regulatory lens to industry, helping organizations proactively identify compliance gaps, strengthen quality systems, and prepare for FDA inspections with confidence.</p>
                <p>Sereen has led and supported over 200 inspections and audits globally, working across sponsors, CROs, and clinical sites to improve inspection readiness, data integrity, and regulatory strategy.</p>
              </div>

              <div className="mt-12 py-8 border-y border-outline-variant/10">
                <h3 className="font-label text-primary text-[10px] tracking-widest uppercase mb-6">Her Expertise Includes:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 font-body text-sm">
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> FDA BIMO inspection readiness and mock inspections</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> Sponsor and CRO oversight assessments</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> Protocol and study documentation review to prevent deviations</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> CAPA strategy, root cause analysis, and remediation</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> SOP development and regulatory gap assessment</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> Inspection readiness training and executive advisory</li>
                </ul>
              </div>

              <div className="font-body text-base space-y-6 pt-4">
                <p>In addition to consulting, Sereen is a speaker and educator, delivering keynote presentations and webinars to clinical research professionals and individuals transitioning into consulting.</p>
                <p>She is also the author of <span className="italic text-primary">Beyond the Badge</span>, a strategic playbook for former regulators and GxP professionals building credibility and longevity in consulting.</p>
              </div>

              <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-outline-variant/10 mt-8">
                <div className="flex flex-col gap-2">
                  <span className="font-headline text-5xl text-primary">6+</span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant leading-relaxed">Years at FDA<br/>BIMO Investigator</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-headline text-5xl text-primary">15+</span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant leading-relaxed">Years in Clinical Research<br/>and GxP Compliance</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-headline text-5xl text-primary">200+</span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant leading-relaxed">Inspections and Audits<br/>Domestic and International</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-highest w-full mt-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute -top-64 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-24 max-w-screen-2xl mx-auto relative z-10">
          <div className="md:col-span-2 space-y-8 pr-12">
            <span className="text-2xl font-headline text-on-surface uppercase tracking-[0.2em] block mb-2">SEREEN MORGAN-MURRAY</span>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed max-w-md">
              Elevating clinical research compliance through strategic advisory, rigorous inspection readiness, and authoritative GxP leadership.
            </p>
            <a href="mailto:sereen.morgan-murray@smmarete.com" className="inline-flex items-center gap-3 text-primary font-label text-[10px] uppercase tracking-widest hover:text-primary-fixed transition-colors mt-4">
              <span className="material-symbols-outlined text-base">mail</span>
              sereen.morgan-murray@smmarete.com
            </a>
          </div>
          
          <div className="flex flex-col gap-5">
            <span className="font-label text-on-surface-variant text-[10px] uppercase tracking-[0.2em] mb-2 border-b border-outline-variant/20 pb-2 inline-block">Navigation</span>
            <Link href="/about" className="text-on-surface hover:text-primary font-label text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2 group"><span className="material-symbols-outlined text-[10px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary">arrow_right</span> About</Link>
            <Link href="/buy-book" className="text-on-surface hover:text-primary font-label text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2 group"><span className="material-symbols-outlined text-[10px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary">arrow_right</span> The Book</Link>
            <Link href="/contact" className="text-on-surface hover:text-primary font-label text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2 group"><span className="material-symbols-outlined text-[10px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary">arrow_right</span> Contact</Link>
            <Link href="/blog" className="text-on-surface hover:text-primary font-label text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2 group"><span className="material-symbols-outlined text-[10px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary">arrow_right</span> Advisory Insights</Link>
          </div>
          
          <div className="space-y-6 bg-surface-container p-8 rounded-lg border border-primary/10 shadow-lg">
            <span className="font-label text-primary text-[10px] uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm">mark_email_unread</span> Subscribe to Field Notes</span>
            <p className="text-xs text-on-surface-variant font-body">Get exclusive FDA regulatory strategies and compliance insights delivered directly to your inbox.</p>
            <div className="relative group flex items-center mt-4">
              <input className="bg-surface border border-outline-variant/30 text-on-surface w-full px-4 py-3 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-xs outline-none" placeholder="Enter your email" type="email" />
              <button className="absolute right-2 burnished-gold-gradient text-on-primary p-1.5 rounded-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-outline-variant/10">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-on-surface-variant/60 font-label text-[9px] uppercase tracking-[0.2em]">
              © 2024 SMM Arete GxP Consulting Services. All rights reserved.
            </p>
            <div className="flex gap-6 font-label text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/60">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
