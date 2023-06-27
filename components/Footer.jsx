import { EB_Garamond } from "next/font/google";

const font = EB_Garamond({ subsets: ['latin'] });

export default function Footer(){
    return (
        <div className={font.className}>
            <div className='bg-[#0a314d] text-gray-50 py-6'>
                <div className='mx-auto max-w-7xl px-5'>
                    <p>asmlmerlemrlkwermklwr</p>
                </div>
            </div>
        </div>
    )
}