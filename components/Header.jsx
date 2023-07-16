import Image from "next/image"
import logo from '../public/images/LogoHeader.png';

export const Header = () => {
  return (
    <>
      <div className="w-screen bg-[#282866]">
        <div className="mx-auto container py-2 text-center flex justify-center md:justify-start">
          <Image className="" alt="Logo" src={logo} width={220} height={60} />
        </div>
      </div>
      <div className="bg-white container md:inline-block hidden ">
        <nav className="h-[60px] flex items-center">
          <a href="#services" className="mr-[50px]">Rhinoplasty Services</a>
          <a href="#beforeAfter" className="mr-[50px]">Before & After</a>
          <a href="#packageDetails" className="mr-[50px]">Package Details</a>
          <a href="#hospital" className="mr-[50px]">Hospital</a>
          <a href="#faq" className="mr-[50px]">FAQ</a>
          <a href="#footer">Contact</a>
        </nav>
      </div>
    </>
  )
}
