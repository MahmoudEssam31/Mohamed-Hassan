import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/Mohamed-Hassan-Portfolio/",
});

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         staat: ['Staatliches', 'sans-serif'],
//       },
//     },
//   },
// }