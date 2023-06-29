import Link from "next/link";
import { FiEye } from "react-icons/fi";

export default function PostContainerClassic({ thumbnail, title, description, date, slug, disabled }){
    return (
        <Link href={`/news/${slug}`} className={`rounded-lg shadow-md shadow-gray-300 overflow-hidden flex justify-between flex-col w-[420px] my-3 mx-3 ${disabled && 'pointer-events-none'}`}>
            <div className='flex flex-col'>
                <div className='bg-cover bg-center w-full h-52' style={{ backgroundImage: `url('${thumbnail}')` }}></div>
                <div className='p-6 text-gray-800'>
                    <p className='font-bold text-2xl'>{title}</p>
                    <p className='mt-2 text-sm text-gray-400'>{description}</p>
                </div>
            </div>
            <div className='p-6 h-[72px] flex items-center text-sm text-gray-800'>
                <p>{date}</p>
                <div className='w-[1px] h-5 bg-gray-800 mx-4'></div>
                {disabled ? (
                    <p className='text-gray-400'>Bài viết không khả dụng.</p>
                ) : (
                    <div className='rounded-full py-2 px-4 bg-gray-800 text-gray-50 flex items-center'>
                        <FiEye className='mr-2'/>
                        <p className='font-semibold text-xs'>Đọc</p>
                    </div>
                )}
            </div>
        </Link>
    )
}