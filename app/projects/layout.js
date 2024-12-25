import React from 'react'
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div>
        <h1 className='bg-slate-100 pl-2'>My all completed Projects</h1>
      <nav className="flex gap-9 pb-4 pl-2 pt-5">
        <li className="bg-inherit text-center  text-indigo-500 hover:text-red-400"> <Link href='/projects/preprojects'>Previous Projects</Link> </li>
        <li className="bg-inherit text-center  text-indigo-500 hover:text-red-400"> <Link href='/projects/newprojects'>New Projects</Link> </li>
      </nav>
      {children}
    </div>
  )
}

export default layout
