"use client";

import { Result } from "@/mdx/search.mjs";
import { type AutocompleteCollection } from "@algolia/autocomplete-core";
import clsx from "clsx";
import {
  Fragment,
  useId,
} from "react";

import { navigationItems } from "../../Navigation";
import { type Autocomplete } from "../constants";
import { HighlightQuery } from "../HighlightQuery";

export const SearchResult = ( {
  autocomplete,
  collection,
  query,
  result,
  resultIndex,
}: {
  autocomplete: Autocomplete
  collection: AutocompleteCollection<Result>
  query: string
  result: Result
  resultIndex: number
} ) => {
  const id = useId();

  const sectionTitle = navigationItems.find( ( section ) =>
    section.links.find( ( link ) => link.href === result.url.split( "#" )[0] ),
  )?.title;
  const hierarchy = [ sectionTitle, result.pageTitle ].filter(
    ( x ): x is string => typeof x === "string",
  );

  return (
    <li
      aria-labelledby={`${id}-hierarchy ${id}-title`}
      className={clsx(
        "group block cursor-default px-4 py-3 aria-selected:bg-zinc-50 dark:aria-selected:bg-zinc-800/50",
        resultIndex > 0 && "border-t border-zinc-100 dark:border-zinc-800",
      )}
      {...autocomplete.getItemProps( {
        item: result,
        source: collection.source,
      } )}
    >
      <div
        aria-hidden="true"
        className="text-sm font-medium text-zinc-900 group-aria-selected:text-sky-500 dark:text-white"
        id={`${id}-title`}
      >
        <HighlightQuery
          query={query}
          text={result.title}
        />
      </div>
      {hierarchy.length > 0 && (
        <div
          aria-hidden="true"
          className="mt-1 truncate whitespace-nowrap text-2xs text-zinc-500"
          id={`${id}-hierarchy`}
        >
          {hierarchy.map( ( item, itemIndex, items ) => (
            <Fragment key={itemIndex}>
              <HighlightQuery
                query={query}
                text={item}
              />
              <span
                className={
                  itemIndex === items.length - 1
                    ? "sr-only"
                    : "mx-2 text-zinc-300 dark:text-zinc-700"
                }
              >
                /
              </span>
            </Fragment>
          ) )}
        </div>
      )}
    </li>
  );
};
