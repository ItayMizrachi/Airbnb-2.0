/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:'pk.eyJ1IjoiaXRheW1pejk4IiwiYSI6ImNsbXQ2MTZuaTAyN28yanBlcXhqdG85ZzEifQ.9m2ipPtFzr6zgrvfIlvjBg'
  }
};

module.exports = nextConfig;
