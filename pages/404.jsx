import Head from "next/head";

export default function PageNotFound(){
    return (
        <>
            <Head>
                <title>Không tìm thấy trang này.</title>
            </Head>
            <div className='text-center py-64 px-7'>
                <div className='mx-auto max-w-5xl'>
                    <p className='font-extrabold text-gray-800 text-4xl tracking-tight leading-tight mb-8 md:text-5xl'>Trang này có vẻ không tồn tại...!</p>
                    <p className='text-gray-800 text-sm mb-5'>Chúng tôi xin lỗi vì sự bất tiện này, có vẻ trang bạn đang tìm kiếm hiện đang trong tình trạng bảo trì hoặc không tồn tại trong server.</p>
                    <p className='text-gray-800 text-sm mb-5'>Vui lòng kiểm tra lại đường dẫn hoặc gửi mail cho chúng tôi về sự cố này.</p>
                </div>
            </div>
        </>
    )
}