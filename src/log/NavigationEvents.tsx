'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `url: ${pathname}?${searchParams}`;
    localStorage.setItem('url', `${pathname}?${searchParams}`);
    console.log(url);
    // You can now use the current URL
    // ...
    // [pathname, searchParams]
  }, []);

  return null;
}
