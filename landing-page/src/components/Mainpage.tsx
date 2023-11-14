export default function Mainpage({ className = "" }: MainpageProps) {
  return (
    <div
      className={`font-montserrat inline-flex flex-col items-center bg-white text-left ${className}`}
    >
      <div className="flex flex-col items-end gap-y-1 self-stretch bg-slate-900 py-8 px-20 leading-[1.6] tracking-normal text-white" >
        <div className="flex items-center gap-x-6 text-sm font-medium">
          <div className="opacity-80">About</div>
          <div className="opacity-80">People</div>
          <div className="opacity-80">Сontacts Us</div>
          <div className="opacity-80">Careers</div>
        </div>
        <div className="flex items-center gap-x-8 self-stretch text-base font-bold" >
          <img
            className="h-11 w-40"
            src="/assets/Logo.svg"
           />
          <div className="flex pl-14">Governance & Compliance</div>
          <div>Corporate Services</div>
          <div>Private Client</div>
          <div>Fund Administration</div>
          <div>Structured Finance</div>
        </div>
      </div>
      <div className="flex items-center self-stretch pt-[3px]">
        <div className="bg-photo relative flex items-center self-stretch pr-[584px] pt-72 [background-size:133%_166%] [background-position:-0.25%_-0.2%]" >
          <div className="bg-photo absolute inset-0 h-[730px] w-[1368px] [background-size:133%_166%] [background-position:-0.25%_-0.2%]" />
          <div className="relative flex flex-col gap-y-6 self-stretch bg-slate-900 py-16 px-32" >
            <div className="w-[544px] text-[52px] font-bold leading-[1.3] tracking-normal" >
              <span className="text-white">{"Committed to your "}</span>
              <span className="text-green-300">success</span>
              <span className="text-blue-200" />
            </div>
            <div className="w-[544px] text-base font-medium leading-[1.6] tracking-normal text-white" >
              We provide innovative, commercially-minded solutions on a global scale that create value for you now and into the future.
            </div>
            <div className="flex flex-col items-center self-start pt-8 text-base font-bold leading-[1.6] tracking-[0.04em] text-slate-900" >
              <div className="relative flex h-16 w-56 border border-solid border-blue-200" >
                <div className="absolute -left-1 -top-1 flex items-center gap-x-2 bg-blue-200 py-5 px-9" >
                  <div>
                    <span className="uppercase">Contact us</span>
                  </div>
                  <div className="flex items-center self-stretch py-1.5 pl-[3px] pr-0.5" >
                    <img
                      className="h-3.5 w-5"
                      src="/assets/Union.svg"
                     />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center self-stretch pr-[509px] pb-44 pl-32 pt-80" >
        <div className="relative flex items-center self-stretch">
          <div className="bg-photo-1 relative flex h-[554px] w-[739px] bg-cover bg-center" >
            <div className="absolute right-[-389px] top-[-150px] flex flex-col gap-y-0.5 bg-gray-100 p-12" >
              <div className="relative w-96 text-[40px] font-bold leading-[1.3] tracking-normal text-slate-900" >
                Who is Signetas?
              </div>
              <div className="relative flex flex-col items-center self-stretch pt-6 text-lg font-medium leading-[1.6] tracking-normal text-slate-700" >
                <div className="w-[541px]">
                  {
                    "We deliver forward thinking, personalised and compliant solutions to the world’s leading financial services firms, global banks, UHNWIs, family offices and high net-worth individuals. We believe in creating a trusted partnership with our clients in order to deliver on their objectives and to create value over the long term. "
                  }
                  <span className="mb-2.5 block" />
                  Our team is comprised of industry professionals handpicked for their in-depth knowledge, global expertise and dedicated commitment to an uncompromising standard of excellence.
                </div>
              </div>
              <div className="relative flex items-center gap-x-3 self-start pt-8 text-base font-bold leading-[1.6] tracking-[0.04em] text-slate-900" >
                <div>
                  <span className="uppercase">Learn more</span>
                </div>
                <img
                  className="my-1 ml-[3px] mr-0.5 h-3.5 w-5"
                  src="/assets/Union1.svg"
                 />
              </div>
              <div className="relative h-0.5 w-28 bg-slate-900" />
              <div className="absolute bottom-[-119.59px] right-[-119.59px] h-60 w-60" >
                <div className="absolute top-40 h-60 w-60 origin-top-left bg-white [transform:rotate(-45deg)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[-453px] top-60 h-32 w-[492px]">
          <div className="h-full w-full overflow-clip" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-20 self-stretch bg-stone-100 py-44 px-32 tracking-normal text-slate-900" >
        <div className="flex gap-x-64 self-stretch">
          <div className="text-[40px] font-bold leading-[1.3]">
            What sets us apart?
          </div>
          <div className="w-96 text-base font-normal leading-[1.6]">
            Focussing on our key strengths enables us to consistently deliver best-in-class service and solutions, so that our strengths become your success.
          </div>
        </div>
        <div className="flex gap-x-10 self-stretch leading-[1.6]">
          <div className="flex flex-col items-center gap-y-4">
            <div className="relative items-center self-stretch overflow-clip pt-64 pb-24 pl-48 pr-36" >
              <div className="absolute inset-0 h-96 w-80">
                <img
                  className="h-full w-full overflow-clip"
                  src="http://localhost:54321/storage/v1/object/public/firejet-converted-images/images/2301:46181.webp"
                 />
              </div>
              <img
                className="relative h-4 w-4 drop-shadow-lg"
                src="/assets/Vector82.svg"
               />
            </div>
            <div className="flex flex-col items-center self-stretch pt-4 text-xl font-bold" >
              <div className="w-80">Completely independent</div>
            </div>
            <div className="w-80 text-lg font-normal">
              Being privately held allows us to be more agile and innovative, and offer our clients advice and solutions that are only ever in their best interest.
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <img
              className="h-96 w-80 overflow-clip"
              src="http://localhost:54321/storage/v1/object/public/firejet-converted-images/images/2301:46190.webp"
             />
            <div className="flex flex-col items-center self-stretch pt-4 text-xl font-bold" >
              <div className="w-80">Focussed on personalisation</div>
            </div>
            <div className="w-80 text-lg font-normal">
              From straightforward to incredibly complex, we create effective, economical solutions that are entirely tailored to the project at hand.
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4 self-stretch">
            <img
              className="h-96 w-80 overflow-clip"
              src="http://localhost:54321/storage/v1/object/public/firejet-converted-images/images/2301:46198.webp"
             />
            <div className="flex flex-col items-center self-stretch pt-4 text-xl font-bold" >
              <div className="w-80">Clients at the centre</div>
            </div>
            <div className="w-80 text-lg font-normal">
              We focus on enriching our internal teams and fostering a culture of continuous improvement so that we can consistently deliver superior outcomes for our clients.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-20 self-stretch bg-white py-44 px-32" >
        <div className="text-[40px] font-bold leading-[1.3] tracking-normal text-slate-900" >
          Here is how we help
        </div>
        <div className="flex gap-x-36 self-stretch leading-[1.6]">
          <div className="flex flex-col items-center text-lg font-bold tracking-normal" >
            <div className="relative flex items-center gap-x-4 self-stretch border-solid border-green-300 bg-gray-100 p-6 text-slate-900 [border-bottom-width:3px]" >
              <div className="relative w-96">Governance & Compliance</div>
              <div className="relative flex items-center py-1.5 pl-[3px] pr-0.5" >
                <img
                  className="h-3.5 w-5"
                  src="/assets/Union2.svg"
                 />
              </div>
              <img
                className="absolute bottom-4 right-28 h-4 w-4 drop-shadow-lg"
                src="/assets/Vector83.svg"
               />
            </div>
            <div className="flex items-center self-stretch py-6 pl-6 pr-28 text-slate-600" >
              <div className="w-80 opacity-90">Corporate</div>
            </div>
            <div className="flex items-center self-stretch border-t border-solid border-slate-300 p-6 text-slate-600" >
              <div className="w-96 opacity-90">Private Client</div>
            </div>
            <div className="flex items-center self-stretch border-t border-solid border-slate-300 p-6 text-slate-600" >
              <div className="w-96 opacity-90">Fund Administration</div>
            </div>
            <div className="flex items-center self-stretch border-t border-solid border-slate-300 p-6 text-slate-600" >
              <div className="w-96 opacity-90">Structured Finance</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-px self-stretch">
            <img
              className="h-96 w-[544px] object-cover object-center"
              src="http://localhost:54321/storage/v1/object/public/firejet-converted-images/images/e8af154a1148027a9640d2e5bcd02abf442d4c00.webp"
             />
            <div className="flex flex-col items-center self-stretch pt-6 text-lg font-normal tracking-normal text-slate-700" >
              <div className="w-[544px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className="flex items-end gap-x-3 self-start pt-8 text-base font-bold tracking-[0.04em] text-slate-900" >
              <div>
                <span className="uppercase">Learn more</span>
              </div>
              <img
                className="my-1 ml-[3px] mr-0.5 h-3.5 w-5"
                src="/assets/Union3.svg"
               />
            </div>
            <div className="h-0.5 w-28 bg-slate-900" />
          </div>
        </div>
      </div>
      <div className="relative flex items-center gap-x-10 self-stretch bg-slate-900 py-24 px-32 tracking-normal text-white" >
        <div className="relative flex flex-col gap-y-4 self-stretch">
          <div className="text-lg font-medium leading-[1.6]">
            How old we are?
          </div>
          <div className="text-[52px] font-bold leading-[1.3]">6</div>
          <div className="flex flex-col items-center self-stretch pt-2">
            <img
              className="h-0 w-80"
              src="/assets/LineHover.svg"
             />
          </div>
          <div className="flex flex-col items-center self-stretch pt-2 text-base font-normal leading-[1.6]" >
            <div className="w-80">
              We have been growing for 6 years and have 4 specialist areas
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-y-4 self-stretch">
          <div className="text-lg font-medium leading-[1.6]">
            Accuracy
          </div>
          <div className="text-[52px] font-bold leading-[1.3]">96%</div>
          <div className="flex flex-col items-center self-stretch pt-2">
            <img
              className="h-0 w-80"
              src="/assets/LineDefault.svg"
             />
          </div>
          <div className="flex flex-col items-center self-stretch pt-2 text-base font-normal leading-[1.6]" >
            <div className="w-80">
              We have great accuracy in our delivery towards the client
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-y-4 self-stretch">
          <div className="text-lg font-medium leading-[1.6]">
            Placements
          </div>
          <div className="w-40 text-[52px] font-bold leading-[1.3]">
            +1000
          </div>
          <div className="flex flex-col items-center self-stretch pt-2">
            <img
              className="h-0 w-80"
              src="/assets/LineDefault1.svg"
             />
          </div>
          <div className="flex flex-col items-center self-stretch pt-2 text-base font-normal leading-[1.6]" >
            <div className="w-80">
              Over 1000 placements within our specialist areas
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-40 left-96 h-4 w-4 drop-shadow-lg"
          src="/assets/Vector84.svg"
         />
      </div>
      <div className="flex flex-col items-center self-stretch pt-1 tracking-normal" >
        <div className="flex flex-col items-center gap-y-11 self-stretch bg-stone-100 py-44 px-32" >
          <div className="flex gap-x-60 self-stretch text-slate-900">
            <div className="w-96 text-[40px] font-bold leading-[1.3]">
              What our clients say
            </div>
            <div className="w-96 text-base font-normal leading-[1.6]">
              We treat our partners with honor and respect. Our business connections are stronger day by day and that is what creates a perfect service for our clients, wherever they may be.
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch pt-3.5">
            <div className="h-px w-[1128px] bg-slate-400" />
          </div>
          <div className="flex gap-x-10 self-stretch pt-14 text-lg font-medium leading-[1.6] text-slate-900" >
            <div className="w-80">
              “Thanks to Signetas, we were able to effectively grow our digital business. We have quadrupled our view conversion rate, reduced costs and saved time. We really like the analytics service.“
            </div>
            <div className="w-80">
              “Signetas always wants to provide its customers with top service and we have a reliable and professional partner who shares our ambition of providing customers with added value and an excellent experience.“
            </div>
            <div className="w-80">
              “It's our pleasure to work with companies that recognize innovation as one of the prerequisites for their success and progress.“
            </div>
          </div>
          <div className="flex items-center gap-x-4 self-stretch text-base leading-[1.6]" >
            <img
              className="h-16 w-16"
              src="/assets/Photo.svg"
             />
            <div className="w-72">
              <span className="font-bold text-slate-900">
                Eyimisan Abusomwan
              </span>
              <span className="whitespace-pre font-medium text-slate-900">
                {" "}
              </span>
              <span className="font-medium text-slate-500">
                — Founder, Homerunner
              </span>
            </div>
            <div className="flex items-center self-stretch pl-6">
              <img
                className="h-16 w-16"
                src="/assets/Photo1.svg"
               />
            </div>
            <div className="w-72">
              <span className="font-bold text-slate-900">
                {"Theresa Webb "}
              </span>
              <span className="font-medium text-slate-500">
                —               Founder, Homerunner
              </span>
            </div>
            <div className="flex items-center self-stretch pl-6">
              <img
                className="h-16 w-16"
                src="/assets/Photo2.svg"
               />
            </div>
            <div className="w-72">
              <span className="font-bold text-slate-900">
                {"Marvin McKinney "}
              </span>
              <span className="font-medium text-slate-500">
                —         Founder, Homerunner
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center self-stretch">
        <div className="bg-image-10 relative flex items-center self-stretch py-36 pl-[704px] pr-32 [background-size:100%_113%] [background-position:0%_-0.05%]" >
          <div className="bg-image-10 absolute inset-0 h-[810px] w-[1368px] [background-size:100%_113%] [background-position:0%_-0.05%]" />
          <div className="bg-cta1 relative flex flex-col gap-y-6 self-stretch bg-cover bg-center p-12" >
            <div className="w-96 text-[40px] font-bold leading-[1.3] tracking-normal" >
              <span className="text-white">
                Want to know more?
                <span className="mb-0 block" />
                
              </span>
              <span className="text-green-300">Get in touch</span>
            </div>
            <div className="flex items-center gap-x-3 text-base font-medium leading-[1.5] tracking-normal text-white" >
              <img
                className="h-10 w-10 overflow-clip"
                src="/assets/ButtonsIcon50px.svg"
               />
              <div className="relative flex h-6 w-48">
                <div className="absolute inset-0 flex items-center">
                  <span className="underline">
                    inquiries@signetas.com
                  </span>
                </div>
                <img
                  className="absolute inset-x-24 bottom-[-11px] h-4 w-4 drop-shadow-lg"
                  src="/assets/Vector85.svg"
                 />
              </div>
            </div>
            <div className="flex items-center gap-x-3 text-base font-medium leading-[1.6] tracking-normal text-white" >
              <img
                className="h-10 w-10 overflow-clip"
                src="/assets/ButtonsIcon50px1.svg"
               />
              <div className="flex items-center">+1 345 814 9384</div>
            </div>
            <div className="flex gap-x-3 text-base font-medium leading-[1.6] tracking-normal text-white" >
              <img
                className="h-10 w-10 overflow-clip"
                src="/assets/ButtonsIcon50px2.svg"
               />
              <div className="flex w-80 items-center">
                One Nexus Way, Grand Cayman, KY1-1205, Cayman Islands
              </div>
            </div>
            <div className="flex flex-col items-center self-start pt-8 text-base font-bold leading-[1.6] tracking-[0.04em] text-slate-900" >
              <div className="relative flex h-16 w-64 border border-solid border-blue-200" >
                <div className="absolute -left-1 -top-1 flex items-center gap-x-2 bg-blue-200 py-5 px-9" >
                  <div>
                    <span className="uppercase">send a message</span>
                  </div>
                  <div className="flex items-center self-stretch py-1.5 pl-[3px] pr-0.5" >
                    <img
                      className="h-3.5 w-5"
                      src="/assets/Union4.svg"
                     />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch bg-slate-900 px-32 pt-24 tracking-normal" >
        <img
          className="h-10 w-36"
          src="/assets/Logo1.svg"
         />
        <div className="h-4 w-[1128px] drop-shadow-lg" />
        <div className="flex gap-x-10 self-stretch text-base leading-[1.6] text-white" >
          <div className="w-96 font-normal opacity-80">
            We deliver forward thinking, personalised and compliant solutions to the world’s leading financial services firms, global banks, UHNWIs, family offices and high net-worth individuals.
          </div>
          <div className="flex flex-col items-center gap-y-6 self-stretch pl-48 font-medium" >
            <div className="w-64">Governance & Compliance</div>
            <div className="w-64">Corporate Services</div>
            <div className="w-64">Private Client</div>
            <div className="w-64">Fund Administration</div>
            <div className="w-64">Structured Finance</div>
          </div>
          <div className="flex flex-col items-center gap-y-6 font-medium">
            <div className="w-40">About</div>
            <div className="w-40">People</div>
            <div className="w-40">Сontacts Us</div>
            <div className="w-40">Careers</div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch pt-24 text-sm font-medium" >
          <div className="flex items-center gap-x-2 self-stretch border-t border-solid border-slate-700 py-6" >
            <div className="leading-[1.6] text-white">
              © 2022 Signetas™ - All Rights Reserved
            </div>
            <div className="flex self-stretch pl-96 leading-[1.6] text-white">
              Terms and Conditions
            </div>
            <div className="leading-[1.5] text-slate-500">
              
              <span className="mb-0 block" />
              
            </div>
            <div className="leading-[1.6] text-white">
              Terms of Business
            </div>
            <div className="leading-[1.5] text-slate-500">
              
              <span className="mb-0 block" />
              
            </div>
            <div className="leading-[1.6] text-white">Privacy Policy</div>
            <div className="leading-[1.5] text-slate-500">
              
              <span className="mb-0 block" />
              
            </div>
            <div className="leading-[1.6] text-white">Credit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MainpageProps {
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
