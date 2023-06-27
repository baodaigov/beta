import PostContainer from "@/components/PostContainer";
import Head from "next/head";

const blog = [
  {
    title: 'Lorem ipsum dolor sit amet...!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    slug: 'hello',
    date: '15 tháng Tư, 1989',
    thumbnail: 'https://www.state.gov/wp-content/uploads/2023/06/shutterstock_2108653466-scaled-e1687559450150.jpg'
  },
  {
    title: 'Lorem ipsum dolor sit amet...!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    slug: 'hello',
    date: '15 tháng Tư, 1989',
    thumbnail: 'https://www.state.gov/wp-content/uploads/2023/06/shutterstock_2108653466-scaled-e1687559450150.jpg'
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Chính phủ Quốc gia Bảo Đại</title>
      </Head>
      <div className='flex overflow-x-visible'>
        {blog.map(i => (
          <PostContainer thumbnail={i.thumbnail} title={i.title} description={i.description} date={i.date} disabled key={Math.random()}/>
        ))}
      </div>
    </>
  )
}
