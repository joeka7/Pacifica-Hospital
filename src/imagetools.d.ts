// Image imports with `as=srcset` resolve to a srcset string (vite-imagetools).
declare module '*&as=srcset' {
  const srcset: string
  export default srcset
}
