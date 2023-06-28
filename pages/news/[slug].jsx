import 'dotenv/config';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { FiCalendar, FiUser } from 'react-icons/fi';
import SocialMedia from '@/components/SocialMedia';
import Head from 'next/head';

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

export default function PostTinTuc({ frontMatter: { title, description, author, date, slug }, mdxSource }){
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
            </Head>
            <div className='mx-auto max-w-4xl py-16 px-5 lg:py-24'>
                <div className='text-gray-800 border-b border-solid border-gray-200'>
                    <p className='font-bold leading-snug text-3xl lg:text-4xl lg:leading-snug'>{title}</p>
                    <div className='flex justify-between text-xs text-gray-400 my-7 md:text-sm'>
                        <div className='flex items-center'>
                            <FiUser className='mr-2'/>
                            <p className='mr-5'>{author}</p>
                            <FiCalendar className='mr-2'/>
                            <p>{date}</p>
                        </div>
                        <SocialMedia url={`${process.env.NEXT_PUBLIC_URL}/news/${slug}`} title={title}/>
                    </div>
                </div>
                <article className='my-8 prose prose-sm prose-figure:my-10 prose-figcaption:text-center prose-img:mx-auto text-gray-800 max-w-none md:prose-base'>
                    <MDXRemote {...mdxSource}/>
                </article>
            </div>
        </>
    )
}