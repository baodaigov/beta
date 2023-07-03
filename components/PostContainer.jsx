import { EB_Garamond } from "next/font/google";
import Link from "next/link";
import { FiEye } from "react-icons/fi";

const font = EB_Garamond({ subsets: ['latin'] });

export default function PostContainer({ thumbnail, title, description, date, slug, disabled, className }){
    return (
        <div className={`bg-no-repeat bg-cover bg-center ${className}`} style={{ backgroundImage: `url('${thumbnail}')` }}>
            <div className='whitespace-normal bg-black bg-opacity-80 h-full w-screen text-gray-50 py-44 px-12 max-sm:px-8'>
                <div className='mx-auto max-w-6xl'>
                    <div className={font.className}>
                        <p className='text-4xl mb-5 max-sm:text-3xl'>{title}</p>
                        <p className='text-base mb-14 max-sm:text-sm'>{description}</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-semibold text-sm max-sm:text-xs'>{date}</p>
                        <div className='w-[1px] h-6 mx-6 bg-yellow-600'></div>
                        <Link href={`/news/${slug}`} passHref className={`flex items-center ${disabled && 'pointer-events-none'}`}>
                            <button className={`flex items-center bg-gray-50 text-gray-900 rounded-full px-4 py-2 hover:bg-gray-300 ${disabled && 'bg-gray-500'}`}>
                                <FiEye className='mr-2 text-sm max-sm:text-xs'/>
                                <p className='font-semibold text-sm max-sm:text-xs'>Đọc</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}