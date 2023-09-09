import { Fragment } from "react";
import { LuBox, LuMail } from "react-icons/lu";
import HeaderItems from "../data/HeaderItems";
import Link from "next/link";
import { useMedia } from "react-use";
import { twMerge as MergeTailwind } from "tailwind-merge";

export default function NotCollapsedHeader() {
  const isMobile = useMedia('(max-width: 768px)', false);

  return (
    <Fragment>
      
      <div className={MergeTailwind([
        'w-full h-12 text-base flex items-center justify-center mt-6 fixed z-[9999]',
        isMobile && 'hidden'
      ])}>
        <div className="w-max h-full px-4 py-2 flex flex-row justify-between items-center font-medium bg-neutral-800 border-[1px] border-solid border-neutral-700 rounded-full gap-x-8">
          
          <Link className="flex gap-1.5 items-center cursor-pointer hover:opacity-70 transition-opacity select-none font-semibold" href='/'>
            <LuBox />
            whamain
          </Link>

          <div className="w-max h-full flex gap-x-2.5 items-center text-sm">
            {HeaderItems.map((item, index) => (
              <Link href={item.link} key={index} className="header-item">
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
          
          <a className="w-max h-full flex items-center gap-x-1 text-sm px-3 py-1 bg-neutral-700/60 hover:bg-neutral-700 transition-colors rounded-3xl" href='mailto:skyhancloud+bencan.net@gmail.com'>
            <LuMail />
            Contact Me
          </a>

        </div>
      </div>

    </Fragment>
  );
};
