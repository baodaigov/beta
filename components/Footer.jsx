import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import LogoW from "../public/images/coat_of_arms_w.svg";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";

const font = EB_Garamond({ subsets: ['latin'] });

export default function Footer(){
    return (
        <>
            <div className='bg-[#0a314d] text-gray-50 py-7'>
                <div className='flex flex-col mx-auto max-w-7xl px-10 max-[874px]:max-w-lg'>
                    <div className={`flex justify-between items-center mb-6 ${font.className} max-[874px]:flex-col max-[874px]:mb-10`}>
                        <div className='flex items-center max-[874px]:mb-10'>
                            <div className='relative w-16 h-14 max-[874px]:w-12 max-[874px]:h-12'>
                                <Image src={LogoW} fill/>
                            </div>
                            <p className='text-xl ml-7 max-[874px]:text-lg'>CHÍNH PHỦ QUỐC GIA BẢO ĐẠI</p>
                        </div>
                        <div className='flex justify-between items-center max-[874px]:flex-col'>
                            <Link href='https://baodaigov.github.io/ttdv' className='text-sm mr-10 hover:underline hover:underline-offset-2 max-[874px]:mr-0 max-[874px]:mb-8 max-[874px]:text-xs'>THÔNG TIN & DỊCH VỤ</Link>
                            <Link href='https://baodaigov.github.io/tailieu' className='text-sm hover:underline hover:underline-offset-2 max-[874px]:text-xs'>TÀI LIỆU – THƯ VIỆN</Link>
                        </div>
                    </div>
                    <div className='border-solid border-t-[0.5px] border-t-gray-100'>
                        <div className='flex justify-between items-center p-6 max-[874px]:flex-col max-[874px]:justify-center'>
                            <div className='flex items-center max-[874px]:mb-8'>
                                <p className='font-light text-sm mr-5 max-[874px]:hidden'>THEO DÕI QUA</p>
                                <SocialMedia className='mr-3 text-lg max-[874px]:text-base'/>
                            </div>
                            <div className='flex items-center text-sm max-[874px]:text-xs'>
                                <Link href='mailto:baodaigov@gmail.com' className='flex items-center hover:underline underline-offset-4'><FiMail className="mr-2 max-[874px]:mr-0"/> <p className='max-[874px]:hidden'>baodaigov@gmail.com</p></Link>
                                <div className="w-[1px] h-4 mx-5 bg-gray-50"></div>
                                <Link href='tel:+16823101496' className='flex items-center hover:underline underline-offset-4'><FiPhone className="mr-2 max-[874px]:mr-0"/> <p className='max-[874px]:hidden'>+1 &#40;682&#41; 310-1496</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}