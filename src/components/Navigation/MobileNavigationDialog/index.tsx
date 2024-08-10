"use client";

import {
  Header,
  MainNavigation,
} from "@/components";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export const MobileNavigationDialog = ( {
  close,
  isOpen,
}: {
  close: () => void
  isOpen: boolean
} ) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialPathname = useRef( pathname ).current;
  const initialSearchParams = useRef( searchParams ).current;

  useEffect( () => {
    if ( pathname !== initialPathname || searchParams !== initialSearchParams ) {
      close();
    }
  }, [ pathname, searchParams, close, initialPathname, initialSearchParams ] );

  function onClickDialog( event: React.MouseEvent<HTMLDivElement> ) {
    if ( !( event.target instanceof HTMLElement ) ) {
      return;
    }

    const link = event.target.closest( "a" );
    if (
      link &&
      link.pathname + link.search + link.hash ===
        window.location.pathname + window.location.search + window.location.hash
    ) {
      close();
    }
  }

  return (
    <Dialog
      className="fixed inset-0 z-50 lg:hidden"
      onClickCapture={onClickDialog}
      onClose={close}
      open={isOpen}
    >
      <DialogBackdrop
        className="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/40"
        transition
      />

      <DialogPanel>
        <TransitionChild>
          <Header className="data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" />
        </TransitionChild>

        <TransitionChild>
          <motion.div
            className="fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 duration-500 ease-in-out data-[closed]:-translate-x-full min-[416px]:max-w-sm sm:px-6 sm:pb-10 dark:bg-zinc-900 dark:ring-zinc-800"
            layoutScroll
          >
            <MainNavigation />
          </motion.div>
        </TransitionChild>
      </DialogPanel>
    </Dialog>
  );
};
