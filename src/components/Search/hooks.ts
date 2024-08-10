"use client";

import { type Result } from "@/mdx/search.mjs";
import { type EmptyObject } from "@/types";
import {
  type AutocompleteApi,
  type AutocompleteState,
  createAutocomplete,
} from "@algolia/autocomplete-core";
import {
  useRouter,
} from "next/navigation";
import {
  useCallback,
  useId,
  useRef,
  useState,
} from "react";

type Autocomplete = AutocompleteApi<
  Result,
  React.SyntheticEvent,
  React.MouseEvent,
  React.KeyboardEvent
>;

export const useAutocomplete = ( { close }: { close: () => void } ) => {
  const id = useId();
  const router = useRouter();
  const [ autocompleteState, setAutocompleteState ] = useState<AutocompleteState<Result> | EmptyObject>( {} );

  function navigate( { itemUrl }: { itemUrl?: string } ) {
    if ( !itemUrl ) {
      return;
    }

    router.push( itemUrl );

    if (
      itemUrl ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      close();
    }
  }

  const [ autocomplete ] = useState<Autocomplete>( () =>
    createAutocomplete<
      Result,
      React.SyntheticEvent,
      React.MouseEvent,
      React.KeyboardEvent
    >( {
      defaultActiveItemId: 0,
      getSources( { query } ) {
        return import( "@/mdx/search.mjs" ).then( ( { search } ) => {
          return [
            {
              getItems() {
                return search( query, { limit: 5 } );
              },
              getItemUrl( { item } ) {
                return item.url;
              },
              onSelect: navigate,
              sourceId: "documentation",
            },
          ];
        } );
      },
      id,
      navigator: {
        navigate,
      },
      onStateChange( { state } ) {
        setAutocompleteState( state );
      },
      placeholder: "Find something...",
      shouldPanelOpen( { state } ) {
        return state.query !== "";
      },
    } ),
  );

  return { autocomplete, autocompleteState };
};

export const useSearchProps = () => {
  const buttonRef = useRef<React.ElementRef<"button">>( null );
  const [ open, setOpen ] = useState( false );

  return {
    buttonProps: {
      onClick() {
        setOpen( true );
      },
      ref: buttonRef,
    },
    dialogProps: {
      open,
      setOpen: useCallback(
        ( open: boolean ) => {
          const { height = 0, width = 0 } =
            buttonRef.current?.getBoundingClientRect() ?? {};
          if ( !open || ( width !== 0 && height !== 0 ) ) {
            setOpen( open );
          }
        },
        [ setOpen ],
      ),
    },
  };
};
