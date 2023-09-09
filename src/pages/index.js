import { Inter } from 'next/font/google';
import { twMerge as MergeTailwind } from 'tailwind-merge';
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header';
import Twemoji from 'react-twemoji';
import { LuMail } from 'react-icons/lu';
import Image from 'next/image';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { useMedia } from 'react-use';
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const isImageCollapsed = useMedia('(max-width: 1260px)', false);

  return (
    <div className={MergeTailwind([
      'w-full',
      inter.className
    ])}>
      <Head>
        <title>whamain</title>
      </Head>
      <Header />

      <div className='w-full h-full flex justify-center min-h-screen items-center p-5 lg:p-20 sm:p-10 collapse-hero:p-0'>
        <div className='w-full h-full flex collapse-hero:max-w-[1200px]'>
          <div className='w-full h-full flex flex-row justify-center items-center'>
            <div className='w-full h-full justify-center items-center flex flex-col text-center xl:text-left xl:items-start'>
              <h1 className='text-4xl sm:text-6xl font-black tracking-wider leading-[45px] sm:leading-[70px] max-w-[600px] text-neutral-200'>
              Hey there I'm Whattyu! <Twemoji className='twemoji !hidden sm:!inline-block'>👋</Twemoji>
              </h1>
              <p className='my-6 text-sm sm:text-base tracking-wide max-w-[500px] text-neutral-300/80 leading-[25px] sm:leading-[30px]'>
                4 yılı aşkın bir süredir JavaScript ile Discord üzerinde bot geliştiriyorum.
                Kendi kendimi geliştirebiliyor ve yeni şeyleri kolayca öğrenebiliyorum.
              </p>
              <a className='w-full bg-neutral-800 rounded hover:bg-neutral-700 transition-colors flex items-center font-medium gap-x-2 py-2 px-4 max-w-[500px] justify-center' href='mailto:skyhancloud+bencan.net@gmail.com'>
                <LuMail />
                skyhancloud@gmail.com
              </a>

              <div className='flex flex-row gap-x-2 mt-4'>
                <Link href='https://instagram.com/atatolgadln' className='social-media-button' target='_blank'>
                  <FaInstagram size={20} />
                </Link>

                <Link href='https://github.com/whattyu' className='social-media-button' target='_blank'>
                  <FaGithub size={20} />
                </Link>

                <Link href='https://discord.gg/JzfqQ8wdtu' className='social-media-button' target='_blank'>
                  <FaDiscord size={20} />
                </Link>
              </div>
            </div>

            <div className='w-full h-full hidden xl:flex flex-col justify-center items-center'>
              <Image src='/yeni w.jpg' width={isImageCollapsed ? 200 : 350} height={isImageCollapsed ? 200 : 350} className='rounded-full' />
            </div>
          </div>
        </div>
      </div>

      <Experiences />
      <Skills />
      <Footer />
    </div>
  )
}
