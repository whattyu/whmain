import Image from 'next/image';
import { LuLink } from 'react-icons/lu';
import { motion } from 'framer-motion';

export default function ExperienceItem({ data, index }) {
  
  const item = {
    hidden: {
      opacity: 0,
      translateX: 40
    },
    visible: {
      opacity: 1,
      translateX: 0
    }
  };
  
  return (
    <motion.a className='w-full h-max relative group sm:min-w-[500px] max-w-[500px] cursor-pointer flex' href={data.href || '#'} target='_blank' variants={item} key={index}>
      <div className='w-full h-full absolute bg-neutral-800/50 z-[1] scale-100 sm:scale-95 group-hover:scale-100 transition-all ease-in-out rounded-2xl opacity-100 sm:opacity-0 group-hover:opacity-100'></div>

      <div className='flex flex-col p-4'>
        <div className='bg-neutral-800 rounded-full p-1.5 w-max z-[2] border-[1px] border-solid border-neutral-700'>
          <Image src={data.logo} alt='' width={32} height={32} className='rounded-full' />
        </div>

        {!data.endYear && <span className='text-xs bg-neutral-700 text-white rounded px-1.5 py-0.5 block sm:hidden w-max z-[2] mt-3'>Still Continues</span>}

        <h1 className='tracking-tight font-semibold text-neutral-200 text-sm sm:text-base z-[2] mt-2 sm:mt-5 flex flex-row items-center flex-wrap'>
          {data.title} {data.endYear ? '' : (<span className='text-xs bg-neutral-700 text-white rounded px-1.5 py-0.5 ml-2 hidden sm:block'>Still Continues</span>)}
        </h1>

        <span className='text-xs text-neutral-500 mt-1.5 z-[2]'>
          {data.role} / {data.startYear} {data.endYear ? `- ${data.endYear}` : ''}
        </span>

        <p className='tracking-wide text-neutral-400 text-sm leading-[25px] z-[2] mt-3'>
          {data.desc}
        </p>

        {data.website && (
          <div className='tracking-tight font-medium text-neutral-300 text-sm z-[2] mt-5 flex items-center gap-x-2'>
            <LuLink />
            {data.website}
          </div>
        )}
      </div>
    </motion.a>
  )
};
