module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx,html,svelte}",
    "\\tmp\\temp-project-folder-8\\**\\*.html",
  ],
  theme: {
    extend: {
      fontFamily: { montserrat: "Montserrat" },
      backgroundImage: {
        photo:
          "url(http://localhost:54321/storage/v1/object/public/firejet-converted-images/images/a4f47651cedd930f1d216be79241d8eaf63659e5.webp)",
        "photo-1":
          "url(http://localhost:54321/storage/v1/object/public/firejet-converted-images/images/71a0e9f2173ba383ebfd3fd158d53ce39ccf1e32.webp)",
        "image-10":
          "url(FLAG_REPLACE_CONTENT_FLAG=IMG=70f4ed2c1262d910f9eaef1ab3d8845dc24afa9)",
        cta1: 'url("/assets/Subtract.svg")',
      },
    },
  },
  plugins: [],
  mode: "jit",
};
