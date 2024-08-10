"use client";

import {
  MobileNavigationDialog,
} from "@/components/Navigation";
import {
  createContext,
  Suspense,
  useContext,
} from "react";
import { create } from "zustand";

function MenuIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      viewBox="0 0 10 9"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  );
}

function XIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      viewBox="0 0 10 9"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  );
}

const IsInsideMobileNavigationContext = createContext( false );

export function useIsInsideMobileNavigation() {
  return useContext( IsInsideMobileNavigationContext );
}

export const useMobileNavigationStore = create<{
  close: () => void
  isOpen: boolean
  open: () => void
  toggle: () => void
}>()( ( set ) => ( {
  close: () => set( { isOpen: false } ),
  isOpen: false,
  open: () => set( { isOpen: true } ),
  toggle: () => set( ( state ) => ( { isOpen: !state.isOpen } ) ),
} ) );

export function MobileNavigationProvider() {
  const isInsideMobileNavigation = useIsInsideMobileNavigation();
  const { close, isOpen, toggle } = useMobileNavigationStore();
  const ToggleIcon = isOpen ? XIcon : MenuIcon;

  return (
    <IsInsideMobileNavigationContext.Provider value>
      <button
        aria-label="Toggle navigation"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        onClick={toggle}
        type="button"
      >
        <ToggleIcon className="w-2.5 stroke-zinc-900 dark:stroke-white" />
      </button>
      {!isInsideMobileNavigation && (
        <Suspense fallback={null}>
          <MobileNavigationDialog
            close={close}
            isOpen={isOpen}
          />
        </Suspense>
      )}
    </IsInsideMobileNavigationContext.Provider>
  );
}
