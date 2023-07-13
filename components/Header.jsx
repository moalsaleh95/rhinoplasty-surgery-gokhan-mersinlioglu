import Image from "next/image"
import logo from '../public/images/LogoHeader.png';

export const Header = () => {
  return (
    <>
      <div className="w-screen bg-[#282866]">
        <div className="mx-auto container py-2">
          <Image className="" alt="Logo" src={logo} width={220} height={60} />
        </div>
      </div>
      <div className="bg-white container">
        <nav className="h-[60px] flex items-center">
          <a href="" className="mr-[50px]">Rhinoplasty Services</a>
          <a href="" className="mr-[50px]">Before & After</a>
          <a href="" className="mr-[50px]">Package Details</a>
          <a href="" className="mr-[50px]">Hospital</a>
          <a href="" className="mr-[50px]">FAQ</a>
          <a href="">Contact</a>
        </nav>
      </div>
    </>
  )
}
