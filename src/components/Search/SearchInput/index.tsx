"use client";

import { type Result } from "@/mdx/search.mjs";
import { type AutocompleteState } from "@algolia/autocomplete-core";
import clsx from "clsx";
import { forwardRef } from "react";

import { EmptyObject } from "../../../types";
import { type Autocomplete } from "../constants";
import { LoadingIcon } from "../LoadingIcon";
import { SearchIcon } from "../SearchIcon";

export const SearchInput = forwardRef<
  React.ElementRef<"input">,
  {
    autocomplete: Autocomplete
    autocompleteState: AutocompleteState<Result> | EmptyObject
    onClose: () => void
  }
>( function SearchInputWithoutRef( {
        autocomplete,
        autocompleteState,
        onClose,
      }, inputRef ) {
        const inputProps = autocomplete.getInputProps( { inputElement: null } );

        return (
          <div className="group relative flex h-12">
            <SearchIcon className="pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500" />
            <input
              className={clsx(
                "flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none sm:text-sm dark:text-white [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden",
                autocompleteState.status === "stalled" ? "pr-11" : "pr-4",
              )}
              data-autofocus
              ref={inputRef}
              {...inputProps}
              onKeyDown={( event ) => {
                if (
                  event.key === "Escape" &&
      !autocompleteState.isOpen &&
      autocompleteState.query === ""
                ) {
                  // In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
                  // bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
                  if ( document.activeElement instanceof HTMLElement ) {
                    document.activeElement.blur();
                  }

                  onClose();
                } else {
                  inputProps.onKeyDown( event );
                }
              }}
            />
            {autocompleteState.status === "stalled" && (
              <div className="absolute inset-y-0 right-3 flex items-center">
                <LoadingIcon className="h-5 w-5 animate-spin stroke-zinc-200 text-zinc-900 dark:stroke-zinc-800 dark:text-sky-400" />
              </div>
            )}
          </div>
        );
      } );
