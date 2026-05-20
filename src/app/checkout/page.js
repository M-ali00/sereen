'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Checkout() {
  const [qty, setQty] = useState(1);
  const [formState, setFormState] = useState({ status: 'idle' });

  const pricePerItem = 42.00;
  const shipping = 8.50;
  
  // Calculate total
  const subtotal = pricePerItem * qty;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });
    setTimeout(() => {
      setFormState({ status: 'success' });
    }, 2000);
  };

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-32">
      {/* Breadcrumb / System Status */}
      <div className="mb-12">
        <span className="text-primary font-label text-[0.75rem] tracking-widest uppercase">Checkout / Secure Order / Case File No. 882</span>
        <h1 className="text-4xl md:text-5xl font-headline text-on-surface mt-2 tracking-tight">Final Authorization Checkout</h1>
      </div>
      
      {formState.status === 'success' ? (
        <div className="py-24 flex flex-col items-center justify-center text-center animate-in fade-in duration-500 max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-6xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <h3 className="font-headline text-3xl text-on-surface mb-4">Acquisition Authorized</h3>
          <p className="font-body text-on-surface-variant mb-8">
            Your transaction has been securely processed. A digital receipt and tracking dossier will be dispatched to your provided email address shortly.
          </p>
          <Link 
            href="/"
            className="bg-surface-container hover:bg-surface-container-low text-primary px-8 py-3 rounded-md font-label uppercase tracking-widest text-xs font-bold border border-primary/20 transition-all"
          >
            Return to Directory
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 transition-opacity duration-300" style={{ opacity: formState.status === 'submitting' ? 0.5 : 1 }}>
          {/* Information Intake (Shipping & Payment) */}
          <div className="lg:col-span-7 space-y-12">
            <form id="checkout-form" onSubmit={handleSubmit}>
              {/* Shipping Intelligence */}
              <section className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-primary"></div>
                  <h2 className="text-xl font-headline text-primary italic">Shipping Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-primary font-label text-[0.75rem] tracking-widest uppercase mb-2">Full Name</label>
                    <input required disabled={formState.status === 'submitting'} className="w-full bg-surface-container-low border-0 outline outline-1 outline-outline-variant/15 focus:outline-primary/50 text-on-surface p-4 rounded-md transition-all font-body text-sm placeholder:text-outline/50 disabled:opacity-50" placeholder="John Doe" type="text" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-primary font-label text-[0.75rem] tracking-widest uppercase mb-2">Street Address</label>
                    <input required disabled={formState.status === 'submitting'} className="w-full bg-surface-container-low border-0 outline outline-1 outline-outline-variant/15 focus:outline-primary/50 text-on-surface p-4 rounded-md transition-all font-body text-sm placeholder:text-outline/50 disabled:opacity-50" placeholder="123 Archive Way" type="text" />
                  </div>
                  <div>
                    <label className="block text-primary font-label text-[0.75rem] tracking-widest uppercase mb-2">City</label>
                    <input required disabled={formState.status === 'submitting'} className="w-full bg-surface-container-low border-0 outline outline-1 outline-outline-variant/15 focus:outline-primary/50 text-on-surface p-4 rounded-md transition-all font-body text-sm placeholder:text-outline/50 disabled:opacity-50" placeholder="Washington D.C." type="text" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-primary font-label text-[0.75rem] tracking-widest uppercase mb-2">Postal Code</label>
                      <input required disabled={formState.status === 'submitting'} className="w-full bg-surface-container-low border-0 outline outline-1 outline-outline-variant/15 focus:outline-primary/50 text-on-surface p-4 rounded-md transition-all font-body text-sm placeholder:text-outline/50 disabled:opacity-50" placeholder="20001" type="text" />
                    </div>
                    <div>
                      <label className="block text-primary font-label text-[0.75rem] tracking-widest uppercase mb-2">Country</label>
                      <select disabled={formState.status === 'submitting'} className="w-full bg-surface-container-low border-0 outline outline-1 outline-outline-variant/15 focus:outline-primary/50 text-on-surface p-4 rounded-md transition-all font-body text-sm disabled:opacity-50">
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>European Union</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Transaction Security */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-primary"></div>
                  <h2 className="text-xl font-headline text-primary italic">Payment Details</h2>
                </div>
                <div className="mb-4">
                  <p className="text-primary font-headline text-lg">Secure Checkout</p>
                  <p className="font-body text-sm text-on-surface-variant opacity-80 mt-1">All transactions are securely encrypted and processed.</p>
                </div>
                <div className="bg-surface-container p-8 rounded-lg outline outline-1 outline-outline-variant/15 space-y-6">
                  <div>
                    <label className="block text-primary font-label text-[0.75rem] tracking-widest uppercase mb-2">Card Number</label>
                    <div className="relative mb-2">
                      <input required disabled={formState.status === 'submitting'} className="w-full bg-surface-container-high border-0 outline outline-1 outline-outline-variant/15 focus:outline-primary/50 text-on-surface p-4 rounded-md transition-all font-body text-sm placeholder:text-outline/50 disabled:opacity-50" placeholder="0000 0000 0000 0000" type="text" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                        <span className="material-symbols-outlined text-outline opacity-40">lock</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-outline">
                      <span>Accepted payments:</span>
                      <span className="font-bold">Visa</span>
                      <span className="font-bold">Mastercard</span>
                      <span className="font-bold">American Express</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary font-label text-[0.75rem] tracking-widest uppercase mb-2">Expiry Date</label>
                      <input required disabled={formState.status === 'submitting'} className="w-full bg-surface-container-high border-0 outline outline-1 outline-outline-variant/15 focus:outline-primary/50 text-on-surface p-4 rounded-md transition-all font-body text-sm placeholder:text-outline/50 disabled:opacity-50" placeholder="MM/YY" type="text" />
                    </div>
                    <div>
                      <label className="block text-primary font-label text-[0.75rem] tracking-widest uppercase mb-2">Security Code (CVV)</label>
                      <input required disabled={formState.status === 'submitting'} className="w-full bg-surface-container-high border-0 outline outline-1 outline-outline-variant/15 focus:outline-primary/50 text-on-surface p-4 rounded-md transition-all font-body text-sm placeholder:text-outline/50 disabled:opacity-50" placeholder="***" type="password" />
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <aside className="lg:col-span-5">
            <div className="bg-surface-container-low rounded-lg p-8 sticky top-32 outline outline-1 outline-outline-variant/15">
              <h3 className="text-2xl font-headline text-on-surface mb-8">Order Summary</h3>
              <div className="flex gap-6 pb-8 mb-8 border-b border-outline-variant/20">
                <div className="w-24 h-32 bg-surface-container-highest flex-shrink-0 relative group">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPPnsd0lusLX-skLGNrSKvAOqu8FlvYDqWghHK0V-bsujQ3JeT1L_chP4PmxSvhLbhcax935ZsM5vPU7OL4QhJdMINIQNFRIFdqU6fA1QBCyPckT7MguTkwNPv7osKx7DWu_NloAvLzJkBrQejyXkmE-jWijLHAVh88Vcnk8Lu7_axg1FTRZrqijZBw1wZL9vjsWFg6_f1avU8AFt6lAK9IF8_UtxFFV00-asNHz2xIsPwGC7bubpj-QQiWiXZlqciKA-SBPyIMJA"
                    alt="Beyond the Badge"
                    fill
                    className="object-cover rounded-sm shadow-2xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-headline leading-tight">Beyond the Badge</h4>
                  <p className="font-body text-xs text-on-surface-variant mt-2 mb-2 leading-relaxed opacity-90">A practical guide from a former FDA Investigator on navigating regulatory compliance and transitioning into consulting.</p>
                  <p className="text-sm text-outline font-label uppercase tracking-widest mt-1">Hardcover / First Edition</p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-primary font-bold">${pricePerItem.toFixed(2)}</span>
                    <div className="flex items-center gap-2">
                      <button 
                        type="button"
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        disabled={formState.status === 'submitting'}
                        className="w-6 h-6 rounded bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="text-xs text-outline opacity-60 w-4 text-center">{qty}</span>
                      <button 
                        type="button"
                        onClick={() => setQty(qty + 1)}
                        disabled={formState.status === 'submitting'}
                        className="w-6 h-6 rounded bg-surface-container flex items-center justify-center text-outline hover:text-primary transition-colors disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 font-label text-sm tracking-wide">
                <div className="flex justify-between text-outline">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-outline">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-outline">
                  <span>Regulatory Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 flex justify-between text-xl font-headline text-on-surface">
                  <span>Order Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-12">
                <button 
                  type="submit"
                  form="checkout-form"
                  disabled={formState.status === 'submitting'}
                  className="w-full burnished-gold-gradient text-on-primary font-bold font-body py-5 rounded-md text-sm tracking-[0.2em] uppercase shadow-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState.status === 'submitting' ? 'Processing...' : 'Complete Secure Purchase'}
                </button>
                <p className="mt-4 text-[0.65rem] text-center text-outline uppercase tracking-widest opacity-60">
                  By placing your order, you agree to secure processing of your payment.
                </p>
                <p className="mt-6 text-center text-xs font-body text-on-surface-variant">
                  Need help? Contact us at <a href="mailto:sereen.morgan-murray@smmarete.com" className="text-primary hover:underline">sereen.morgan-murray@smmarete.com</a>.
                </p>
              </div>
              {/* Evidence Block Signature */}
              <div className="mt-12 pl-6 border-l-2 border-primary">
                <p className="font-headline text-sm italic text-on-surface-variant leading-relaxed">
                  "The pursuit of truth is a heavy burden, but the cost of ignorance is far greater."
                </p>
                <p className="font-label text-[0.6rem] uppercase tracking-tighter mt-2 text-primary">Chief Investigator — Memo 01</p>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#13231e] py-12 mt-32 absolute left-0 right-0">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto gap-4">
          <div className="text-lg font-headline text-[#e9c176]">Investigative Editorial</div>
          <div className="flex flex-wrap justify-center gap-8 font-label text-[0.75rem] tracking-widest uppercase">
            <Link href="#" className="text-[#d4e7df] opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="text-[#d4e7df] opacity-60 hover:opacity-100 transition-opacity">Terms of Service</Link>
            <Link href="#" className="text-[#d4e7df] opacity-60 hover:opacity-100 transition-opacity">Shipping Intelligence</Link>
            <Link href="#" className="text-[#d4e7df] opacity-60 hover:opacity-100 transition-opacity">Contact Archive</Link>
          </div>
          <div className="text-[#d4e7df] opacity-40 font-label text-[0.6rem] tracking-widest uppercase text-center md:text-right">
            © 2024 Investigative Editorial. All Rights Reserved. Private Dossier Security Enabled.
          </div>
        </div>
      </footer>
    </main>
  );
}
