"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import clsx from "clsx";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";
import {
  useEffect,
  useRef,
} from "react";

import { useAutocomplete } from "../hooks";
import { SearchInput } from "../SearchInput";
import { SearchResults } from "../SearchResults";

export const SearchDialog = ( {
  className,
  open,
  setOpen,
}: {
  className?: string
  open: boolean
  setOpen: ( open: boolean ) => void
} ) => {
  const formRef = useRef<React.ElementRef<"form">>( null );
  const panelRef = useRef<React.ElementRef<"div">>( null );
  const inputRef = useRef<React.ElementRef<typeof SearchInput>>( null );
  const { autocomplete, autocompleteState } = useAutocomplete( {
    close() {
      setOpen( false );
    },
  } );
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect( () => {
    setOpen( false );
  }, [ pathname, searchParams, setOpen ] );

  useEffect( () => {
    if ( open ) {
      return;
    }

    function onKeyDown( event: KeyboardEvent ) {
      if ( event.key === "k" && ( event.metaKey || event.ctrlKey ) ) {
        event.preventDefault();
        setOpen( true );
      }
    }

    window.addEventListener( "keydown", onKeyDown );

    return () => {
      window.removeEventListener( "keydown", onKeyDown );
    };
  }, [ open, setOpen ] );

  return (
    <Dialog
      className={clsx( "fixed inset-0 z-50", className )}
      onClose={() => {
        setOpen( false );
        autocomplete.setQuery( "" );
      }}
      open={open}
    >
      <DialogBackdrop
        className="fixed inset-0 bg-zinc-400/25 backdrop-blur-sm data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/40"
        transition
      />

      <div className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
        <DialogPanel
          className="mx-auto transform-gpu overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 ring-zinc-900/7.5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:max-w-xl dark:bg-zinc-900 dark:ring-zinc-800"
          transition
        >
          <div {...autocomplete.getRootProps( {} )}>
            <form
              ref={formRef}
              {...autocomplete.getFormProps( {
                inputElement: inputRef.current,
              } )}
            >
              <SearchInput
                autocomplete={autocomplete}
                autocompleteState={autocompleteState}
                onClose={() => setOpen( false )}
                ref={inputRef}
              />
              <div
                className="border-t border-zinc-200 bg-white empty:hidden dark:border-zinc-100/5 dark:bg-white/2.5"
                ref={panelRef}
                {...autocomplete.getPanelProps( {} )}
              >
                {autocompleteState.isOpen && (
                  <SearchResults
                    autocomplete={autocomplete}
                    collection={autocompleteState.collections[0]}
                    query={autocompleteState.query}
                  />
                )}
              </div>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
