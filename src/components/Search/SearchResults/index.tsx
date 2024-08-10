"use client";

import { Result } from "@/mdx/search.mjs";
import { type AutocompleteCollection } from "@algolia/autocomplete-core";

import { type Autocomplete } from "../constants";
import { NoResultsIcon } from "../NoResultsIcon";
import { SearchResult } from "../SearchResult";

export const SearchResults = ( {
  autocomplete,
  collection,
  query,
}: {
  autocomplete: Autocomplete
  collection: AutocompleteCollection<Result>
  query: string
} ) => {
  if ( collection.items.length === 0 ) {
    return (
      <div className="p-6 text-center">
        <NoResultsIcon className="mx-auto h-5 w-5 stroke-zinc-900 dark:stroke-zinc-600" />
        <p className="mt-2 text-xs text-zinc-700 dark:text-zinc-400">
          Nothing found for{" "}
          <strong className="break-words font-semibold text-zinc-900 dark:text-white">
            &lsquo;{query}&rsquo;
          </strong>
          . Please try again.
        </p>
      </div>
    );
  }

  return (
    <ul {...autocomplete.getListProps()}>
      {collection.items.map( ( result, resultIndex ) => (
        <SearchResult
          autocomplete={autocomplete}
          collection={collection}
          key={result.url}
          query={query}
          result={result}
          resultIndex={resultIndex}
        />
      ) )}
    </ul>
  );
};
