import Image from "next/image"

export const PackageCard = (props) => {
    const { icon, title, content, width, height } = props;
    return (
        <div className="text-center md:mb-0 mb-[100px]">
            <div className='w-[289px] h-[250px] bg-[#fff] rounded-lg relative'>
                <div className='navyCircle absolute top-[-70px] left-[88px]'>
                    <Image src={icon} width={width} height={height} alt="icon" className="mx-auto pt-6" />
                </div>

                <h3 className="text-[#282866] font-bold text-[22px] pt-[44px] text-center">{title}</h3>
                <p className="text-[#282866] text-[16px] pt-[24px] text-center px-5">{content}</p>
            </div>

        </div>
    )
}
