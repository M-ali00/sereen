import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-12 max-w-screen-2xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-label text-primary tracking-[0.2em] mb-6 font-bold uppercase text-xs">Bioresearch Monitoring (BIMO) Program / Investigative Authority</p>
            <h1 className="font-headline text-6xl md:text-8xl font-medium tracking-tighter mb-12 text-on-surface leading-[0.9]">
              The <span className="italic text-primary">Investigative</span> Mind.
            </h1>
            <div className="max-w-xl">
              <p className="font-headline italic text-xl text-primary mb-6">
                Former FDA BIMO Investigator helping sponsors, CROs, and clinical sites achieve inspection readiness, strengthen compliance systems, and navigate regulatory risk with confidence.
              </p>
              <div className="space-y-4 text-lg leading-relaxed text-on-surface-variant font-light font-body">
                <p>
                  Sereen Morgan Murray represents the rare intersection of federal regulatory authority and strategic industry foresight. As a former investigator with the U.S. FDA's Bioresearch Monitoring (BIMO) Program, she has conducted both domestic and international inspections across clinical research environments, evaluating compliance with critical regulatory frameworks including 21 CFR Parts 11, 50, 54, 56, and 312, as well as Good Clinical Practice standards.
                </p>
                <p>
                  Her work has directly influenced the integrity, safety, and regulatory outcomes of clinical trials supporting life saving therapies. Today, she brings that same investigative precision to industry, helping organizations identify compliance gaps, strengthen oversight, and prepare for regulatory scrutiny with confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-lg shadow-[0_20px_40px_rgba(212,231,223,0.06)] group relative">
              <Image 
                src="/authorpic.jpeg"
                alt="Sereen Morgan-Murray"
                fill
                className="object-cover grayscale contrast-125 opacity-90 transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* Dossier Tag */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-6 border-l-2 border-primary shadow-2xl z-10">
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-1">Subject Identification</p>
              <p className="font-headline text-xl">Morgan-Murray, S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-surface-container-low py-32 px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <span className="material-symbols-outlined text-primary text-4xl">policy</span>
              <h3 className="font-headline text-3xl">Former FDA Authority</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Extensive experience in FDA Bioresearch Monitoring (BIMO) Program inspections across United States and international clinical sites, with direct application of regulatory frameworks including 21 CFR Parts 11, 50, 54, 56, and 312, and Good Clinical Practice.</p>
            </div>
            <div className="space-y-6">
              <span className="material-symbols-outlined text-primary text-4xl">troubleshoot</span>
              <h3 className="font-headline text-3xl">Strategic Compliance and Risk Identification</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Proven ability to identify compliance gaps before they escalate into regulatory findings, enabling sponsors and CROs to prevent delays, protect data integrity, and maintain inspection readiness.</p>
            </div>
            <div className="space-y-6">
              <span className="material-symbols-outlined text-primary text-4xl">corporate_fare</span>
              <h3 className="font-headline text-3xl">Advisory Leadership</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Trusted advisor to sponsors, CROs, and clinical sites, translating regulatory expectations into actionable strategies that strengthen oversight, improve execution, and ensure sustained compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Focus */}
      <section className="py-32 px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="bg-surface-container-high p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <h2 className="font-headline text-4xl mb-8">SMM Arete GxP Consulting Services</h2>
            <p className="font-body text-lg text-on-surface-variant mb-12 leading-relaxed">
              Under her leadership, SMM Arete GxP Consulting Services serves as a premier boutique advisory, trusted by global sponsors, CROs, and clinical sites across the United States and internationally. The mission is to embed operational excellence, regulatory precision, and ethical rigor into every stage of clinical development.
            </p>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Mock FDA BIMO Inspections aligned with CP 7348.810 and CP 7348.811</span>
              </li>
              <li className="flex items-start gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Sponsor and CRO Oversight Assessments</span>
              </li>
              <li className="flex items-start gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Inspection Readiness Strategy and Execution</span>
              </li>
              <li className="flex items-start gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>CAPA Development and Remediation Planning</span>
              </li>
              <li className="flex items-start gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Study Documentation Review</span>
              </li>
              <li className="flex items-start gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>SOP Review and Compliance Gap Analysis</span>
              </li>
              <li className="flex items-start gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span>Inspection Readiness Training for sponsor, CRO, and site level teams</span>
              </li>
            </ul>
            <Link href="/contact" className="mt-12 group flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-xs font-label">
              Request a Consultation
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </Link>
          </div>
          <div className="pt-12">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-8">Outcome Driven Positioning</p>
            <p className="font-headline text-2xl italic leading-tight text-on-surface mb-8">
              Sereen’s approach is grounded in real world regulatory enforcement experience, enabling organizations to:
            </p>
            <div className="space-y-4 font-body text-on-surface-variant mb-16 pl-6 border-l-2 border-primary/30">
              <p>• Identify and remediate compliance gaps proactively</p>
              <p>• Strengthen sponsor and CRO oversight frameworks</p>
              <p>• Prevent costly regulatory delays and findings</p>
              <p>• Build confidence in inspection readiness across all levels</p>
            </div>
            <div className="bg-surface-container-low p-8 border-l border-primary shadow-lg relative">
              <span className="absolute top-0 right-0 p-4 material-symbols-outlined text-primary opacity-20 text-5xl">verified_user</span>
              <h4 className="font-label font-bold text-primary tracking-widest text-xs uppercase mb-4">Credibility Line</h4>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                Trusted by global sponsors, CROs, and clinical research sites across the United States and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-32 bg-emerald-950">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-24 border-t border-white/5 max-w-screen-2xl mx-auto">
          <div className="space-y-6">
            <span className="text-lg font-headline text-amber-100">SEREEN MORGAN-MURRAY</span>
            <p className="font-label uppercase tracking-widest text-[10px] text-stone-500 leading-relaxed">
              © 2024 SEREEN MORGAN-MURRAY. ALL RIGHTS RESERVED. INVESTIGATIVE EDITORIAL CASE FILE NO. 402
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-label text-amber-200 font-bold uppercase tracking-widest text-[10px] mb-2">Navigation</h5>
            <Link href="#" className="font-label uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-all">Privacy Policy</Link>
            <Link href="#" className="font-label uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-all">Terms of Service</Link>
            <Link href="#" className="font-label uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-all">Press Kit</Link>
            <Link href="#" className="font-label uppercase tracking-widest text-[10px] text-stone-500 hover:text-amber-100 underline underline-offset-4 transition-all">Newsletter</Link>
          </div>
          <div className="space-y-6">
            <h5 className="font-label text-amber-200 font-bold uppercase tracking-widest text-[10px]">Contact Bureau</h5>
            <p className="font-label uppercase tracking-widest text-[10px] text-stone-500">
              Direct inquiries for advisory and keynote appearances:
            </p>
            <a href="mailto:sereen.morgan-murray@smmarete.com" className="bg-surface-container-high p-4 flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
              <span className="font-label text-amber-100 text-[11px]">SEREEN.MORGAN-MURRAY@SMMARETE.COM</span>
              <span className="material-symbols-outlined text-amber-200 group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
