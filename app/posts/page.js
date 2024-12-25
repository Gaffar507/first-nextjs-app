import Link from 'next/link'
import getAllPosts from '@/lib/getallposts'
import React from 'react'

export const metadata = {
    title: "Posts",
    description: "This is the posts page",
  };

const page = async () => {
const posts = await getAllPosts();


  return (
    <div>
      <h1 className='text-3xl pb-5'>Have a glance of all the posts here...</h1>
      {posts.map((post) => (
        <ul key={post.id}>
        <li> <Link href={`/posts/${post.id}`} className='hover:text-gray-500'>{post.title}</Link> </li>
      </ul>
    ))}
    </div>
  )
}

export default page
