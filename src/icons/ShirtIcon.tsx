export function ShirtIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M12.5 1.5s0 2-2.5 2-2.5-2-2.5-2h-2L2.207 4.793a1 1 0 0 0 0 1.414L4.5 8.5v10h11v-10l2.293-2.293a1 1 0 0 0 0-1.414L14.5 1.5h-2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
