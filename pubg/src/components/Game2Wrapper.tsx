export default function Game2Wrapper({ className = "" }: Game2WrapperProps) {
  return (
    <div
      className={`font-open_sans inline-flex flex-row items-center text-left text-xl font-normal leading-[1.39] tracking-[-0.04em] text-zinc-300 ${className}`}
    >
      <div className="bg-game-2image relative flex h-96 w-80 rounded-3xl bg-cover bg-center" >
        <div className="absolute inset-x-0 -bottom-px flex items-center gap-x-40 rounded-b-3xl bg-white/10 py-6 pl-6 pr-8 backdrop-blur-[10px] [filter:blur(0)]" >
          <div>365 Streaming</div>
          <img
            className="h-3 w-3"
            src="/assets/Game2OnlineStatus.svg"
           />
        </div>
      </div>
    </div>
  );
}

interface Game2WrapperProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
