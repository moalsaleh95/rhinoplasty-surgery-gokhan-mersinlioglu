import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import faqMobile from '../public/images/faqMobile.png'

export const Faq = () => {

  const FAQData = [
    {
      id: '1',
      question: 'How much is a lip lift in Turkey?',
      answer: "The average cost of a lip lift procedure in Turkey typically ranges between $1900 and $2300. However, it's important to note that the exact cost can vary depending on various factors such as the surgeon's experience, the location of the clinic, the complexity of the procedure, and any additional services included in the treatment package."
    },
    {
      id: '2',
      question: 'How long does a lip lift last?',
      answer: "Lip lifts are often considered long-lasting operations that deliver benefits for several years. However, if you are unhappy with the appearance of your lips or want to reduce any visible scars, a touch-up procedure may be required in some situations. The outcome of your lip lift surgery will rely on your unique anatomy and the quantity of skin that has to be elevated."
    },
    {
      id: '3',
      question: 'How painful is a chin implant?',
      answer: "Lip lifts are often considered long-lasting operations that deliver benefits for several years. However, if you are unhappy with the appearance of your lips or want to reduce any visible scars, a touch-up procedure may be required in some situations. The outcome of your lip lift surgery will rely on your unique anatomy and the quantity of skin that has to be elevated."
    },
    {
      id: '4',
      question: 'How long do chin implants last?',
      answer: "Lip lifts are often considered long-lasting operations that deliver benefits for several years. However, if you are unhappy with the appearance of your lips or want to reduce any visible scars, a touch-up procedure may be required in some situations. The outcome of your lip lift surgery will rely on your unique anatomy and the quantity of skin that has to be elevated."
    },
    {
      id: '5',
      question: 'Is otoplasty very painful?',
      answer: "The average cost of a lip lift procedure in Turkey typically ranges between $1900 and $2300. However, it's important to note that the exact cost can vary depending on various factors such as the surgeon's experience, the location of the clinic, the complexity of the procedure, and any additional services included in the treatment package."
    }
  ]

  const refs = FAQData.map(() => {
    return React.createRef();
  })

  const handleClosing = (id) => {
    const otherRefs = refs.filter(ref => {
      console.log('otherRefs:', ref.current?.getAttribute("data-id"))

      return ref.current?.getAttribute("data-id") !== id;
    });

    otherRefs.forEach(ref => {
      console.log('isOpen:', ref.current?.getAttribute("data-open"))

      const isOpen = ref.current?.getAttribute("data-open") === "true";

      if (isOpen) {
        ref.current?.click();
      }
    })
  }

  const questions = FAQData.map((item, idx) => {

    const { id, question, answer } = item;

    const defaultOpen = (idx === 0 ? true : false);

    return (
      <Disclosure as="div" defaultOpen={defaultOpen} className="mt-2" key={id}>
        {({ open }) => (
          <div className='mt-[35px] w-[95%] mx-auto md:ml-[45px]'>
            <Disclosure.Button
              ref={refs[idx]}
              data-id={idx}
              data-open={open}
              onClick={() => handleClosing(idx)}
              className="flex justify-between w-full px-4 py-6 text-sm font-medium text-left bg-white rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
            >

              <span id="quesitonSpan" className='text-[#282866] text-[16px]'>
                {question}
              </span>

              <ChevronUpIcon
                className={`${open ? "transform rotate-180" : ""
                  } w-5 h-5 text-[#282866]`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="px-4 pt-4 pb-2 text-[16px] text-gray-500">
              <Disclosure.Button className={"text-start"}>
                {answer}
              </Disclosure.Button>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    )
  })

  return (
    <div id='faq' className='md:h-[758px] w-full mt-[114px] '>

      <div className='grid md:grid-cols-2 grid-cols-1 '>
        <div></div>
        <div>

          <h2 className='text-[34px] text-[#282866] font-bold mt-[64px] ml-[45px]'>
            Frequently Asked Questions
          </h2>

          {questions}

        </div>

        <Image src={faqMobile} width={375} height={395} className='mx-auto pt-[40px] md:hidden' />
      </div>


    </div>
  )
}
