/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
"use client";

import { Tag } from "@/components/Tag";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { create } from "zustand";

const languageNames: Record<string, string> = {
  go: "Go",
  javascript: "JavaScript",
  js: "JavaScript",
  php: "PHP",
  python: "Python",
  ruby: "Ruby",
  ts: "TypeScript",
  typescript: "TypeScript",
};

function getPanelTitle( {
  language,
  title,
}: {
  language?: string
  title?: string
} ) {
  if ( title ) {
    return title;
  }
  if ( language && language in languageNames ) {
    return languageNames[language];
  }
  return "Code";
}

function ClipboardIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
        strokeWidth="0"
      />
      <path
        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyButton( { code }: { code: string } ) {
  const [ copyCount, setCopyCount ] = useState( 0 );
  const copied = copyCount > 0;

  useEffect( () => {
    if ( copyCount > 0 ) {
      const timeout = setTimeout( () => setCopyCount( 0 ), 1000 );
      return () => {
        clearTimeout( timeout );
      };
    }
  }, [ copyCount ] );

  const copyCode = useCallback( () => {
    // eslint-disable-next-line no-void
    void window.navigator.clipboard
      .writeText( code )
      .then( () => {
        setCopyCount( ( count ) => count + 1 );
      } );
  }, [ code ] );

  return (
    <button
      className={clsx(
        "group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100",
        copied
          ? "bg-sky-400/10 ring-1 ring-inset ring-sky-400/20"
          : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5",
      )}
      onClick={copyCode}
      type="button"
    >
      <span
        aria-hidden={copied}
        className={clsx(
          "pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300",
          copied && "-translate-y-1.5 opacity-0",
        )}
      >
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx(
          "pointer-events-none absolute inset-0 flex items-center justify-center text-sky-400 transition duration-300",
          !copied && "translate-y-1.5 opacity-0",
        )}
      >
        Copied!
      </span>
    </button>
  );
}

function CodePanelHeader( { label, tag }: { label?: string; tag?: string } ) {
  if ( !tag && !label ) {
    return null;
  }

  return (
    <div className="flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-900 px-4 dark:border-b-white/5 dark:bg-white/1">
      {tag && (
        <div className="dark flex">
          <Tag variant="small">{tag}</Tag>
        </div>
      )}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
      )}
      {label && (
        <span className="font-mono text-xs text-zinc-400">{label}</span>
      )}
    </div>
  );
}

function CodePanel( {
  children,
  code,
  label,
  tag,
}: {
  children: React.ReactNode
  code?: string
  label?: string
  tag?: string
} ) {
  const child = Children.only( children );

  if ( isValidElement( child ) ) {
    tag = child.props.tag ?? tag;
    label = child.props.label ?? label;
    code = child.props.code ?? code;
  }

  if ( !code ) {
    throw new Error(
      "`CodePanel` requires a `code` prop, or a child with a `code` prop.",
    );
  }

  return (
    <div className="group dark:bg-white/2.5">
      <CodePanelHeader
        label={label}
        tag={tag}
      />
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-xs text-white">{children}</pre>
        <CopyButton code={code} />
      </div>
    </div>
  );
}

function CodeGroupHeader( {
  children,
  selectedIndex,
  title,
}: {
  children: React.ReactNode
  selectedIndex: number
  title: string
} ) {
  const hasTabs = Children.count( children ) > 1;

  if ( !title && !hasTabs ) {
    return null;
  }

  return (
    <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
      {title && (
        <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
          {title}
        </h3>
      )}
      {hasTabs && (
        <TabList className="-mb-px flex gap-4 text-xs font-medium">
          {Children.map( children, ( child, childIndex ) => (
            <Tab
              className={clsx(
                "border-b py-3 transition ui-not-focus-visible:outline-none",
                childIndex === selectedIndex
                  ? "border-sky-500 text-sky-400"
                  : "border-transparent text-zinc-400 hover:text-zinc-300",
              )}
            >
              {getPanelTitle( isValidElement( child ) ? child.props : {} )}
            </Tab>
          ) )}
        </TabList>
      )}
    </div>
  );
}

function CodeGroupPanels( {
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof CodePanel> ) {
  const hasTabs = Children.count( children ) > 1;

  if ( hasTabs ) {
    return (
      <TabPanels>
        {Children.map( children, ( child ) => (
          <TabPanel>
            <CodePanel {...props}>{child}</CodePanel>
          </TabPanel>
        ) )}
      </TabPanels>
    );
  }

  return <CodePanel {...props}>{children}</CodePanel>;
}

function usePreventLayoutShift() {
  const positionRef = useRef<HTMLElement>( null );
  const rafRef = useRef<number>();

  useEffect( () => {
    return () => {
      if ( typeof rafRef.current !== "undefined" ) {
        window.cancelAnimationFrame( rafRef.current );
      }
    };
  }, [] );

  return {
    positionRef,
    preventLayoutShift( callback: () => void ) {
      if ( !positionRef.current ) {
        return;
      }

      const initialTop = positionRef.current.getBoundingClientRect().top;

      callback();

      rafRef.current = window.requestAnimationFrame( () => {
        const newTop =
          positionRef.current?.getBoundingClientRect().top ?? initialTop;
        window.scrollBy( 0, newTop - initialTop );
      } );
    },
  };
}

const usePreferredLanguageStore = create<{
  addPreferredLanguage: ( language: string ) => void
  preferredLanguages: string[]
}>()( ( set ) => ( {
  addPreferredLanguage: ( language ) =>
    set( ( state ) => ( {
      preferredLanguages: [
        ...state.preferredLanguages.filter(
          ( preferredLanguage ) => preferredLanguage !== language,
        ),
        language,
      ],
    } ) ),
  preferredLanguages: [],
} ) );

function useTabGroupProps( availableLanguages: string[] ) {
  const { addPreferredLanguage, preferredLanguages } = usePreferredLanguageStore();
  const [ selectedIndex, setSelectedIndex ] = useState( 0 );
  const activeLanguage = [ ...availableLanguages ].sort(
    ( a, z ) => preferredLanguages.indexOf( z ) - preferredLanguages.indexOf( a ),
  )[0];
  const languageIndex = availableLanguages.indexOf( activeLanguage );
  const newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
  if ( newSelectedIndex !== selectedIndex ) {
    setSelectedIndex( newSelectedIndex );
  }

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { positionRef, preventLayoutShift } = usePreventLayoutShift();

  return {
    as: "div" as const,
    onChange: ( newSelectedIndex: number ) => {
      preventLayoutShift( () =>
        addPreferredLanguage( availableLanguages[newSelectedIndex] ),
      );
    },
    ref: positionRef,
    selectedIndex,
  };
}

const CodeGroupContext = createContext( false );

export function CodeGroup( {
  children,
  title,
  ...props
}: { title: string } & React.ComponentPropsWithoutRef<typeof CodeGroupPanels> ) {
  const languages =
    Children.map( children, ( child ) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      getPanelTitle( isValidElement( child ) ? child.props : {} ),
    ) ?? [];
  const tabGroupProps = useTabGroupProps( languages );
  const hasTabs = Children.count( children ) > 1;

  const containerClassName =
    "my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10";
  const header = (
    <CodeGroupHeader
      selectedIndex={tabGroupProps.selectedIndex}
      title={title}
    >
      {children}
    </CodeGroupHeader>
  );
  const panels = <CodeGroupPanels {...props}>{children}</CodeGroupPanels>;

  return (
    <CodeGroupContext.Provider value>
      {hasTabs ? (
        <TabGroup
          {...tabGroupProps}
          className={containerClassName}
        >
          <div className="not-prose">
            {header}
            {panels}
          </div>
        </TabGroup>
      ) : (
        <div className={containerClassName}>
          <div className="not-prose">
            {header}
            {panels}
          </div>
        </div>
      )}
    </CodeGroupContext.Provider>
  );
}

export function Code( {
  children,
  ...props
}: React.ComponentPropsWithoutRef<"code"> ) {
  const isGrouped = useContext( CodeGroupContext );

  if ( isGrouped ) {
    if ( typeof children !== "string" ) {
      throw new Error(
        "`Code` children must be a string when nested inside a `CodeGroup`.",
      );
    }
    return (
      <code
        {...props}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  return <code {...props}>{children}</code>;
}

export function Pre( {
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof CodeGroup> ) {
  const isGrouped = useContext( CodeGroupContext );

  if ( isGrouped ) {
    return children;
  }

  return <CodeGroup {...props}>{children}</CodeGroup>;
}
