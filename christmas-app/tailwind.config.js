import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
