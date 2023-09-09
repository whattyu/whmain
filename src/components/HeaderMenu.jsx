import { useHeaderStore } from "../store";
import { Fragment } from "react";
import { twMerge as MergeTailwind } from "tailwind-merge";
import headerItems from "../data/HeaderItems";
import Link from "next/link";

export default function HeaderMenu() {
  const menuIsOpen = useHeaderStore(state => state.menuIsOpen);
  const closeMenu = useHeaderStore(state => state.closeMenu);

  return (
    <Fragment>
      <div className={MergeTailwind([
        'absolute -top-[50px] left-0 z-[0] bg-neutral-900/50 backdrop-blur-sm w-full h-[calc(100%_-_50px)] transition-all ease-in-out duration-300 flex flex-col items-center justify-start p-4 gap-y-2',
        menuIsOpen ? 'opacity-100 top-12' : 'opacity-0 pointer-events-none'
      ])}>
        
        {headerItems.map((item, index) => (
          <Link className="w-full bg-neutral-800/50 hover:bg-neutral-800 rounded font-semibold flex items-center gap-x-1 justify-center py-2" href={item.link} key={index} onClick={closeMenu}>
            {item.icon}
            {item.name}
          </Link>  
        ))}

      </div>
    </Fragment>
  );
};