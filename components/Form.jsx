import React from 'react'

export const Form = () => {
  return (
    <div className='md:relative absolute md:bottom-[0] bottom-[17rem] mt-[203px] md:w-[437px] w-[335px] h-[523px] md:bg-white bg-[#282866] border-[#6969FF] border-2 rounded-lg'>
      <h3 className='font-bold text-[22px] text-white md:text-black mt-[60px] pl-6'>
        Request a Free Consultation
      </h3>
      <h4 className='text-[16px] w-[322px] pl-6 text-white md:text-black'>
        Leave us your contact information and we’ll get back to you as soon as possible.
      </h4>

      <form className='flex flex-col md:w-[90%] mx-auto items-center'>
        <input type='text' placeholder='Name & Surname' className='mt-[25px] md:bg-[#E5E5E5] bg-white md:w-[400px] w-[300px] h-[55px] rounded-lg text-[#ADADAD] pl-4' />
        <input type='email' placeholder='Mail' className='mt-[25px] md:bg-[#E5E5E5] bg-white md:w-[400px] w-[300px] h-[55px] rounded-lg text-[#ADADAD] pl-4' />
        <input type='tel' placeholder='Phone' className='mt-[25px] md:bg-[#E5E5E5] bg-white md:w-[400px] w-[300px] h-[55px] rounded-lg text-[#ADADAD] pl-4' />
        <input type='submit' value='Unlock a New Look Today!' className='mt-[25px] md:bg-[#4D4DCE] bg-[#D0977D] border-2 md:border-[#6969FF] border-[#D0977D] text-white w-[300px] h-[55px] rounded-lg mx-auto' />
      </form>
    </div>
  )
}
