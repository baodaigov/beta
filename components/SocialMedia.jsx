import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function SocialMedia({ className }){
    return (
        <div className='flex'>
            <Link target='_blank' href='https://www.facebook.com/baodaigov' className={`${className}`}>
                <FaFacebook/>
            </Link>
            <Link target='_blank' href='https://twitter.com/baodaigov' className={`${className}`}>
                <FaTwitter/>
            </Link>
            <Link target='_blank' href='https://www.instagram.com/baodaigov' className={`${className}`}>
                <FaInstagram/>
            </Link>
            <Link target='_blank' href='https://www.youtube.com/@baodaigov' className={`${className}`}>
                <FaYoutube/>
            </Link>
        </div>
    )
}