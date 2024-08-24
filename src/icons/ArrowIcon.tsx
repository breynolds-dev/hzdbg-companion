export function ArrowIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
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
