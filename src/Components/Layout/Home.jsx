import React from 'react';
import Hero from '../Home/Hero';
import Footer from './Footer';
import Header from './Header';

export default function Home({ onAboutClick }) {
  return (
    <section className="bg-black h-screen overflow-hidden">
      <Header onAboutClick={onAboutClick} />
      <Hero />
      <Footer />
    </section>
  );
}
