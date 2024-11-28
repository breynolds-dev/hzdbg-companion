"use client";

import Highlighter from "react-highlight-words";

export const HighlightQuery = ( {
  query,
  text,
}: {
  query: string;
  text: string
} ) => {
  return (
    <Highlighter
      autoEscape
      highlightClassName="underline bg-transparent text-sky-500"
      searchWords={[ query ]}
      textToHighlight={text}
    />
  );
};
