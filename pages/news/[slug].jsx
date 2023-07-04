import 'dotenv/config';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { FiCalendar, FiUser } from 'react-icons/fi';
import { BiPencil } from 'react-icons/bi';
import SocialMediaSharing from '@/components/SocialMediaSharing';
import Head from 'next/head';
import PostNotAvailable from './PostUnavailable';
import Link from 'next/link';

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);
    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export default function PostTinTuc({ frontMatter: { title, description, author, date, slug, disabled }, mdxSource }){
    return (
        <>
            <Head>
                <title>{disabled ? 'Bài viết không khả dụng.' : title}</title>
                <meta name="description" content={disabled ? 'Bài viết không khả dụng.' : description}></meta>
            </Head>
            {disabled ? (
                <div className='text-center py-64 px-7'>
                    <PostNotAvailable/>
                </div>
            ) : (
                <div className='mx-auto max-w-4xl py-24 px-6 max-lg:py-16'>
                    <div className='text-gray-800 border-b border-solid border-gray-200'>
                        <p className='font-bold leading-snug text-4xl max-lg:text-3xl'>{title}</p>
                        <div className='flex justify-between text-sm text-gray-400 my-7 max-md:text-xs'>
                            <div className='flex items-center'>
                                <FiUser className='mr-2'/>
                                <p className='mr-5'>{author}</p>
                                <FiCalendar className='mr-2'/>
                                <p>{date}</p>
                            </div>
                            <div className='flex items-center text-lg max-md:text-base'>
                                <SocialMediaSharing className='mr-3 text-gray-400 hover:text-gray-500' url={`${process.env.NEXT_PUBLIC_URL}/news/${slug}`} title={title}/>
                                <Link href={`${process.env.NEXT_PUBLIC_GH_DEV}/posts/${slug}.mdx`} passHref target='_blank'><BiPencil className='text-gray-400 hover:text-gray-500'/></Link>
                            </div>
                        </div>
                    </div>
                    <article className='my-8 prose prose-figure:my-10 prose-figcaption:text-center prose-img:mx-auto text-gray-800 max-w-none max-md:prose-sm'>
                        <MDXRemote {...mdxSource}/>
                    </article>
                </div>
            )}
        </>
    )
}