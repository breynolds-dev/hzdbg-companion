"use client";

import { Suspense } from "react";

import { useSearchProps } from "../hooks";
import { SearchDialog } from "../SearchDialog";
import { SearchIcon } from "../SearchIcon";

export function MobileSearch() {
  const { buttonProps, dialogProps } = useSearchProps();

  return (
    <div className="contents lg:hidden">
      <button
        aria-label="Find something..."
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none lg:hidden dark:hover:bg-white/5"
        type="button"
        {...buttonProps}
      >
        <SearchIcon className="h-5 w-5 stroke-zinc-900 dark:stroke-white" />
      </button>
      <Suspense fallback={null}>
        <SearchDialog
          className="lg:hidden"
          {...dialogProps}
        />
      </Suspense>
    </div>
  );
}
