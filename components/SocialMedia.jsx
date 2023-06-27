'use client'

import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, TwitterShareButton } from 'next-share';
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';

export default function SocialMedia({ url, title }){
    return (
        <div className='flex'>
            <FacebookShareButton url={url} quote={title}>
                <FaFacebook className='text-gray-400 mr-3 text-base md:text-lg hover:text-gray-500'/>
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                <FaTwitter className='text-gray-400 mr-3 text-base md:text-lg hover:text-gray-500'/>
            </TwitterShareButton>
            <PinterestShareButton url={url} media={title}>
                <FaPinterest className='text-gray-400 mr-3 text-base md:text-lg hover:text-gray-500'/>
            </PinterestShareButton>
            <LinkedinShareButton url={url}>
                <FaLinkedin className='text-gray-400 mr-3 text-base md:text-lg hover:text-gray-500'/>
            </LinkedinShareButton>
        </div>
    )
}