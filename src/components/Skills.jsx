import { LuArrowDown, LuCode2 } from "react-icons/lu"
import SkillItem from '../components/SkillItem';
import skills from '../data/Skills';
import { motion, } from "framer-motion";

export default function Skills() {

  const contanier = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className='w-full h-full flex items-center justify-center scroll-mt-[90px]' id='skills'>
      <div className='w-full h-full flex max-w-[700px] py-8 flex-col gap-y-10 justify-center items-center sm:px-0 px-4'>

        <div className='flex flex-col gap-y-2 items-center'>
          <h3 className='text-lg font-medium text-neutral-500 flex items-center gap-x-2'>
            <LuCode2 />
            What I use
            <LuArrowDown size={14} className='animate-bounce' />
          </h3>

          <p className='text-sm tracking-wide max-w-[500px] text-neutral-300/80 leading-[30px] text-center'>
            Here are the programming languages that I use
          </p>
        </div>

        <div className='flex flex-col w-full h-full'>
          
          <motion.div className='flex flex-row w-full h-full flex-wrap gap-3 items-center justify-center' variants={contanier} initial='hidden' whileInView='visible' viewport={{ once: false }}>
            {skills.map((data, index) => (
              <SkillItem data={data} index={index} />
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  )
};
