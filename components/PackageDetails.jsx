import pack1 from '../public/images/pack1.png'
import pack2 from '../public/images/pack2.png'
import pack3 from '../public/images/pack3.png'
import pack4 from '../public/images/pack4.png'
import pack5 from '../public/images/pack5.png'
import { PackageCard } from './PackageCard'

export const PackageDetails = () => {
  return (
    <div id='packageDetails' className='md:h-[990px] bg-[#282866] w-full text-center mx-auto'>
      <h2 className="packageDetails text-[34px] font-bold text-[#fff] mt-[90px]">
        Rhinoplasty Package Details
      </h2>
      <h3 className='text-[18px] text-[#D0977D] pt-3'>
        Your Journey with Us
      </h3>

      <div className="grid md:grid-cols-3 grid-cols-1 md:mt-0 mt-[6rem] md:pt-[110px] mx-auto gap-x-[94px] container justify-items-center ">
        <PackageCard icon={pack1} width={75} height={84} title={'Comprehensive Care'} content={' Our all-inclusive Rhinoplasty packages cover everything from pre-operative consultations to post-operative follow-ups, ensuring a seamless experience.'} />
        <PackageCard icon={pack2} width={75} height={84} title={'Hassle-Free Experience'} content={' Leave the details to us as we take care of your accommodation, transportation, and other logistics, allowing you to focus solely on your Rhinoplasty journey.'} />
        <PackageCard icon={pack3} width={88} height={74}  title={'Expert Medical Team'} content={' Benefit from the expertise of our skilled surgeons and dedicated medical staff who provide personalized care throughout your Rhinoplasty procedure.'} />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1  md:pt-[110px] pt-0 container justify-items-center mx-auto">
        <PackageCard icon={pack4} width={102} height={70} title={'Travel Buddy Experience'} content={' Combine your Rhinoplasty procedure with our Travel Buddy services, encompassing luxurious accommodations, local sightseeing.'} />
        <PackageCard icon={pack5} width={64} height={76} title={'Tailored Treatment Plans'} content={'Our all-inclusive packages offer customized treatment plans that address your unique needs and goals, providing you with the best possible results.'} />
      </div>
    </div>
  )
}
