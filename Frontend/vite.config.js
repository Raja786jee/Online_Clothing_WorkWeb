import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     // tailwind.config.js
//     (module.exports = {
//       content: ["./src/**/*.{html,js}"], // Adjust this based on your project structure
//       theme: {
//         extend: {
//           fontFamily: {
//             pacifico: ["Pacifico", "cursive"], // Add the Pacifico font
//           },
//         },
//       },
//     }),
//   ],
// });
