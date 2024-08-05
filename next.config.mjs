import nextMDX from '@next/mdx'

import { recmaPlugins } from './tools/mdx/recma.mjs'
import { remarkPlugins } from './tools/mdx/remark.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'mdx'
  ],
}

export default withMDX(nextConfig)
