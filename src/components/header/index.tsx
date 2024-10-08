"use client";

import { Logo } from "@/components/Logo";
import { MobileSearch, Search } from "@/components/Search";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  MobileNavigationProvider,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from "@/context";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";

function TopLevelNavItem( {
  children,
  href,
}: {
  children: React.ReactNode
  href: string
} ) {
  return (
    <li>
      <Link
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}

export const Header = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<typeof motion.div>
>( function Header( { className, ...props }, ref ) {
  const { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
  const isInsideMobileNavigation = useIsInsideMobileNavigation();

  const { scrollY } = useScroll();
  const bgOpacityLight = useTransform( scrollY, [ 0, 72 ], [ 0.5, 0.9 ] );
  const bgOpacityDark = useTransform( scrollY, [ 0, 72 ], [ 0.2, 0.8 ] );

  return (
    <motion.div
      {...props}
      className={clsx(
        className,
        "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80",
        !isInsideMobileNavigation &&
          "backdrop-blur-sm lg:left-72 xl:left-80 dark:backdrop-blur",
        isInsideMobileNavigation
          ? "bg-white dark:bg-zinc-900"
          : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]",
      )}
      ref={ref}
      style={
        {
          "--bg-opacity-dark": bgOpacityDark,
          "--bg-opacity-light": bgOpacityLight,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          "absolute inset-x-0 top-full h-px transition",
          ( isInsideMobileNavigation || !mobileNavIsOpen ) &&
            "bg-zinc-900/7.5 dark:bg-white/7.5",
        )}
      />
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigationProvider />
        <Link
          aria-label="Home"
          href="/"
        >
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul
            className="flex items-center gap-8"
            role="list"
          >
            <TopLevelNavItem href="/">API</TopLevelNavItem>
            <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
            <TopLevelNavItem href="#">Support</TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  );
} );
