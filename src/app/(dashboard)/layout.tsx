
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <div className="h-screen flex">
    {/* LEFT */}
    <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-no-repeat bg-center' style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.05) 10%, transparent 10%)', backgroundSize: '50px 50px' }}>
  <Link href="/" className="flex items-center justify-center gap-2">
  <Image src="/logo.png" alt="logo" width={32} height={32} />
  <span className="hidden lg:block">IQR'A</span>
</Link>
<Menu/>
</div> 
    {/* RIGHT */}
    <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll'>
     <Navbar/>
     {children}
    </div>
  </div>;
}
