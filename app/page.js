import ClickMe from "@/app/Components/ClickMe";
import Image from "next/image";
import bg from '@/public/images/bg.png'

export const metadata = {
  title: "First Next App",
  description: "A Next.js app with Tailwind CSS",
};

export default function Home() {
  return (
   <div>
      <h1 className="bg-sky-500/[.06] pl-2 text-2xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        My Billionaire project Next.JS app
        <div className="w-[700px]">
          <Image placeholder="blur" src={bg} alt="Next.js logo" quality={100}/>
        </div>

      <ClickMe/>
      </h1>
   </div>
  );
}