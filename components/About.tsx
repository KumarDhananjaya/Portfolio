import React from 'react'
import Button from './Button'
import Image from 'next/image'

function About() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">About</div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8">
            <span className="font-extrabold">Lorem ipsum</span>  Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
            to make a type specimen book.
          </p>
          <Button
                type='button'
                title='Read more'
                icon='/more.svg'
                variant="btn_dark_rounded"
              />
        </div>
        <div className="flex-1 flexCenter">
          <Image src="/about.png" alt="about" height={333} width={333} className="w-auto
          rounded-full shadow-sm" /> 
        </div>
      </div>
    </section>
  )
}

export default About