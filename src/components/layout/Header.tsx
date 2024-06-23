'use client';
import Link from 'next/link';
import MobileNav from '@/components/layout/MobileNav';
import { Button } from '@/components/ui/button';

// components
import Nav from './Nav';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`sticky top-0 z-30 py-8 text-white transition-all duration-300 xl:py-12 ${
        isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href={'/'}>
          <h1 className="text-4xl font-semibold">
            Jake<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href={'/contact'}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
