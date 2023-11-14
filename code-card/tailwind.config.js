module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx,html,svelte}",
    "\\tmp\\temp-project-folder-8\\**\\*.html",
  ],
  theme: {
    extend: {
      fontFamily: { roboto_mono: "Roboto Mono", inter: "Inter" },
      backgroundImage: {
        "philip-raw-hi-fidelity-square-1":
          "url(http://localhost:54321/storage/v1/object/public/firejet-converted-images/images/906105488a46ecbbd2a5d341d8f6bba878d7f422.webp)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
