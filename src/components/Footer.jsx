import HeaderItems from '../data/HeaderItems';
import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';

export default function Footer() {
  return (
    <div className='w-full h-full bg-neutral-900 border-t-neutral-800 border-solid border-[1px] border-transparent flex items-center justify-center sm:px-0 px-2' >
      <div className='w-full h-full flex max-w-[1200px] py-8 sm:flex-row justify-between items-center flex-col gap-2 sm:gap-0'>
        <div className="flex flex-row gap-x-2.5 items-center">
          {HeaderItems.map((data, index) => (
            <Link href={data.link} key={index} className='flex flex-row gap-x-1 items-center text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-300 ease-in-out'>
              {data.icon}
              {data.name}
            </Link>
          ))}
        </div>

        <Link href='https://github.com/chimpdev/bencan.net' className='flex flex-row gap-x-1 items-center text-xs sm:text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-300 ease-in-out'>
          Bu site <LuGithub className='sm:inline-block hidden'/> GitHub'da açık kaynak olarak bulunmaktadır.
        </Link>
      </div>
    </div>
  );
};