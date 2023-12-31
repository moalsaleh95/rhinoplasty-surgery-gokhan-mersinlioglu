import hospital1 from '../public/images/hospital1.png'
import hospital2 from '../public/images/hospital2.png'
import hospital3 from '../public/images/hospital3.png'
import hospital4 from '../public/images/hospital4.png'
import hospital5 from '../public/images/hospital5.png'
import hospital6 from '../public/images/hospital6.png'
import Image from 'next/image'

export const Hospital = () => {
  return (
    <div id='hospital' className='container text-center'>
      <h2 className="hospital text-[34px] font-bold text-[#282866] pt-[63px] md:mt-[60px]">
        Hospital
      </h2>
      <h3 className='text-[18px] text-[#D0977D] pt-3 mb-[62px]'>
        Know Your Hospital
      </h3>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-y-10'>
        <Image src={hospital1} width={408} height={408} alt="Hospital Image" className="mx-auto md:mr-[0px] w-[352px] h-[352px]" />
        <Image src={hospital2} width={408} height={408} alt="Hospital Image" className="mx-auto w-[352px] h-[352px]" />
        <Image src={hospital3} width={408} height={408} alt="Hospital Image" className="mx-auto md:ml-[0px] w-[352px] h-[352px]" />
        <Image src={hospital4} width={408} height={408} alt="Hospital Image" className="mx-auto md:mr-[0px] w-[352px] h-[352px]" />
        <Image src={hospital5} width={408} height={408} alt="Hospital Image" className="mx-auto w-[352px] h-[352px]" />
        <Image src={hospital6} width={408} height={408} alt="Hospital Image" className="mx-auto md:ml-[0px] w-[352px] h-[352px]" />
      </div>
    </div>
  )
}
