// src/app/layout.js
import './globals.css';
import { Inter, Newsreader, Manrope } from 'next/font/google';
import Navbar from '../components/Navbar';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-headline',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Sereen Morgan-Murray | Beyond the Badge',
  description: 'Regulatory consulting playbook and services by former FDA investigator.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${newsreader.variable} ${manrope.variable}`}> 
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
