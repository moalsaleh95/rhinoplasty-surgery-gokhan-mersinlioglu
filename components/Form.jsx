import React from 'react'

export const Form = () => {
  return (
    <div className='mt-[203px] w-[437px] h-[523px] bg-white border-[#6969FF] border-2 rounded-lg'>
      <h3 className='font-bold text-[22px] mt-[60px] pl-6'>
        Request a Free Consultation
      </h3>
      <h4 className='text-[16px] w-[322px] pl-6'>
        Leave us your contact information and we’ll get back to you as soon as possible.
      </h4>
      <form className='flex flex-col w-[90%] mx-auto'>
        <input type='text' placeholder='Name & Surname' className='mt-[25px] bg-[#E5E5E5] w-[400px] h-[55px] rounded-lg text-[#ADADAD] pl-4' />
        <input type='email' placeholder='Mail' className='mt-[25px] bg-[#E5E5E5] w-[400px] h-[55px] rounded-lg text-[#ADADAD] pl-4' />
        <input type='tel' placeholder='Phone' className='mt-[25px] bg-[#E5E5E5] w-[400px] h-[55px] rounded-lg text-[#ADADAD] pl-4' />
        <input type='submit' value='Unlock a New Look Today!' className='mt-[25px] bg-[#4D4DCE] border-2 border-[#6969FF] text-white w-[300px] h-[55px] rounded-lg mx-auto' />
      </form>
    </div>
  )
}
