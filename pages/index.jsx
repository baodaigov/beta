import PostContainer from "@/components/PostContainer";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Home() {
    const posts = [
        {
            title: "Sốc: ChatGPT của Trung Cộng không dám trả lời các câu hỏi về Tập Cận Bình",
            description: "ChatGPT là một chatbot được phát triển bởi công ty OpenAI có trụ sở tại San Francisco, California, Hoa Kỳ. Kể từ khi được phát hành vào tháng 11/2022, nó đã tạo nên làn sóng tranh cãi rất lớn, đặc biệt là trong giới công nghệ chatbot trí tuệ nhân tạo (AI). Nắm bắt thời cơ này, gã khổng lồ Trung Quốc đã ra mắt một con chatbot tương tự...",
            date: "21 tháng Ba, 2023",
            slug: "chatgpt_cua_trung_cong_khong_dam_tra_loi_cac_cau_hoi_ve_tap_can_binh",
            thumbnail: "https://baodaigov.github.io/assets/image/chatgpt2.jpg"
        },
        {
            title: "Tập Cận Bình tái đắc cử Chủ tịch Trung Quốc nhiệm kỳ thứ ba",
            description: "Ngày 10-3, Tập Cận Bình đã chính thức giành được nhiệm kỳ thứ ba với tư cách là chủ tịch nước CHND Trung Hoa, trong đó ông tuyên bố sẽ thắt chặt kiểm soát nền kinh tế thứ 2 thế giới khi nền kinh tế này thoát khỏi suy thoái của COVID-19 và những thử thách ngoại giao gắn kết trong phiên họp quốc hội. Quốc hội Trung Quốc đã công bố kết q...",
            date: "12 tháng Ba, 2023",
            slug: "tap_can_binh_tai_dac_cu_chu_tich_trung_quoc",
            thumbnail: "https://baodaigov.github.io/assets/image/chu-tich-trung-quoc-tuyen-the-nham-chuc.jpg"
        },
        {
            title: "Động đất ở Thổ Nhĩ Kỳ và Syria – Thảm họa tồi tệ nhất châu Âu trong 100 năm",
            description: "Đã hơn 10 ngày sau trận động đất mạnh gây thảm họa tàn khốc tại Thổ Nhĩ Kỳ và Syria, hiện chính quyền và người dân hai nước đang dần chuyển sang nỗ lực tái thiết, nhanh chóng khắc phục hậu quả và hỗ trợ nhân đạo. Trận động đất được đánh giá là tồi tệ nhất ở Thổ Nhĩ Kỳ trong gần một thế kỷ qua đã phá hủy hàng chục nghìn tòa nhà, tạo ra...",
            date: "22 tháng Hai, 2023",
            slug: "dong_dat_o_tho_nhi_ky_va_syria",
            thumbnail: "https://baodaigov.github.io/assets/image/dong-dat-tai-tnk-syria.jpg"
        },
        {
            title: "Mỹ bắn hạ khinh khí cầu Trung Quốc xâm nhập không phận Hoa Kỳ",
            description: "Ngày 28/1, khinh khí cầu Trung Quốc bất ngờ xuất hiện trên bầu trời nước Mỹ; mãi cho tới ngày 4/2, không quân Hoa Kỳ dùng tên lửa bắn hạ khinh khí cầu do thám Hoa Kỳ. Tổng thống Joe Biden hết lòng khen ngợi các phi công đã hoàn thành nhiệm vụ, mặc dù Joe Biden đã ra lệnh bắn hạ khinh khí cầu vào ngày 1/2, nhưng Lầu Năm Góc khuyến nghị...",
            date: "8 tháng Hai, 2023",
            slug: "my_ban_ha_khinh_khi_cau_trung_quoc_xam_nhap_khong_phan_hoa_ky",
            thumbnail: "https://baodaigov.github.io/assets/image/china-balloon.webp"
        },
        {
            title: "Tổng thống Đào Thanh Minh gởi lời chúc mừng năm mới",
            description: "Ngày 31-12, Tổng thống Đào Thanh Minh đã gởi lời chúc mừng nhân dịp bước sang năm mới 2023, đồng thời cũng chúc Tết nguyên đán đến toàn thể nhân dân. \"Năm 2023 đang tới, tôi gởi lời chân thành cầu mong các bạn từ các tĩnh và thành phố được phù hộ và an lành trong năm mới, chúng ta sẽ cùng nhau vươt mọi khó khăn...",
            date: "31 tháng Mười hai, 2022",
            slug: "tong_thong_dao_thanh_minh_chuc_mung_nam_moi",
            thumbnail: "https://baodaigov.github.io/assets/image/mung_xuan_quy_mao_2023.jpg"
        }
    ]

    const msDelay = 4000;
    
    const [index, setIndex] = useState(0);

    const timeoutRef = useRef(null);

    function resetTimeout(){
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    useEffect(() => {
        resetTimeout();

        timeoutRef.current = setTimeout(() => {
            setIndex(prev => prev === posts.length - 1 ? 0 : prev + 1)
        }, msDelay);

        return () => {
            resetTimeout();
        }
    }, [index]);

    return (
        <>
            <Head>
                <title>Chính phủ Quốc gia Bảo Đại</title>
            </Head>
            <div className='relative overflow-hidden'>
                <div className={`w-12 h-12 justify-center items-center rounded-full bg-gray-50 bg-opacity-5 text-gray-50 absolute top-[40%] hidden left-0 z-10 transition-all duration-300 ml-16 cursor-pointer hover:ml-14 hover:bg-opacity-10 min-[1460px]:flex ${index === 0 && 'pointer-events-none'}`} onClick={() => setIndex(prev => prev - 1)}>
                    <GoChevronLeft className={`text-2xl text-gray-50 ${index === 0 && 'text-opacity-20'}`}/>
                </div>
                <div className='flex whitespace-nowrap transition duration-300' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {posts.map((post, i) => (
                        <PostContainer
                            thumbnail={post.thumbnail}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            slug={post.slug}
                            key={Math.random()}
                        />
                    ))}
                </div>
                <div className={`w-12 h-12 justify-center items-center rounded-full bg-white bg-opacity-5 text-gray-50 absolute top-[40%] hidden right-0 z-10 transition-all duration-300 mr-16 cursor-pointer hover:mr-14 hover:bg-opacity-10 min-[1460px]:flex ${index === 4 && 'pointer-events-none'}`} onClick={() => setIndex(prev => prev + 1)}>
                    <GoChevronRight className={`text-2xl text-gray-50 ${index === 4 && 'text-opacity-20'}`}/>
                </div>
                <div className='absolute bottom-0 w-full z-10 block p-10 min-[1460px]:hidden'>
                    <div className='flex justify-between items-center text-gray-50'>
                        <div className={`flex w-10 h-10 justify-center items-center rounded-full bg-gray-50 bg-opacity-5 transition-all duration-300 cursor-pointer hover:bg-opacity-10 ${index === 0 && 'pointer-events-none'}`} onClick={() => setIndex(prev => prev - 1)}>
                            <GoChevronLeft className={`text-xl text-gray-50 ${index === 0 && 'text-opacity-20'}`}/>
                        </div>
                        <p className='text-sm'>{index + 1} / {posts.length}</p>
                        <div className={`flex w-10 h-10 justify-center items-center rounded-full bg-gray-50 bg-opacity-5 transition-all duration-300 cursor-pointer hover:bg-opacity-10 ${index === 4 && 'pointer-events-none'}`} onClick={() => setIndex(prev => prev + 1)}>
                            <GoChevronRight className={`text-xl text-gray-50 ${index === 4 && 'text-opacity-20'}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
