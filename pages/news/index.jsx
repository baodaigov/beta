import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head';
import PostContainer from "@/components/PostContainer";

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

export default function TinTuc({ posts }){
    return (
        <>
            <Head>
                <title>Tin tức sự kiện | Chính phủ Quốc gia Bảo Đại</title>
            </Head>
            {posts.map(post => (
                <PostContainer
                    thumbnail={post.frontMatter.thumbnail}
                    title={post.frontMatter.title}
                    description={post.frontMatter.description}
                    date={post.frontMatter.date}
                    slug={post.slug}
                    disabled={post.frontMatter.disabled}
                    key={Math.random()}
                />
            ))}
        </>
    )
}