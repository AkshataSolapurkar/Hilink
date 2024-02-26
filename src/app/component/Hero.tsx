import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
      <section className='max-container padding-max flexx flex-col py-10 pb-32 gap-20 md:gap-[28px] lg:py-[20px] xl:flex-row'>
        <div className='hero-map'>
        </div>
        <div className='flex flex-1 relative z-20 flex-col xl:w-1/2'>
          <Image src={"./camp.svg"}
          alt='camp'
          height={50}
          width={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'/>
          <h1 className='bold-52 lg:bold-88 mt-[15px]'>Sample Camp Base Area</h1>
          <p className='regular-16 text-gray-700 xl:max-w-[80%] mt-6'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

          <div className='flex py-11 gap-[0.5rem] flex-wrap '>
           <div className='items-center flex gap-2'>
           {typeof window === 'undefined' && Array(5).fill(1).map((_, index) => (
          <Image
            key={index}
            src='/star.svg'
            alt='star'
            width={24}
            height={24}
          />
        ))}
      </div>  
            <p className='bold-16 lg:bold-20 text-blue-900 mb-[20px]'>196K
              <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
            </p>
            <div className='flex flex-col gap-4 w-full sm:flex-row '>
            <Button type='button'
            title='Download App Here'
            varient='btn_green'/>

            <Button type='button'
            title='How to use'
            icon='/play.svg'
            varient='btn_white'/>
            </div>
            
          </div>

          <div className='flex flex-1 items-start relative'>
            <div className='flex z-20 relative flex-col gap-2 w-[256px] rounded-3xl bg-gray-800 px-7 py-8'>
                <div className='flex flex-col'>
                  <div className='flexBetween'>
                    <p className='regular-16 text-gray-300'>Location</p>
                    <Image src="./close.svg" width={24} height={24} alt='close'/>
                    </div>
                  <p className='bold-20 text-white'>Aguas Calientes</p>
                </div>
                
                <div className='flexBetween'>
                  <div className='flex flex-col'>
                  <p className='regular-16 text-gray-300'>Distance</p>
                  <p className='bold-20 text-white'>173.28 mi</p>
                  </div>
                  
                  <div className='flex flex-col'>
                  <p className='regular-16 text-gray-300'>Elavation</p>
                  <p className='bold-20 text-white'>2.040 K</p>
                  </div>

                </div>
            </div>
          </div>
        </div>
        
        
      </section>
    </div>
  )
}

export default Hero
