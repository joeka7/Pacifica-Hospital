import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Smaller renditions of src/assets/images, generated at build time from
    // imports such as `photo.webp?w=640;960&as=srcset` (see src/content/images.ts).
    // Plain imports are left alone, so each source file ships unchanged.
    imagetools({
      defaultDirectives: (url) =>
        url.searchParams.has('w')
          ? new URLSearchParams({ format: 'webp', quality: '78', effort: '6' })
          : new URLSearchParams(),
    }),
  ],
})
