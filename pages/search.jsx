import SearchBar from "@/components/InputBar";
import Head from "next/head";

export default function Search(){
    return (
        <>
            <Head>
                <title>Tìm kiếm | Chính phủ Quốc gia Bảo Đại</title>
            </Head>
            <div className='py-20 px-6'>
                <div className='mx-auto max-w-4xl'>
                    <SearchBar/>
                </div>
            </div>
        </>
    )
}