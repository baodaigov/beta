import { EB_Garamond } from "next/font/google";
import Link from "next/link";
import { FiEye } from "react-icons/fi";

const font = EB_Garamond({ subsets: ['latin'] });

export default function PostContainer({ thumbnail, title, description, date, slug, disabled, className }){
    return (
        <div className={`bg-no-repeat bg-cover bg-center ${className}`} style={{ backgroundImage: `url('${thumbnail}')` }}>
            <div className='whitespace-normal bg-black bg-opacity-80 h-full w-screen text-gray-50 py-44 px-8 sm:px-12'>
                <div className='mx-auto max-w-6xl'>
                    <div className={font.className}>
                        <p className='text-3xl mb-5 sm:text-4xl'>{title}</p>
                        <p className='text-sm mb-14 sm:text-base'>{description}</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-semibold text-xs sm:text-sm'>{date}</p>
                        <div className='w-[1px] h-6 mx-6 bg-yellow-600'></div>
                        <button className='bg-gray-50 text-gray-900 rounded-full px-4 py-2 hover:bg-gray-300 disabled:bg-gray-500 disabled:pointer-events-none' disabled={disabled}>
                            <Link href={`/news/${slug}`} passHref className='flex items-center'>
                                <FiEye className='mr-2 text-xs sm:text-sm'/>
                                <p className='font-semibold text-xs sm:text-sm'>Đọc</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}