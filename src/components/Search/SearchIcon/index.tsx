"use client";

export const SearchIcon = ( props: React.ComponentPropsWithoutRef<"svg"> ) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
