"use client";

import { type Result } from "@/mdx/search.mjs";
import { type AutocompleteApi } from "@algolia/autocomplete-core";

export type Autocomplete = AutocompleteApi<
  Result,
  React.SyntheticEvent,
  React.MouseEvent,
  React.KeyboardEvent
>;
