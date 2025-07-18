/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com'],
  },
  experimental: {
    mdxRs: false,
  },
}

module.exports = withMDX(nextConfig)
