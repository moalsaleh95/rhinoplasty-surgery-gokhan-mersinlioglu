import React from 'react'
import logo from '../public/images/LogoFooter.png'
import pin from '../public/images/pin.png'
import mail from '../public/images/mail.png'
import phone from '../public/images/phone.png'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div id='footer' className='container flex md:flex-row flex-col justify-between mt-[70px] mb-[50px]'>

      <Image className="mx-auto" alt="Logo" src={logo} width={220} height={60} />

      <div className='grid md:grid-cols-3 grid-cols-1 md:justify-items-end justify-items-center'>

        <div className='md:pt-0 pt-5'>
          <Image className="inline mr-2" alt="Logo" src={pin} width={11} height={18} />
          <span className='text-[16px] text-[#121251]'>
            Feneryolu Mah. Kızıltoprak, Bağdat Cad.
            <br />
            No: 73 Kat: 3 Daire: 7 Kadıköy / İstanbul
          </span>
        </div>

        <div className='md:pt-0 pt-5'>
          <Image className="inline mr-2" alt="Logo" src={phone} width={11} height={14} />
          <span className='text-[16px] text-[#121251]'>
            0533 055 59 22
          </span>
        </div>

        <div className='md:pt-0 pt-5'>
          <Image className="inline mr-2" alt="Logo" src={mail} width={14} height={8} />
          <span className='text-[16px] text-[#121251]'>
            info@gokhanmersinlioglu.com
          </span>
        </div>
      </div>


      <a id="whatsapp-widget" href="https://api.whatsapp.com/send?phone=905465594285&text=Hello%2C%20I%20would%20like%20to%20know%20about%20the%20services%20and%20prices%20offered%20for%20ethnic%20rhinoplasty.%0A" class="wp-link float" target="_blank">
        <div class="float">
          <img class="whatsapp_img" src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbounce.com%2Fpublish%2Fassets%2Fe4c10b7b-b780-407b-aace-4a760a348994%2F4d88a8e5-wp_1000000000000000000028.png?png8=true" />
          <div class="flex">
            <div class="circle1 circle"></div>
            <div class="circle2 circle"></div>
            <div class="circle3 circle"></div>
          </div>
        </div>
      </a>
      
    </div>
  )
}
