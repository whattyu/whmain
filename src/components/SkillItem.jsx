import { motion } from 'framer-motion';

export default function SkillItem({ data, index }) {
  const item = {
    hidden: {
      opacity: 0,
      translateY: 20
    },
    visible: {
      opacity: 1,
      translateY: 0
    }
  };

  return (
    <motion.div className='w-[120px] h-[120px] rounded-lg bg-neutral-800 flex items-center justify-center group relative overflow-hidden' key={index} style={{ backgroundColor: data.backgroundColor }} variants={item}>
      {data.logo.type == 'svg' ? (
        <div className='transition-all group-hover:scale-105 ease-in-out duration-300' >
         {data.logo}
        </div>
      ) : (
        <img src={data.logo} alt='' width={data.width} height={data.height} className='rounded-lg transition-all group-hover:scale-105 ease-in-out duration-300' />
      )}
      <div className="w-full h-full absolute top-0 left-0 bg-black/60 z-[2] opacity-100 group-hover:opacity-100 sm:opacity-0 transition-all flex items-end p-3 rounded-lg ease-in-out duration-300">
        <span className='text-sm text-neutral-200 font-semibold tracking-wide sm:translate-y-[50px] group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
          {data.skill}
        </span>
      </div>
    </motion.div>
  )
};