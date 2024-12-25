import { blogs } from '@/lib/data.js';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const page = ({params}) => {
let {id} = params
  id = Number(id);

    const error = blogs.find((blog) => blog.id === id)
    if (error === undefined) {
      return notFound();
    } 

    const newBlog = blogs.filter((blog)=> blog.id === id)

  return (
    <div>
        {newBlog.map(b=> 
        <div key={b.id} className='text-black'>
            <h1 className='font-bold text-2xl mb-2'>{b.title}</h1>
            <div className='w-[350px]'>
              <Image src={b.img} alt={b.title} placeholder='blur' quality={100} className='rounded-lg'/>
            </div>
            <p className='mt-4 bg-slate-100 p-4'>{b.des}</p>
        </div>)}
    </div>
  )
}

export default page

export function generateStaticParams() {
  return blogs.map(blog => ({
      id: String(blog.id)
  }))
}
