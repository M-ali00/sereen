// src/app/layout.js
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Sereen Morgan-Murray | Beyond the Badge',
  description: 'Regulatory consulting playbook and services by former FDA investigator.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark"> 
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
