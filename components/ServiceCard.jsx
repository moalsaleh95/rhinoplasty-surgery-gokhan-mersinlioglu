import Image from "next/image"

export const ServiceCard = (props) => {
    const { icon, title, content } = props;
    return (
        <div className="text-center">
            <div className='w-[303px] h-[276px] bg-[#282866] rounded-lg relative'>
                <div className='whiteCircle absolute top-[-25px] left-[120px] 150'>
                    <Image src={icon} width={31} height={36} alt="icon" className="mx-auto pt-2" />
                </div>

                <h3 className="text-white font-bold text-[22px] pt-[44px] text-center">{title}</h3>
                <p className="text-white text-[14px] pt-[24px] text-center px-5">{content}</p>
            </div>

            <button type="button" className="bg-[#D0977D] text-[#282866] w-[200px] h-[50px] border-2 border-[#D0977D] rounded-md mt-[15px]">
                Get a Price
            </button>
        </div>
    )
}
