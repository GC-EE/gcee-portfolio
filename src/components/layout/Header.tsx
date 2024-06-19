import Link from 'next/link';
import MobileNav from '@/components/layout/MobileNav';
import { Button } from '@/components/ui/button';

// components
import Nav from './Nav';

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
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
