export default function Component({ className = "" }: ComponentProps) {
  return (
    <div
      className={`font-yuanti_sc inline-flex flex-row items-center rounded-[100px] bg-white pb-[1494px] text-left font-normal tracking-normal ${className}`}
    >
      <div className="flex h-[846px] w-[1080px] flex-col items-center gap-y-14 bg-gradient-to-r from-[rgba(255,230,0,1)] to-[rgba(255,214,0,1)] pl-16 pr-14 pt-32" >
        <div className="flex items-center gap-x-24 self-stretch">
          <div className="flex flex-col gap-y-16 self-stretch">
            <div className="flex items-center gap-x-[648px] self-stretch">
              <img
                className="h-20 w-20"
                src="/assets/PhosphorIconsRegularCaretcircleleft.svg"
               />
              <div className="flex items-center self-stretch">
                <img
                  className="h-20 w-20"
                  src="/assets/Component.svg"
                 />
              </div>
            </div>
            <div className="flex items-center gap-x-11">
              <img
                className="h-44 w-44"
                src="/assets/Ellipse2177.svg"
               />
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center text-[46px] text-zinc-800">
                  蒸汽火车的茄子
                </div>
                <div className="flex items-center text-4xl text-stone-500">
                  186****7584
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-32 text-zinc-800">
              <div className="flex flex-col items-end gap-y-1.5 self-stretch">
                <div className="flex w-24 items-center text-[46px]">
                  1205
                </div>
                <div className="flex items-center text-4xl">金币</div>
              </div>
              <div className="flex flex-col items-center gap-y-1.5 self-stretch" >
                <div className="flex items-center text-[46px]">5</div>
                <div className="flex w-28 items-center text-4xl">
                  优惠券
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-1.5 self-stretch" >
                <div className="flex w-20 items-center text-[46px]">
                  268
                </div>
                <div className="flex items-center text-4xl">足迹</div>
              </div>
              <div className="flex flex-col items-center gap-y-1.5 self-stretch" >
                <div className="flex items-center text-[46px]">78</div>
                <div className="flex items-center text-4xl">关注</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-1.5 self-stretch text-zinc-800" >
            <img
              className="h-20 w-20"
              src="/assets/PhosphorIconsRegularQrcode.svg"
             />
            <img
              className="h-44 w-14 self-center pt-32"
              src="/assets/PhosphorIconsRegularNotepencil.svg"
             />
            <div className="flex flex-col items-center self-center pt-32 text-[46px]" >
              <div className="flex w-16 items-center">136</div>
            </div>
            <div className="flex w-20 items-center text-4xl">收藏</div>
          </div>
        </div>
        <div className="flex items-center self-stretch px-12 pt-56 text-zinc-800" >
          <div className="relative flex h-48 w-[858px] bg-zinc-100 [filter:blur(100)]" >
            <div className="absolute top-[-226.89px] right-[-51px] left-[-51px] flex h-80 w-[960px] flex-col items-center rounded-[50px] bg-white px-4 pt-11" >
              <div className="flex flex-col gap-y-8 self-center text-[42px]">
                <div className="flex items-center">我的资产</div>
                <div className="flex items-center gap-x-36 self-stretch">
                  <img
                    className="h-24 w-24 overflow-clip"
                    src="/assets/Component1.svg"
                   />
                  <img
                    className="h-24 w-24 overflow-clip"
                    src="/assets/Component2.svg"
                   />
                  <div className="flex items-center self-stretch pl-2.5">
                    <img
                      className="h-24 w-24 overflow-clip"
                      src="/assets/Component3.svg"
                     />
                  </div>
                  <div className="flex items-center self-stretch pl-2.5">
                    <div className="h-24 w-24 rounded-md">
                      <img
                        className="h-full w-full overflow-clip rounded-md"
                        src="/assets/Component4.svg"
                       />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-36 text-[40px]">
                <div className="flex items-center">零钱</div>
                <div className="flex items-center self-stretch pl-2.5">
                  积分
                </div>
                <div className="flex items-center">银行卡</div>
                <div className="flex items-center">订单</div>
              </div>
              <div className="flex flex-col items-center self-stretch pt-8 text-[42px]" >
                <div className="flex h-[978px] w-[926px] flex-col gap-y-24">
                  <div className="flex items-center gap-x-[864px] self-stretch" >
                    <div className="relative flex h-14 w-2.5 rounded-full bg-yellow-400" >
                      <div className="absolute inset-y-3 right-[-247px] flex w-64 items-center" >
                        在线客服
                      </div>
                    </div>
                    <img
                      className="h-14 w-14"
                      src="/assets/PhosphorIconsRegularCaretright.svg"
                     />
                  </div>
                  <div className="flex items-center gap-x-[862px]">
                    <div className="relative flex h-14 w-2.5 rounded-full bg-yellow-400" >
                      <div className="absolute inset-y-3 right-[-245px] flex w-64 items-center" >
                        问题反馈
                      </div>
                    </div>
                    <img
                      className="h-14 w-14"
                      src="/assets/PhosphorIconsRegularCaretright1.svg"
                     />
                  </div>
                  <div className="flex items-center gap-x-[862px]">
                    <div className="relative flex h-14 w-2.5 rounded-full bg-yellow-400" >
                      <div className="absolute inset-y-3 right-[-245px] flex w-64 items-center" >
                        帮助中心
                      </div>
                    </div>
                    <img
                      className="h-14 w-14"
                      src="/assets/PhosphorIconsRegularCaretright2.svg"
                     />
                  </div>
                  <div className="flex items-center gap-x-[862px]">
                    <div className="relative flex h-14 w-2.5 rounded-full bg-yellow-400" >
                      <div className="absolute inset-y-3 right-[-245px] flex w-64 items-center" >
                        我的任务
                      </div>
                    </div>
                    <img
                      className="h-14 w-14"
                      src="/assets/PhosphorIconsRegularCaretright3.svg"
                     />
                  </div>
                  <div className="flex items-center gap-x-[862px]">
                    <div className="relative flex h-14 w-2.5 rounded-full bg-yellow-400" >
                      <div className="absolute inset-y-3 right-[-245px] flex w-64 items-center" >
                        邀请好友
                      </div>
                    </div>
                    <img
                      className="h-14 w-14"
                      src="/assets/PhosphorIconsRegularCaretright4.svg"
                     />
                  </div>
                  <div className="flex items-center gap-x-[862px]">
                    <div className="relative flex h-14 w-2.5 rounded-full bg-yellow-400" >
                      <div className="absolute inset-y-3 right-[-245px] flex w-64 items-center" >
                        关于
                      </div>
                    </div>
                    <img
                      className="h-14 w-14"
                      src="/assets/PhosphorIconsRegularCaretright5.svg"
                     />
                  </div>
                  <div className="flex items-center gap-x-[862px]">
                    <div className="relative flex h-14 w-2.5 rounded-full bg-yellow-400" >
                      <div className="absolute inset-y-3 right-[-245px] flex w-64 items-center" >
                        设置
                      </div>
                    </div>
                    <img
                      className="h-14 w-14"
                      src="/assets/PhosphorIconsRegularCaretright6.svg"
                     />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ComponentProps {
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
