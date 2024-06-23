'use client';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { links } from '@/lib/config';
import { useEffect, useRef } from 'react';

const MobileNav = () => {
  const pathName = usePathname();
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1200) {
      }
    });
  });

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mb-40 mt-32 text-center text-2xl">
          <SheetClose asChild>
            <Link href={'/'}>
              <h1 className="text-4xl font-semibold">
                Jake<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center gap-8">
          {links?.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  className={`${link.path === pathName && 'border-b-2 border-accent text-accent'} text-xl capitalize transition-all hover:text-accent`}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
