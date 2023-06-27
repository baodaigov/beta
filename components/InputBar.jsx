'use client'

import queryString from "query-string";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";

export default function InputBar({ onSearch }){
    const router = useRouter();
    const [queryParam, setQueryParam] = useState('');

    const search = () => {
        const query = { q: queryParam };
        
        const url = queryString.stringifyUrl({
            url: '/search',
            query
        });

        router.push(url);
    }

    return (
        <div className='flex bg-neutral-100 hover:bg-neutral-200'>
            <input className='border-none outline-none appearance-none w-full bg-transparent px-6 py-4 pr-0 placeholder:text-neutral-400 text-sm lg:text-base' placeholder='Tìm kiếm bài viết...' value={queryParam} autoFocus={true} onInput={e => setQueryParam(e.target.value)} onKeyDown={e => e.key === 'Enter' && search()}/>
            <div className='cursor-pointer bg-transparent px-5 py-4 flex items-center' onClick={search}>
                <FiSearch className='text-base lg:text-lg'/>
            </div>
        </div>
    )
}