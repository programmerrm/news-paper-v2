import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "website-1dc851d6.yfs.cjf.mybluehost.me",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
