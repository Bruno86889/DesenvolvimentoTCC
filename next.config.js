/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options:{
      remarkPlugins: [],
      rehypePlugins: [],
      providerImportSource: '@mdx-js/react'
    },
  })

module.exports = withMDX({
  pageExtensions: ['md','mdx','ts','tsx','js','jsx'],
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
})
