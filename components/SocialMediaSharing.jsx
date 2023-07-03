'use client'

import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, TwitterShareButton } from 'next-share';
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';

export default function SocialMediaSharing({ url, title, className }){
    return (
        <div className='flex'>
            <FacebookShareButton url={url} quote={title}>
                <FaFacebook className={`${className}`}/>
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                <FaTwitter className={`${className}`}/>
            </TwitterShareButton>
            <PinterestShareButton url={url} media={title}>
                <FaPinterest className={`${className}`}/>
            </PinterestShareButton>
            <LinkedinShareButton url={url}>
                <FaLinkedin className={`${className}`}/>
            </LinkedinShareButton>
        </div>
    )
}