"use client";

import { Tag } from "@/components/Tag";
import { useSectionStore } from "@/context/SectionProvider";
import { remToPx } from "@/lib/remToPx";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function AnchorIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3" />
    </svg>
  );
}

function Eyebrow( { label, tag }: { label?: string; tag?: string } ) {
  if ( !tag && !label ) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-3">
      {tag && <Tag>{tag}</Tag>}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
      )}
      {label && (
        <span className="font-mono text-xs text-zinc-400">{label}</span>
      )}
    </div>
  );
}

function Anchor( {
  children,
  id,
  inView,
}: {
  children: React.ReactNode
  id: string
  inView: boolean
} ) {
  return (
    <Link
      className="group text-inherit no-underline hover:text-inherit"
      href={`#${id}`}
    >
      {inView && (
        <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
          <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
            <AnchorIcon className="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white" />
          </div>
        </div>
      )}
      {children}
    </Link>
  );
}

export function Heading<Level extends 2 | 3>( {
  anchor = true,
  children,
  label,
  level,
  tag,
  ...props
}: {
  anchor?: boolean
  id: string
  label?: string
  level?: Level
  tag?: string
} & React.ComponentPropsWithoutRef<`h${Level}`> ) {
  level = level ?? ( 2 as Level );
  const Component = `h${level}` as "h2" | "h3";
  const ref = useRef<HTMLHeadingElement>( null );
  const registerHeading = useSectionStore( ( s ) => s.registerHeading );

  const inView = useInView( ref, {
    amount: "all",
    margin: `${remToPx( -3.5 )}px 0px 0px 0px`,
  } );

  useEffect( () => {
    if ( level === 2 ) {
      registerHeading( { id: props.id, offsetRem: tag ?? label ? 8 : 6, ref } );
    }
  } );

  return (
    <>
      <Eyebrow
        label={label}
        tag={tag}
      />
      <Component
        className={tag ?? label ? "mt-2 scroll-mt-32" : "scroll-mt-24"}
        ref={ref}
        {...props}
      >
        {anchor ? (
          <Anchor
            id={props.id}
            inView={inView}
          >
            {children}
          </Anchor>
        ) : (
          children
        )}
      </Component>
    </>
  );
}