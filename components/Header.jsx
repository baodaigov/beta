'use client';

import 'dotenv/config';
import { EB_Garamond } from "next/font/google";
import { FiMail, FiMenu, FiPhone, FiSearch, FiX } from 'react-icons/fi';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useMemo, useState } from "react";

const font = EB_Garamond({ subsets: ['latin'] });

export default function Header(){
    const [navMenuActive, setNavMenuActive] = useState(false);
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'TRANG CHỦ',
            href: '/'
        },
        {
            label: 'GIỚI THIỆU',
            href: '/about'
        },
        {
            label: 'TÀI LIỆU',
            href: '/tailieu'
        },
        {
            label: 'TIN TỨC SỰ KIỆN',
            href: '/news'
        }
    ], [pathname]);

    return (
        <>
            <div className={`bg-[#062135] px-14 py-2 flex flex-row-reverse items-center text-sm text-gray-50 max-lg:flex-row max-lg:justify-center max-lg:text-xs max-lg:px-0 ${font.className}`}>
                <div className="flex items-center">
                    <Link href='mailto:baodaigov@gmail.com' className='flex items-center hover:underline underline-offset-4'><FiMail className="mr-2"/> baodaigov@gmail.com</Link>
                    <div className="w-[1px] h-4 mx-5 bg-gray-50"></div>
                    <Link href='tel:+16823101496' className='flex items-center hover:underline underline-offset-4'><FiPhone className="mr-2"/> +1 &#40;682&#41; 310-1496</Link>
                </div>
            </div>
            <div className={`w-full sticky top-0 z-10 ${font.className}`}>
                <div className={`bg-[#0a314d] text-gray-50 transition-all h-20 z-10 max-lg:h-[72px]`}>
                    <div className='py-6'>
                        <div className='mx-auto max-w-7xl px-9 flex justify-between items-center max-lg:px-5'>
                            {navMenuActive ? <FiX onClick={() => setNavMenuActive(false)}/> : <FiMenu className='hidden max-lg:block' onClick={() => setNavMenuActive(true)}/>}
                            <Link href='/'>
                                <p className='text-2xl max-lg:text-base'>CHÍNH PHỦ QUỐC GIA BẢO ĐẠI</p>
                            </Link>
                            <div role="navigation" className="flex items-center">
                                <div className='flex items-center max-lg:hidden'>
                                    {routes.map(i => (
                                        <Link href={i.href} className='mr-9' key={Math.random()}>
                                            <p className='text-sm text-gray-50 hover:text-gray-400'>{i.label}</p>
                                        </Link>
                                    ))}
                                </div>
                                <Link href='/search' onClick={() => setNavMenuActive(false)}>
                                    <FiSearch className='text-gray-50 hover:text-gray-400'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`py-6 px-8 bg-[#0a314d] h-screen opacity-0 pointer-events-none transition-all z-10 ${navMenuActive && 'opacity-100 pointer-events-auto'}`}>
                        {routes.map(i => (
                            <Link href={i.href} onClick={() => setNavMenuActive(false)} key={Math.random()}>
                                <p className='text-2xl mb-9 text-gray-50 hover:text-gray-400'>{i.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}