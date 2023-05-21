/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  reactStrictMode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
 
module.exports = withNextra()