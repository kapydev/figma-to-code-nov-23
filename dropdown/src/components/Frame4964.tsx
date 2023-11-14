export default function Frame4964({ className = "" }: Frame4964Props) {
  return (
    <div
      className={`font-inter inline-flex flex-col items-center gap-y-6 rounded-[51px] bg-purple-100 px-5 pb-7 pt-14 text-left text-sm font-semibold tracking-normal text-purple-400 drop-shadow-lg ${className}`}
    >
      <img
        className="h-5 w-7"
        src="/assets/Frame4960.svg"
       />
      <img
        className="h-14 w-14"
        src="/assets/Frame4961.svg"
       />
      <div className="flex flex-col items-center gap-y-1 self-center rounded-[52px] border-4 border-solid border-indigo-600 bg-indigo-400/[0.03] px-4 pt-3.5 [box-shadow:inset_0px_1.7px_5px_0px_rgba(255,_255,_255,_0.15)]" >
        <img
          className="h-7 w-6 drop-shadow-lg"
          src="/assets/Vector.svg"
         />
        <img
          className="h-2.5 w-6 [filter:blur(13)]"
          src="/assets/Subtract.svg"
         />
      </div>
      <div className="flex items-center self-stretch rounded-[50px] border-8 border-solid border-indigo-900 py-9 px-6 [background:linear-gradient(185deg,_rgba(22,_4,_81,_1)_4%,_rgba(23,_9,_72,_1)_64%,_rgba(46,_19,_137,_1)),linear-gradient(198deg,_rgba(215,_205,_253,_0.95)_4%,_rgba(202,_192,_255,_1)_61%,_rgba(192,_173,_255,_1))]" >
        <span className="uppercase">END</span>
      </div>
    </div>
  );
}

interface Frame4964Props {
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
