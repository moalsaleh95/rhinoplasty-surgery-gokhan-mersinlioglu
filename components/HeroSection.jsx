import { Form } from "./Form"
import Image from "next/image"
import sponsor1 from '../public/images/image1.png'
import sponsor2 from '../public/images/image2.png'
import sponsor3 from '../public/images/image3.png'

export const HeroSection = () => {
  return (
    <div className='hero_img h-[928px] w-full'>
      <div className="container mx-auto flex md:flex-row flex-col-reverse md:justify-between items-center align-middle">
        <Form />
        <div className="text-end md:w-[600px] flex flex-col justify-end mt-[127px] md:mt-[127px] mr-4">
          <h1 className="font-bold md:text-[44px] text-[34px] md:text-end text-center leading-[50px] text-white">
            Looking for the Best <br/> Rhinoplasty Surgery in Turkey?
          </h1>
          <h2 className="md:text-[36px] text-[26px] leading-[50px] md:text-end text-center text-[#E5A081]">
            Discover Your Answer Here!
          </h2>
          <div className="flex flex-row mt-[112px]">
            <Image src={sponsor1} className="md:mr-[43px] mr-[37px] md:w-[100px] md:h-[100px]" width={66} height={66} alt="sponsors" />
            <Image src={sponsor2} className="md:mr-[43px] mr-[37px] md:w-[100px] md:h-[100px]" width={71} height={71} alt="sponsors" />
            <Image src={sponsor3} width={162} height={55} className="md:w-[248px] md:h-[85px]" alt="sponsors" />
          </div>
        </div>
      </div>
    </div>
  )
}
