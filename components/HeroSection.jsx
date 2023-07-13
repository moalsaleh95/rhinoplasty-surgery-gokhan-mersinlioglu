import { Form } from "./Form"
import Image from "next/image"
import sponsor1 from '../public/images/image1.png'
import sponsor2 from '../public/images/image2.png'
import sponsor3 from '../public/images/image3.png'

export const HeroSection = () => {
  return (
    <div className='hero_img h-[928px] w-full'>
      <div className="container mx-auto flex flex-row justify-between align-middle">
        <Form />
        <div className="text-end w-[600px] flex flex-col justify-end">
          <h1 className="font-bold text-[44px] leading-[50px] text-white">
            Looking for the Best Rhinoplasty Surgery in Turkey?
          </h1>
          <h2 className="text-[36px] leading-[50px] text-[#E5A081]">
            Discover Your Answer Here!
          </h2>
          <div className="flex flex-row mt-[112px]">
            <Image className="mr-[43px]" src={sponsor1} width={100} height={100} alt="sponsors" />
            <Image className="mr-[43px]" src={sponsor2} width={100} height={100} alt="sponsors" />
            <Image src={sponsor3} width={248} height={85} alt="sponsors" />
          </div>
        </div>
      </div>
    </div>
  )
}
