import image_1 from '../public/images/b1.png'
import image_2 from '../public/images/b2.png'
import image_3 from '../public/images/b3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css';

export const BeforeAfter = () => {

  const carousel_images = [
    {
      id: "1",
      name: "image_1",
      src: image_1,
      text: '“Dr. Gökhan Mersinlioğlu is a real professional. He listened attentively to my worries and offered comprehensive details regarding the rhinoplasty operation. The results surpassed my expectations and I couldn’t be happier with my new nose!”',
      person: 'Emma S.'
    },
    {
      id: "2",
      name: "image_2",
      src: image_2,
      text: '“I had been battling with a deviated septum for years, hurting my breathing and quality of life. Dr.Mersinlioğlu conducted septoplasty with the utmost accuracy and attention. I can now breath easily and experience enhanced nose function. Thank you!”',
      person: 'James D.'
    },
    {
      id: "3",
      name: "image_3",
      src: image_3,
      text: '“As someone with distinguishing ethnic traits, I was worried about getting rhinoplasty. However, Dr.Mersinlioğlu’s competence in ethnic rhinoplasty comforted me. He understood my wish to keep my ethnic identity while strengthening my nose. The results are absolutely natural, and I feel more confident than ever!”',
      person: 'Maya K.'
    },
    {
      id: "4",
      name: "image_1",
      src: image_1,
      text: '“Dr. Gökhan Mersinlioğlu is a real professional. He listened attentively to my worries and offered comprehensive details regarding the rhinoplasty operation. The results surpassed my expectations and I couldn’t be happier with my new nose!”',
      person: 'Emma S.'
    },
    {
      id: "5",
      name: "image_2",
      src: image_2,
      text: '“I had been battling with a deviated septum for years, hurting my breathing and quality of life. Dr.Mersinlioğlu conducted septoplasty with the utmost accuracy and attention. I can now breath easily and experience enhanced nose function. Thank you!”',
      person: 'James D.'
    },
    {
      id: "6",
      name: "image_3",
      src: image_3,
      text: '“As someone with distinguishing ethnic traits, I was worried about getting rhinoplasty. However, Dr.Mersinlioğlu’s competence in ethnic rhinoplasty comforted me. He understood my wish to keep my ethnic identity while strengthening my nose. The results are absolutely natural, and I feel more confident than ever!”',
      person: 'Maya K.'
    },
  ]

  const images = carousel_images.map((item, index) => {
    console.log(item.src)
    return (

      <SwiperSlide>
        <div class="container_carousel item">
          <div class="flex_container">
            <img class="image" src={item.src.src} />
            <img class="logo" src="https://user-assets-unbounce-com.s3.amazonaws.com/0ef4e955-24aa-44fb-8465-7820a75ae620/cf881371-9ff9-4cc5-8dd7-8fdbe8077a79/group-57.original.png" />
            <div class="review-container">
              <p class="review text-[12px] text-[#282866]">
                {item.text}<br /> <br /> <b><i>{item.person}</i></b>
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <div id='beforeAfter' className='w-full container mb-[125px] text-center'>
      <h2 className="beforeAfter text-[34px] font-bold text-[#282866] md:mt-[90px] ">
        Rhinoplasty Before & After
      </h2>
      <h3 className='text-[18px] text-[#D0977D] pt-3'>
        Get to Know Us Through Patient Testimonials
      </h3>

      <div className='w-full mt-[43px]' >
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images}
        </Swiper>
        <div className="swiper-pagination">

        </div>

      </div>

    </div>
  )
}
