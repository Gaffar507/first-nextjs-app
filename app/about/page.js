import React from 'react'

export const metadata = {
  title: "About page",
  description: "This is the about page",
};

const page = () => {
  // throw new Error('This is an error!')
  
  return (
    <div>
      <h1 className='text-cyan-800 stroke-red-500'>My about page</h1>
      <p className='pt-6 opacity-[0.5]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex tenetur, vel minus facere molestiae libero, nam velit, non nisi sint expedita magni. Iusto rerum sed labore, adipisci minus eligendi accusamus excepturi vitae, recusandae animi natus saepe officia impedit incidunt sapiente quis reiciendis molestias libero? Eligendi officia voluptatum ea ad adipisci.</p>
    </div>
  )
}

export default page
