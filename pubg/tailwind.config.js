module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx,html,svelte}",
    "\\tmp\\temp-project-folder-8\\**\\*.html",
  ],
  theme: {
    extend: {
      fontFamily: { open_sans: "Open Sans" },
      backgroundImage: {
        "game-2image":
          "url(http://localhost:54321/storage/v1/object/public/firejet-converted-images/images/b1096a4259bb523ce321f850f3deee3dae23fcfd.webp)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
