"use client";

import {
  remToPx,
} from "@/lib/remToPx";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  createStore,
  type StoreApi,
  useStore,
} from "zustand";

export interface Section {
  headingRef?: React.RefObject<HTMLHeadingElement>
  id: string
  offsetRem?: number
  tag?: string
  title: string
}

interface SectionState {
  registerHeading: ( {
    id,
    offsetRem,
    ref,
  }: {
    id: string
    offsetRem: number
    ref: React.RefObject<HTMLHeadingElement>
  } ) => void
  sections: Section[]
  setVisibleSections: ( visibleSections: string[] ) => void
  visibleSections: string[]
}

function createSectionStore( sections: Section[] ) {
  return createStore<SectionState>()( ( set ) => ( {
    registerHeading: ( { id, offsetRem, ref } ) =>
      set( ( state ) => {
        return {
          sections: state.sections.map( ( section ) => {
            if ( section.id === id ) {
              return {
                ...section,
                headingRef: ref,
                offsetRem,
              };
            }
            return section;
          } ),
        };
      } ),
    sections,
    setVisibleSections: ( visibleSections ) =>
      set( ( state ) =>
        state.visibleSections.join() === visibleSections.join()
          ? {}
          : { visibleSections },
      ),
    visibleSections: [],
  } ) );
}

function useVisibleSections( sectionStore: StoreApi<SectionState> ) {
  const setVisibleSections = useStore( sectionStore, ( s ) => s.setVisibleSections );
  const sections = useStore( sectionStore, ( s ) => s.sections );

  useEffect( () => {
    function checkVisibleSections() {
      const { innerHeight, scrollY } = window;
      const newVisibleSections = [];

      for (
        let sectionIndex = 0;
        sectionIndex < sections.length;
        sectionIndex++
      ) {
        const { headingRef, id, offsetRem = 0 } = sections[sectionIndex];

        if ( !headingRef?.current ) {
          continue;
        }

        const offset = remToPx( offsetRem );
        const top = headingRef.current.getBoundingClientRect().top + scrollY;

        if ( sectionIndex === 0 && top - offset > scrollY ) {
          newVisibleSections.push( "_top" );
        }

        const nextSection = sections[sectionIndex + 1];
        const bottom =
          ( nextSection?.headingRef?.current?.getBoundingClientRect().top ??
            Infinity ) +
          scrollY -
          remToPx( nextSection?.offsetRem ?? 0 );

        if (
          ( top > scrollY && top < scrollY + innerHeight ) ||
          ( bottom > scrollY && bottom < scrollY + innerHeight ) ||
          ( top <= scrollY && bottom >= scrollY + innerHeight )
        ) {
          newVisibleSections.push( id );
        }
      }

      setVisibleSections( newVisibleSections );
    }

    const raf = window.requestAnimationFrame( () => checkVisibleSections() );
    window.addEventListener( "scroll", checkVisibleSections, { passive: true } );
    window.addEventListener( "resize", checkVisibleSections );

    return () => {
      window.cancelAnimationFrame( raf );
      window.removeEventListener( "scroll", checkVisibleSections );
      window.removeEventListener( "resize", checkVisibleSections );
    };
  }, [ setVisibleSections, sections ] );
}

const SectionStoreContext = createContext<null | StoreApi<SectionState>>( null );
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function SectionProvider( {
  children,
  sections,
}: {
  children: React.ReactNode
  sections: Section[]
} ) {
  const [ sectionStore ] = useState( () => createSectionStore( sections ) );

  useVisibleSections( sectionStore );

  useIsomorphicLayoutEffect( () => {
    sectionStore.setState( { sections } );
  }, [ sectionStore, sections ] );

  return (
    <SectionStoreContext.Provider value={sectionStore}>
      {children}
    </SectionStoreContext.Provider>
  );
}

export function useSectionStore<T>( selector: ( state: SectionState ) => T ) {
  const store = useContext( SectionStoreContext );
  // @ts-expect-error Dunno why this yells with the ts compiler, FIXME: fix it later
  return useStore( store, selector );
}
