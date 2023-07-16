// import OwlCarousel from 'react-owl-carousel';
import image_1 from '../public/images/b1.png'
import image_2 from '../public/images/b2.png'
import image_3 from '../public/images/b3.png'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const BeforeAfter = () => {

  const carousel_images = [
    {
      id: "1",
      name: "image_1",
      src: image_1
    },
    {
      id: "2",
      name: "image_2",
      src: image_2
    },
    {
      id: "3",
      name: "image_3",
      src: image_3
    },
  ]

  const images = carousel_images.map((item, index) => {
    return (
      <Image height={300} width={300} id={item.id} alt={item.name} src={item.src} className='' />
    )
  })

  return (
    <div id='beforeAfter'>
      <h2 className="text-[34px] font-bold text-[#282866] md:pt-[63px] md:mt-[90px]">
        Rhinoplasty Before & After
      </h2>
      <h3 className='text-[18px] text-[#D0977D] pt-3'>
        Get to Know Us Through Patient Testimonials
      </h3>

      <div className='' >
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide>
            <div class="container_carousel item">
              <div class="flex_container">
                <img class="image" src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbounce.com%2Fpublish%2Fassets%2F335d873c-6445-45d4-a204-d19ca2c498b1%2F54e21cb0-4-mayis_1000000000000000000028.png?png8=true" />
                <img class="logo" src="https://user-assets-unbounce-com.s3.amazonaws.com/0ef4e955-24aa-44fb-8465-7820a75ae620/cf881371-9ff9-4cc5-8dd7-8fdbe8077a79/group-57.original.png" />
                <div class="review-container">
                  <p class="review">“Dr. Gökhan Mersinlioğlu is a real professional. He listened attentively to my worries and offered
                    comprehensive details regarding the rhinoplasty operation. The results surpassed my expectations and I couldn’t be happier with my new nose!” Emma S.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="container_carousel item">
              <div class="flex_container">
                <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbounce.com%2Fpublish%2Fassets%2F8c25d859-8d98-4766-8c58-8f76f0141cdc%2F3e442d41-24-nisan_1000000000000000000028.png?png8=true" />
                <img class="logo" src="https://user-assets-unbounce-com.s3.amazonaws.com/0ef4e955-24aa-44fb-8465-7820a75ae620/cf881371-9ff9-4cc5-8dd7-8fdbe8077a79/group-57.original.png" />
                <div class="review-container">
                  <p class="review">“I had been battling with a deviated septum for years, hurting my breathing and quality of life. Dr.Mersinlioğlu conducted septoplasty with the utmost accuracy and attention. I can now breath easily and experience enhanced nose function. Thank you!” James D.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="container_carousel item">
              <div class="flex_container">
                <img src="https://image-service.unbounce.com/https%3A%2F%2Fapp.unbounce.com%2Fpublish%2Fassets%2F0f6a338b-dd79-452f-affe-67c34884b0d9%2F2e22a3ff-27-nisan-1_1000000000000000000028.png?png8=true" />
                <img class="logo" src="https://user-assets-unbounce-com.s3.amazonaws.com/0ef4e955-24aa-44fb-8465-7820a75ae620/cf881371-9ff9-4cc5-8dd7-8fdbe8077a79/group-57.original.png" />
                <div class="review-container">
                  <p class="review">“As someone with distinguishing ethnic traits, I was worried about getting rhinoplasty. However, Dr.Mersinlioğlu’s competence in ethnic rhinoplasty comforted me. He understood my wish to keep my ethnic identity while strengthening my nose. The results are absolutely natural, and I feel more confident than ever!” Maya K.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image height={300} width={300} src={image_3} className='' />
          </SwiperSlide>
          ...
        </Swiper>


        {/* <OwlCarousel
          // navText=
          // {[`<img src=${arrow} class='rotate-180 w-[20px] mx-auto' />`, `<img src=${arrow} class='w-[20px] mx-auto' />`]}
          nav={true}
          mouseDrag={true}
          touchDrag={true}
          stagePadding={0}
          margin={30}
          autoplay={true}
          merge={true}
          dots={false}
          dotsEach={1}
          slideBy={3}
          loop={true}
          responsive=
          {
            {
              '1': {
                items: 1
              },
              '1000': {
                items: 2
              },
              '1400': {
                items: 3
              }
            }
          }
        >
          {images}
        </OwlCarousel> */}


      </div>

    </div>
  )
}
