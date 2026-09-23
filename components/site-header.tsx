'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getStoredUser, type User } from '@/lib/mock-data';

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getStoredUser();
    setUser(currentUser);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('no2v-session');
    setUser(null);
    router.push('/login');
  };

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/assignments', label: 'Assignments' },
    { href: '/video-library', label: 'Video Library' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
            N
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">NO2V</p>
            <p className="text-sm font-medium text-slate-700">Learning Hub</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${pathname === link.href ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 md:block">
              {user.name}
            </div>
            <button
              onClick={handleLogout}
              className="rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
