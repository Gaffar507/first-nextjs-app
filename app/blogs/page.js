import { blogs } from '@/lib/data.js';
import Link from 'next/link';

export const metadata = {
  title: "Blogs page",
  description: "This is the blogs page",
};

const page = () => {
  
  return (
    <div>
      <h1 className='text-cyan-800 stroke-red-500'>My Blogs page</h1>
      <div className='grid grid-cols-1 gap-4 pt-5'>
        {blogs.map(b => (
          <div key={b.id} className='bg-gray-100 p-1 w-fit transition-all-[.3s] hover:text-blue-700'>
            <h2 className='text-xl'><Link href={`/blogs/${b.id}`}>{b.title}</Link> </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
