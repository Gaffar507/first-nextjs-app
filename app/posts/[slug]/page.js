import Comments from '@/app/Components/Comments';
import getAllPosts from '@/lib/getallposts';
import getcomments from '@/lib/getcomments';
import getpost from '@/lib/getpost';
import { Suspense } from 'react';

export async function generateMetadata ({params}) {
  let { slug } = await params;
  const post = await getpost(slug);

  return {
    title: post.title,
    description: post.body  
  }
}

const page = async ({params}) => {
    let {slug} = await params;
    const post = await getpost(slug);
    const comments = getcomments(slug);

    // const [ newPost, newComments ]  = await Promise.all([post, comments]);
 
  return (
    <div>
      <div className='p-5'>
        <h2> ID - {post.id}</h2>
        <h1 className='text-3xl uppercase pb-5 pt-2'>{post.title}</h1>
        <p className='opacity-[.5]'>{post.body}</p>
      </div>

      <Suspense fallback={<h1>Comments are loading...</h1>}>
        <Comments comments={comments}/>
      </Suspense>

    </div>
  )
}

export default page


export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: (post.id).toString()
  }))
}