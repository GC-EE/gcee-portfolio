'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '@/lib/config';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => {
        return (
          <Link
            href={link.path}
            key={idx}
            className={`${link.path === pathname && 'border-b-2 border-accent text-accent'} font-medium capitalize transition-all hover:text-accent`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
