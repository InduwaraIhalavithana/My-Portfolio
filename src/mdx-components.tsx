import type { MDXComponents } from "mdx/types";

// Required by @next/mdx in the App Router. Shared MDX styling goes here.
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
