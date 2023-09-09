import { Fragment } from "react";
import { useMedia } from "react-use";
import { LuBox, LuMail, LuX } from "react-icons/lu";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import HeaderItems from "../data/HeaderItems";
import { useHeaderStore } from "../store";
import HeaderMenu from "./HeaderMenu";
import { twMerge as MergeTailwind } from "tailwind-merge";

export default function NotCollapsedHeader() {
  const isMobile = useMedia('(max-width: 768px)', false);
  const menuIsOpen = useHeaderStore(state => state.menuIsOpen);
  const closeMenu = useHeaderStore(state => state.closeMenu);
  const toggleMenu = useHeaderStore(state => state.toggleMenu);

  return (
    <Fragment>
      
      <div className={MergeTailwind([
        'w-full h-12 text-base hidden items-center justify-center fixed z-[9999]',
        isMobile && 'flex'
      ])}>
        <div className="w-full h-full px-4 py-2 flex flex-row justify-between items-center font-medium bg-neutral-800/60 backdrop-blur border-b-neutral-700/60 border-b-solid border-b-[1px] gap-x-8">
          
          <Link className="flex gap-1.5 items-center cursor-pointer hover:opacity-70 transition-opacity select-none font-semibold" href='/' onClick={() => {
            if (menuIsOpen) closeMenu();
          }}>
            <LuBox />
            bencan.net
          </Link>

          <div className="w-max h-full gap-x-2.5 items-center text-sm hidden collapse-header:flex">
            {HeaderItems.map((item, index) => (
              <Link href={item.link} key={index} className="header-item">
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-2">
            <a className="w-max h-full flex items-center gap-x-1 text-sm px-3 py-1 bg-neutral-700/60 hover:bg-neutral-700 transition-colors rounded-3xl" href='mailto:skyhancloud+bencan.net@gmail.com'>
              <LuMail />
              Bana Ulaş
            </a>
            
            <button className="w-max h-full items-center gap-x-1 text-sm px-2 py-1.5 bg-neutral-700/60 hover:bg-neutral-700 transition-colors rounded-full collapse-header:hidden flex" onClick={toggleMenu}>
              {menuIsOpen ? <LuX /> : <BiMenu />}
            </button>
          </div>

        </div>
      </div>

      <HeaderMenu />
    </Fragment>
  )
};