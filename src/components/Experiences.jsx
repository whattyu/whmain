import { LuLayoutTemplate, LuArrowDown } from "react-icons/lu";
import experiences from '../data/Experiences';
import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion";

export default function Experiences() {
  
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15
      }
    }
  };

  return (
    <div className='w-full h-full flex bg-neutral-900 items-center justify-center scroll-mt-[90px]' id='experiences'>
      <div className='w-full h-full flex max-w-[1200px] py-8 flex-col gap-y-10 justify-center items-center sm:px-0 px-8'>

        <div className='flex flex-col gap-y-2 items-center mb-8'>
          <h3 className='text-lg font-medium text-neutral-500 flex items-center gap-x-2'>
            <LuLayoutTemplate />
            Tecrübelerim
            <LuArrowDown size={14} className='animate-bounce' />
          </h3>

          <p className='text-sm tracking-wide max-w-[500px] text-neutral-300/80 leading-[30px] text-center'>
            Some of My Projects
          </p>
        </div>

        <div className='flex flex-col w-full h-full'>
          
          <motion.div className='flex flex-row w-full h-full flex-wrap gap-8 items-center justify-center' variants={container} initial='hidden' whileInView='visible' viewport={{ once: true }}>
            {experiences.sort((a, b) => {
              if (b.endYear) {
                return a.endYear - b.endYear;
              } else {
                return -1;
              }
            }).reverse().map((data, index) => (
              <ExperienceItem data={data} index={index} />
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  )
};