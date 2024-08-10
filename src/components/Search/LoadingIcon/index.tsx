"use client";

import { useId } from "react";

export const LoadingIcon = ( props: React.ComponentPropsWithoutRef<"svg"> ) => {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <circle
        cx="10"
        cy="10"
        r="5.5"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="13"
          x2="9.5"
          y1="9"
          y2="15"
        >
          <stop stopColor="currentColor" />
          <stop
            offset="1"
            stopColor="currentColor"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
