import { Heading } from "@/components/Heading";
import { Prose } from "@/components/Prose";
import clsx from "clsx";

export function wrapper( { children }: { children: React.ReactNode } ) {
  return (
    <article className="flex h-full flex-col pb-10 pt-16">
      <Prose className="flex-auto">{children}</Prose>
    </article>
  );
}

export const h2 = function H2(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, "level">,
) {
  return (
    <Heading
      level={2}
      {...props}
    />
  );
};

function InfoIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      {...props}
    >
      <circle
        cx="8"
        cy="8"
        r="8"
        strokeWidth="0"
      />
      <path
        d="M6.75 7.75h1.5v3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="8"
        cy="4"
        fill="none"
        r=".5"
      />
    </svg>
  );
}

export function Note( { children }: { children: React.ReactNode } ) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-sky-500/20 bg-sky-50/50 p-4 leading-6 text-sky-900 dark:border-sky-500/30 dark:bg-sky-500/5 dark:text-sky-200 dark:[--tw-prose-links-hover:theme(colors.sky.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-sky-500 stroke-white dark:fill-sky-200/20 dark:stroke-sky-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

export function Row( { children }: { children: React.ReactNode } ) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  );
}

export function Col( {
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
} ) {
  return (
    <div
      className={clsx(
        "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
        sticky && "xl:sticky xl:top-24",
      )}
    >
      {children}
    </div>
  );
}

export function Properties( { children }: { children: React.ReactNode } ) {
  return (
    <div className="my-6">
      <ul
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
        role="list"
      >
        {children}
      </ul>
    </div>
  );
}

export function Property( {
  children,
  name,
  type,
}: {
  children: React.ReactNode
  name: string
  type?: string
} ) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {type}
            </dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  );
}
