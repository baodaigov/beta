'use client';

import { EB_Garamond } from "next/font/google";
import { FiMail, FiMenu, FiPhone, FiSearch, FiX } from 'react-icons/fi';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from "react";

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
            <div className={`bg-[#062135] px-0 py-2 flex justify-center items-center text-xs text-gray-50 lg:flex-row-reverse lg:justify-normal lg:text-sm lg:px-14 ${font.className}`}>
                <div className="flex items-center">
                    <Link href='mailto:baodaigov@gmail.com' className='flex items-center hover:underline underline-offset-4'><FiMail className="mr-2"/> baodaigov@gmail.com</Link>
                    <div className="w-[1px] h-4 mx-5 bg-gray-50"></div>
                    <Link href='tel:+16823101496' className='flex items-center hover:underline'><FiPhone className="mr-2"/> +1 &#40;682&#41; 310-1496</Link>
                </div>
            </div>
            <div className={`w-full sticky top-0 z-10 ${font.className}`}>
                <div className={`bg-[#0a314d] text-gray-50 transition-all lg:h-20 ${navMenuActive ? 'h-screen' : 'h-[72px]'}`}>
                    <div className='py-6'>
                        <div className='mx-auto max-w-7xl px-5 flex justify-between items-center lg:px-9'>
                            {navMenuActive ? <FiX onClick={() => setNavMenuActive(false)}/> : <FiMenu className='block lg:hidden' onClick={() => setNavMenuActive(true)}/>}
                            <Link href='/'>
                                <p className='text-base lg:text-2xl'>CHÍNH PHỦ QUỐC GIA BẢO ĐẠI</p>
                            </Link>
                            <div role="navigation" className="flex items-center">
                                <div className='hidden items-center lg:flex'>
                                    {routes.map(i => (
                                        <Link href={i.href} key={Math.random()}>
                                            <p className='text-sm mr-9 text-gray-50 hover:text-gray-400'>{i.label}</p>
                                        </Link>
                                    ))}
                                </div>
                                <Link href='/search' onClick={() => setNavMenuActive(false)}>
                                    <FiSearch className='text-gray-50 hover:text-gray-400'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`py-6 px-8 relative bottom-3 opacity-0 pointer-events-none transition-all duration-300 ${navMenuActive && 'bottom-0 opacity-100 pointer-events-auto'}`}>
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