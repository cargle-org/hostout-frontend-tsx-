const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  // basePath: "/hostout-fro"
  // assetPrefix: "/hostout-frontend-tsx-",

};
module.exports = nextConfig;
