import { spawnSync } from "node:child_process";
import withSerwistInit from "@serwist/next";

const revision =
  spawnSync("git", ["rev-parse", "HEAD"], { encoding: "utf-8" }).stdout ??
  crypto.randomUUID();

const withSerwist = withSerwistInit({
  additionalPrecacheEntries: [{ url: "/~offline", revision }],
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  // Belangrijk: Serwist werkt met webpack-build. In dev wil je 'm vaak uit.
  disable: process.env.NODE_ENV !== "production",
});

export default withSerwist({
  // jouw Next config hier
});
