import clsx from "clsx";

const variantStyles = {
  medium: "rounded-lg px-1.5 ring-1 ring-inset",
  small: "",
};

const colorStyles = {
  amber: {
    medium: "ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400",
    small: "text-amber-500",
  },
  emerald: {
    medium: "ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400",
    small: "text-emerald-500 dark:text-emerald-400",
  },
  rose: {
    medium: "ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400",
    small: "text-red-500 dark:text-rose-500",
  },
  sky: {
    medium: "ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400",
    small: "text-sky-500",
  },
  zinc: {
    medium: "ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400",
    small: "text-zinc-400 dark:text-zinc-500",
  },
};

const valueColorMap = {
  DELETE: "rose",
  GET: "emerald",
  POST: "sky",
  PUT: "amber",
} as Record<string, keyof typeof colorStyles>;

export function Tag( {
  children,
  color = valueColorMap[children] ?? "emerald",
  variant = "medium",
}: {
  children: keyof typeof valueColorMap & ( object | string )
  color?: keyof typeof colorStyles
  variant?: keyof typeof variantStyles
} ) {
  return (
    <span
      className={clsx(
        "font-mono text-[0.625rem] font-semibold leading-6",
        variantStyles[variant],
        colorStyles[color][variant],
      )}
    >
      {children}
    </span>
  );
}
