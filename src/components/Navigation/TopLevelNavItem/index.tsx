"use client";

import Link from "next/link";

export const TopLevelNavItem = ( {
  children,
  href,
}: {
  children: React.ReactNode
  href: string
} ) => {
  return (
    <li className="md:hidden">
      <Link
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};
