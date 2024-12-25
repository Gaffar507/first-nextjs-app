import lam from '@/public/images/lam.png'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <h1>New Projects</h1>
        <div className='w-[300px]'>
          <Image quality={100} placeholder='blur' src={lam} alt="Lambo"  />
        </div>
    </div>
  )
}

export default page
