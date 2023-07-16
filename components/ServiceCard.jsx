import Image from "next/image"

export const ServiceCard = (props) => {
    const { icon, title, content, href } = props;
    return (
        <div className="text-center mx-auto mb-[60px] mb:mt-0">
            <div className='w-[303px] h-[276px] bg-[#282866] rounded-lg relative'>
                <div className='whiteCircle absolute top-[-25px] left-[120px] 150'>
                    <Image src={icon} width={31} height={36} alt="icon" className="mx-auto pt-2" />
                </div>

                <h3 className="text-white font-bold text-[22px] pt-[44px] text-center">{title}</h3>
                <p className="text-white text-[14px] pt-[24px] text-center px-5">{content}</p>
            </div>

            <a href={href}><button type="button" className="btn-orange bg-[#D0977D] text-[#282866] w-[200px] h-[50px] border-2 border-[#D0977D] rounded-md mt-[15px]">
                Get a Price
            </button>
            </a>
        </div>
    )
}
