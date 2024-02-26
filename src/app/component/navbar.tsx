import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '../../../constants';
import Button from './Button';


const navbar = () => {
  return (
    <nav className='flex justify-between items-center md:px-[5rem] px-[2rem]  mx-auto max-w-[1440px] padding-container max-container
    relative z-30 py-5'>
     <Link href='/' >
      <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29}/>
     </Link>
     <ul className='justify-between gap-[20px] items-center hidden md:flex'>
        {NAV_LINKS.map((link)=>(
          <Link href={link.href} key={link.key} className='hover:font-bold text-16px font-normal flex item-center justify-center transition-all text-gray-500 p-[0.375rem]'>
            {link.label}
          </Link>
        ))}
      </ul>

      <div  className='md:flex hidden'>
       <Button 
       type="button"
       title="login"
       icon="/user.svg"
       varient="btn_dark_green"
       />
      </div>

      <Image 
      src="/menu.svg"
      alt='menu'
      width={32}
      height={32}
      className='inline-block cursor-pointer md:hidden'
      />
      
    </nav>
  )
}

export default navbar
