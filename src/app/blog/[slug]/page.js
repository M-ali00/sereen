import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../../../data/posts';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-40 pb-24 bg-surface min-h-screen">
      <article className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link href="/blog" className="inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors mb-12">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Insights
        </Link>

        {/* Header */}
        <header className="mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary font-label text-[9px] uppercase tracking-widest rounded-sm border border-primary/20">
              {post.category || post.filterCategory}
            </span>
            <time className="font-label text-[10px] uppercase tracking-widest text-outline">
              {post.date}
            </time>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl text-on-surface leading-tight mb-8">
            {post.title}
          </h1>
          <p className="font-body text-xl text-on-surface-variant opacity-80 leading-relaxed border-l-2 border-primary pl-6">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Image */}
        {post.image && (
          <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-16 border border-outline-variant shadow-lg">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="max-w-3xl mx-auto mt-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Footer actions */}
        <div className="max-w-3xl mx-auto mt-20 pt-12 border-t border-outline-variant flex justify-between items-center">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
            End of File
          </p>
          <a href="#" className="inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.2em] text-primary hover:text-primary-fixed-dim transition-colors">
            Return to Top <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </a>
        </div>
      </article>
    </main>
  );
}
