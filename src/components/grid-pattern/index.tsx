import { useId } from "react";

export function GridPattern( {
  height,
  squares,
  width,
  x,
  y,
  ...props
}: {
  height: number
  squares: [x: number, y: number][]
  width: number
  x: number | string
  y: number | string
} & React.ComponentPropsWithoutRef<"svg"> ) {
  const patternId = useId();

  return (
    <svg aria-hidden="true"
      {...props}>
      <defs>
        <pattern
          height={height}
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={width}
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`}
            fill="none" />
        </pattern>
      </defs>
      <rect
        fill={`url(#${patternId})`}
        height="100%"
        strokeWidth={0}
        width="100%"
      />
      {squares && (
        <svg className="overflow-visible"
          x={x}
          y={y}>
          {squares.map( ( [x, y] ) => (
            <rect
              height={height + 1}
              key={`${x}-${y}`}
              strokeWidth="0"
              width={width + 1}
              x={x * width}
              y={y * height}
            />
          ) )}
        </svg>
      )}
    </svg>
  );
}
