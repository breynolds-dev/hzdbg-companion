"use client";

import { Tag } from "@/components";
import clsx from "clsx";
import Link from "next/link";

export const NavLink = ( {
  active = false,
  children,
  href,
  isAnchorLink = false,
  tag,
}: {
  active?: boolean
  children: React.ReactNode
  href: string
  isAnchorLink?: boolean
  tag?: string
} ) => {
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={clsx(
        "flex justify-between gap-2 py-1 pr-3 text-sm transition",
        isAnchorLink ? "pl-7" : "pl-4",
        active
          ? "text-zinc-900 dark:text-white"
          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
      )}
      href={href}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag
          color="zinc"
          variant="small"
        >
          {tag}
        </Tag>
      )}
    </Link>
  );
};
