import { ServiceCard } from "./ServiceCard"
import Image from "next/image"
import icon1 from '../public/images/icon1.png'
import icon2 from '../public/images/icon2.png'
import icon3 from '../public/images/icon3.png'
import icon4 from '../public/images/icon4.png'
import icon5 from '../public/images/icon5.png'
import sponsor1 from '../public/images/sponsor1.png'
import sponsor2 from '../public/images/sponsor2.png'
import sponsor3 from '../public/images/sponsor3.png'

export const Services = () => {
  return (
    <div className=" bg-[#F4F7FC] w-full">
    <div id="services" className="container mx-auto text-center md:mt-0 mt-[100px] md:mt-0 mt-[590px]">
      <h2 className="text-[34px] font-bold text-[#282866] md:pt-[63px]">
        Our All Inclusive Rhinoplasty Surgery Services
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 pt-[60px] mx-auto gap-x-[94px] ">
        <ServiceCard icon={icon1} title={'Septoplasty'} content={'Through specialist septoplasty surgery, you may correct nasal septum abnormalities and enhance your ability to breathe. You can improve nasal airflow and regain optimal nasal function with the assistance of our talented surgeons.'} href={'https://api.whatsapp.com/send?phone=+905465594285&text=Hello,%20I%20would%20like%20to%20know%20about%20the%20services%20and%20prices%20offered%20for%20septoplasty.'} />
        <ServiceCard icon={icon2} title={'Revisions Rhinoplasty'} content={'Address any issues with prior nose surgery and get the outcomes you want with revision rhinoplasty. To achieve your goals, our skilled surgeons will work closely with you to understand them and offer tailored solutions.'} href={'https://api.whatsapp.com/send?phone=+905465594285&text=Hello,%20I%20would%20like%20to%20know%20about%20the%20services%20and%20prices%20offered%20for%20revisions%20rhinoplasty.'} />
        <ServiceCard icon={icon3} title={'Ethnic Rhinoplasty'} content={'Ethnic rhinoplasty or ethnic revision in eye therapy respects varied anatomical traits by addressing individual eye difficulties while conserving cultural and ethnic characteristics through tailored surgical and non-surgical procedures.'} href={'https://api.whatsapp.com/send?phone=+905465594285&text=Hello,%20I%20would%20like%20to%20know%20about%20the%20services%20and%20prices%20offered%20for%20ethnic%20rhinoplasty.'} />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[94px] md:pt-[110px] pt-0">
        <ServiceCard icon={icon4} title={'Ethnic Revision'} content={'Ethnic revision in eye therapy respects varied anatomical traits by addressing individual eye difficulties while conserving cultural and ethnic characteristics through tailored surgical and non-surgical procedures.'} href={'https://api.whatsapp.com/send?phone=+905465594285&text=Hello,%20I%20would%20like%20to%20know%20about%20the%20services%20and%20prices%20offered%20for%20upper%20eyelid'} />
        <ServiceCard icon={icon5} title={'Cadaver Cartilage'} content={'Cadaver cartilage is a substance derived from the cartilage of deceased humans or animals that is often utilized in eye therapies, notably corneal transplantation.'} href={'https://api.whatsapp.com/send?phone=+905465594285&text=Hello,%20I%20would%20like%20to%20know%20about%20the%20services%20and%20prices%20offered%20for%20bichectomy.'} />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:mt-[150px] mt-10 justify-items-center container">
        <Image src={sponsor1} width={228} height={75} />
        <Image src={sponsor2} width={188} height={46} />
        <Image src={sponsor3} width={282} height={46} />
      </div>

      <div className="grid md:grid-cols-4 gap-2 grid-cols-1 md:mt-[150px] mt-14 container text-center">
        <div>
          <h6 className="text-[52px] text-[#282866] font-bold">12000</h6>
          <br />
          <p className="text-[22px] text-[#282866] mt-[-30px]">Happy Patient</p>
        </div>

        <div>
          <h6 className="text-[52px] text-[#282866] font-bold">+5000</h6>
          <br />
          <p className="text-[22px] text-[#282866] mt-[-30px]">Successful Treatment</p>
        </div>

        <div>
          <h6 className="text-[52px] text-[#282866] font-bold">+15</h6>
          <br />
          <p className="text-[22px] text-[#282866] mt-[-30px]">Years of Experience</p>
        </div>

        <div>
          <h6 className="text-[52px] text-[#282866] font-bold">100%</h6>
          <br />
          <p className="text-[22px] text-[#282866] mt-[-30px] ">Patient Satisfaction From Every Country Across the Globe</p>
        </div>
      </div>

      <button type="button" className="bg-[#4D4DCE] mb-[100px] text-[#fff] text-[18px] w-[300px] h-[50px] border-2 border-[#6969FF] rounded-md mt-[35px]">
        Unlock a New Look Today!
      </button>
    </div>
    </div>
  )
}
