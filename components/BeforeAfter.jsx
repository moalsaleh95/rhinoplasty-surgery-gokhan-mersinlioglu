// import OwlCarousel from 'react-owl-carousel';
import image_1 from '../public/images/b1.png'
import image_2 from '../public/images/b2.png'
import image_3 from '../public/images/b3.png'

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
      <img id={item.id} alt={item.name} src={item.src} className='' />
    )
  })

  return (
    <>
      {/* <h2 className="text-[34px] font-bold text-[#282866] pt-[63px] mt-[90px]">
        Rhinoplasty Before & After
      </h2>
      <h3 className='text-[18px] text-[#D0977D] pt-3'>
        Get to Know Us Through Patient Testimonials
      </h3>

      <div className='relative' >
        <OwlCarousel
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
        </OwlCarousel>
      </div> */}
    </>
  )
}
