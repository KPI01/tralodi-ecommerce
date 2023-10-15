
/** @type {import('next').NextConfig} */
require('dotenv').config

const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_URL: process.env.REACT_APP_URL
  }
}

module.exports = nextConfig
