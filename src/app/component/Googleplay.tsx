import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Googleplay = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]' >
      <div className='get-app'>
        <div className='z-20 flex w-full flex-col flex-1 items-start justify-center gap-12'>
          <h2 className='bold-40 xl:bold-64 xl:max-w-[380ps]'>Get For Free Now</h2>
          <p className='regular-16 text-gray-300'>Now Avalible on Android And IOS</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              varient="btn_white"
              full={true}
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              varient="btn_dark_green_outline"
              full={true}
            />
          </div>

          </div>
          <div className='flex flex-1 items-center justify-end'>
        <Image
        src='/phones.png'
        alt='phone'
        width={550}
        height={870}/>
      </div>
        </div>
      
    </section>
  )
}

export default Googleplay
