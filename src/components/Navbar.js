'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Buy Book', href: '/buy-book' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(212,231,223,0.06)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <span className="text-xl font-headline italic text-amber-200 tracking-widest uppercase">
          SEREEN MORGAN-MURRAY
        </span>
        <div className="hidden md:flex gap-8 items-center font-label text-[10px] tracking-widest uppercase">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`${isActive ? 'text-amber-400 font-bold border-b border-amber-400/30 pb-1' : 'text-stone-300 hover:text-amber-200 transition-colors'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <Link href="/checkout" className="burnished-gold-gradient text-on-primary font-body font-semibold px-6 py-2 rounded-md transition-transform active:scale-95 text-xs uppercase tracking-wider">
          Order Now
        </Link>
      </div>
    </nav>
  );
}
