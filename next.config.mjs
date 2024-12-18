/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";

import { recmaPlugins } from "./src/mdx/recma.mjs";
import { rehypePlugins } from "./src/mdx/rehype.mjs";
import { remarkPlugins } from "./src/mdx/remark.mjs";
import withSearch from "./src/mdx/search.mjs";

const withMDX = nextMDX( {
  options: {
    recmaPlugins,
    rehypePlugins,
    remarkPlugins,
  },
} );

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/hzdbg-companion",
  images: {
    unoptimized: true,
  },
  output: "standalone",
  pageExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "mdx",
  ],
};

export default withSearch( withMDX( nextConfig ) );
