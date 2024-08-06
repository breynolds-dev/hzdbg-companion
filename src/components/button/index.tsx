import clsx from "clsx";
import Link from "next/link";

function ArrowIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const variantStyles = {
  filled: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400",
  outline: "rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white",
  primary: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300",
  secondary: "rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
  text: "text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500",
};

type ButtonProps = {
  arrow?: "left" | "right",
  variant?: keyof typeof variantStyles
} & (
  | ( { href?: undefined } & React.ComponentPropsWithoutRef<"button"> )
  | React.ComponentPropsWithoutRef<typeof Link>
);

export function Button( {
  arrow,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps ) {
  className = clsx(
    "inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition",
    variantStyles[variant],
    className,
  );

  const arrowIcon = (
    <ArrowIcon
      className={clsx(
        "mt-0.5 h-5 w-5",
        variant === "text" && "relative top-px",
        arrow === "left" && "-ml-1 rotate-180",
        arrow === "right" && "-mr-1",
      )}
    />
  );

  const inner = (
    <>
      {arrow === "left" && arrowIcon}
      {children}
      {arrow === "right" && arrowIcon}
    </>
  );

  if ( typeof props.href === "undefined" ) {
    return (
      <button
        className={className}
        {...props}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      className={className}
      {...props}
    >
      {inner}
    </Link>
  );
}
