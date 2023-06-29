import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchBar from "@/components/SearchBar";
import Head from "next/head";
import PostContainerClassic from '@/components/PostContainerClassic';

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        return {
            frontMatter,
            slug: filename.split('.')[0]
        }
    })
    return {
        props: {
            posts
        }
    }
}

export default function Search({ posts }){
    const router = useRouter();
    const [queryParam, setQueryParam] = useState('');

    const filterData = posts.filter(post => {
        if (queryParam === '') {
            return post;
        } else {
            return post.frontMatter.title.toLowerCase().includes(queryParam);
        }
    });

    const search = () => {
        const query = { q: queryParam };
        
        const url = queryString.stringifyUrl({
            url: '/search',
            query
        });

        router.push(url);
    }

    return (
        <>
            <Head>
                <title>Tìm kiếm | Chính phủ Quốc gia Bảo Đại</title>
            </Head>
            <div className='py-20 px-6'>
                <div className='mx-auto max-w-4xl'>
                    <SearchBar key={Math.random()} value={queryParam} onChange={e => setQueryParam(e.target.value)} onKeyDown={e => e.key === 'Enter' && search()} onSearch={search}/>
                    <div className='my-12 flex flex-wrap justify-center'>
                        {filterData.map(post => (
                            <PostContainerClassic
                                thumbnail={post.frontMatter.thumbnail}
                                title={post.frontMatter.title}
                                description={post.frontMatter.description}
                                date={post.frontMatter.date}
                                slug={post.slug}
                                disabled={post.frontMatter.disabled}
                                key={Math.random()}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}