import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/event-funkaar",
  images: { unoptimized: true },
};

export default nextConfig;
