'use client'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { changeNavigation } from '@/Slices/NavSlice'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getSession, useSession } from 'next-auth/react'
import { FaSignOutAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoHeart } from "react-icons/io5";
function classNameNames(...classNamees: any) {
    return classNamees.filter(Boolean).join(' ')
}



export default function Navbar() {
    const currentPath = usePathname()
    const { update, status, data } = useSession()
    return (

        <div className="drawer  ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar  ">
                    <div className="flex-none md:hidden xl:hidden  lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="160"
                        height="60.141482825843" viewBox="0 0 3203.3898305084745 1072.141482825843">

                        <g transform="scale(10.169491525423728) translate(10, 10)">
                            <defs id="SvgjsDefs3285"><linearGradient id="SvgjsLinearGradient3290"><stop id="SvgjsStop3291" stop-color="#7f00ff" offset="0"></stop><stop id="SvgjsStop3292" stop-color="#e100ff" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient3293"><stop id="SvgjsStop3294" stop-color="#7f00ff" offset="0"></stop><stop id="SvgjsStop3295" stop-color="#e100ff" offset="1"></stop></linearGradient></defs><g id="SvgjsG3286" transform="matrix(0.06714263186658811,0,0,0.06714263186658811,-0.031892743733409,-0.031892743733409)" fill="url(#SvgjsLinearGradient3290)"><g xmlns="http://www.w3.org/2000/svg">    <path d="M559,1102.5l10.6-10.6L36.7,559L559,36.7L1081.2,559l-532.8,532.8L559,1102.5l10.6-10.6L559,1102.5l10.6,10.6l543.4-543.4   c2.8-2.8,4.4-6.7,4.4-10.6c0-4-1.6-7.8-4.4-10.6L569.6,4.9c-5.9-5.9-15.4-5.9-21.2,0L4.9,548.4c-5.9,5.9-5.9,15.4,0,21.2   l543.5,543.5c2.8,2.8,6.7,4.4,10.6,4.4s7.8-1.6,10.6-4.4L559,1102.5z"></path>    <path d="M559,937.8l10.6,10.6l378.8-378.7c2.8-2.8,4.4-6.7,4.4-10.6c0-4-1.6-7.8-4.4-10.6L569.6,169.6c-2.8-2.8-6.7-4.4-10.6-4.4   c-4,0-7.8,1.6-10.6,4.4L169.7,548.4c-5.9,5.9-5.9,15.4,0,21.2l378.7,378.8c2.8,2.8,6.7,4.4,10.6,4.4c4,0,7.8-1.6,10.6-4.4   L559,937.8l10.6-10.6L201.5,559L559,201.5L916.6,559L548.4,927.2L559,937.8l10.6-10.6L559,937.8z M773.1,559l-10.6-10.6L559,751.9   L366.2,559L559,366.2l203.4,203.5L773.1,559l-10.6-10.6L773.1,559l10.6-10.6l-214-214.1c-2.8-2.8-6.7-4.4-10.6-4.4   c-4,0-7.8,1.6-10.6,4.4L334.4,548.4c-5.9,5.9-5.9,15.4,0,21.2l214,214c5.9,5.9,15.4,5.9,21.2,0l214.1-214c5.9-5.9,5.9-15.4,0-21.2   L773.1,559z"></path>    <path d="M509.7,559l10.6,10.6l38.8-38.8l28.2,28.2l-28.2,28.2l-38.8-38.8L509.7,559l10.6,10.6L509.7,559l-10.6,10.6l49.4,49.4   c2.8,2.8,6.7,4.4,10.6,4.4c4,0,7.8-1.6,10.6-4.4l49.4-49.4c2.8-2.8,4.4-6.7,4.4-10.6c0-4-1.6-7.8-4.4-10.6l-49.4-49.4   c-5.9-5.9-15.4-5.9-21.2,0l-49.4,49.4c-5.9,5.9-5.9,15.4,0,21.2L509.7,559z"></path>    <path d="M559,1102.4l10.6-10.6L103.8,626.1c-5.9-5.9-15.4-5.9-21.2,0L5,703.7c-2.8,2.8-4.4,6.7-4.4,10.6c0,4,1.6,7.8,4.4,10.6   l543.4,543.5c2.8,2.8,6.7,4.4,10.6,4.4c4,0,7.8-1.6,10.6-4.4l543.5-543.5c2.8-2.8,4.4-6.7,4.4-10.6c0-4-1.6-7.8-4.4-10.6   l-77.6-77.6c-5.9-5.9-15.4-5.9-21.2,0l-465.8,465.8L559,1102.4l10.6-10.6L559,1102.4l10.6,10.6l455.2-455.2l56.4,56.4L559,1236.5   L36.8,714.3l56.4-56.4l455.2,455.2c5.9,5.9,15.4,5.9,21.2,0L559,1102.4z"></path></g></g><g id="SvgjsG3287" transform="matrix(1.1423349206552564,0,0,1.1423349206552564,95,13.708473813458777)" fill="url(#SvgjsLinearGradient3293)"><path d="M3.8 34 l0 5.96 l-3.8 0 l0 -28.52 l5.92 0 c2.64 0 4.76 2.16 4.76 4.8 l0 13 c0 2.64 -2.12 4.76 -4.76 4.76 l-2.12 0 z M3.8 15.239999999999998 l0 14.96 l2.12 0 c0.56 0 0.96 -0.4 0.96 -0.96 l0 -13 c0 -0.56 -0.4 -1 -0.96 -1 l-2.12 0 z M21.84 40 l-1.44 -9.88 l-4.04 0 l-1.32 9.88 l-3.84 0 l4.32 -28.6 l5.16 0 l5 28.6 l-3.84 0 z M16.88 26.32 l2.96 0 l-1.52 -10.4 z M31.68 40.24 c-3.04 0 -5.48 -2.48 -5.48 -5.48 l0 -4.36 l3.88 0 l0 4.36 c0 0.88 0.72 1.6 1.6 1.6 s1.56 -0.72 1.56 -1.6 l0 -3.8 l-7.04 -9.72 l0 -4.96 c0 -3.04 2.44 -5.52 5.48 -5.52 c3 0 5.44 2.48 5.44 5.52 l0 4.32 l-3.88 0 l0 -4.32 c0 -0.92 -0.68 -1.6 -1.56 -1.6 s-1.6 0.68 -1.6 1.6 l0 3.64 l7.04 9.72 l0 5.12 c0 3 -2.44 5.48 -5.44 5.48 z M44.599999999999994 40.24 c-3.04 0 -5.48 -2.48 -5.48 -5.48 l0 -4.36 l3.88 0 l0 4.36 c0 0.88 0.72 1.6 1.6 1.6 s1.56 -0.72 1.56 -1.6 l0 -3.8 l-7.04 -9.72 l0 -4.96 c0 -3.04 2.44 -5.52 5.48 -5.52 c3 0 5.44 2.48 5.44 5.52 l0 4.32 l-3.88 0 l0 -4.32 c0 -0.92 -0.68 -1.6 -1.56 -1.6 s-1.6 0.68 -1.6 1.6 l0 3.64 l7.04 9.72 l0 5.12 c0 3 -2.44 5.48 -5.44 5.48 z M55.839999999999996 11.36 l0 28.48 l-3.8 0 l0 -28.48 l3.8 0 z M63.239999999999995 40.04 c-3 0 -5.4 -2.44 -5.4 -5.4 l0 -17.96 c0 -2.96 2.4 -5.36 5.4 -5.36 c2.96 0 5.36 2.4 5.36 5.36 l0 17.96 c0 2.96 -2.4 5.4 -5.36 5.4 z M63.239999999999995 15.120000000000001 c-0.88 0 -1.56 0.72 -1.56 1.56 l0 17.96 c0 0.88 0.68 1.56 1.56 1.56 c0.84 0 1.56 -0.68 1.56 -1.56 l0 -17.96 c0 -0.84 -0.72 -1.56 -1.56 -1.56 z M79.88 33.44 l0.16 -22.16 l3.84 0 l-0.24 28.88 l-5.96 0 l-3.24 -22.36 l0 22.36 l-3.84 0 l0 -28.88 l6.2 0 z M99.72 11.36 l0 3.84 l-4.76 0 l0 24.84 l-3.84 0 l0 -24.84 l-5.24 0 l0 -3.84 l13.84 0 z M108.24 11.440000000000001 l3.8 0 l0 28.52 l-3.8 0 l0 -15.08 l-3.4 0 l0 15.08 l-3.8 0 l0 -28.52 l3.8 0 l0 9.68 l3.4 0 l0 -9.68 z M123.35999999999999 24.92 l-5.52 0 l0 11.28 l5.56 0 l0 3.8 l-9.36 0 l0 -28.56 l9.36 0 l0 3.8 l-5.56 0 l0 5.88 l5.52 0 l0 3.8 z M135.12 40 l-1.44 -9.88 l-4.04 0 l-1.32 9.88 l-3.84 0 l4.32 -28.6 l5.16 0 l5 28.6 l-3.84 0 z M130.16 26.32 l2.96 0 l-1.52 -10.4 z M150.76 11.36 l0 3.84 l-4.76 0 l0 24.84 l-3.84 0 l0 -24.84 l-5.24 0 l0 -3.84 l13.84 0 z M162.07999999999998 24.92 l-5.52 0 l0 11.28 l5.56 0 l0 3.8 l-9.36 0 l0 -28.56 l9.36 0 l0 3.8 l-5.56 0 l0 5.88 l5.52 0 l0 3.8 z M175.08 40.08 l-4.08 0 l-2.2 -6.04 l-0.88 0 l0 6.04 l-3.8 0 l0 -28.64 l5.96 0 c2.64 0 4.76 2.12 4.76 4.76 l0 13.08 c0 1.72 -0.88 3.2 -2.24 4.04 z M167.92000000000002 15.239999999999998 l0 15 l2.16 0 c0.52 0 0.96 -0.44 0.96 -0.96 l0 -13.08 c0 -0.52 -0.44 -0.96 -0.96 -0.96 l-2.16 0 z"></path></g>
                        </g>
                    </svg></div>
                    <div className="flex-none hidden  md:block lg:block xl:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li className={`${currentPath == '/' ? "text-purple-500 font-extrabold" : "font-bold text-slate-500"}`}><Link href="/"  >Dashboard</Link></li>
                            <li className={`${currentPath == '/Discover' ? "text-purple-500 font-extrabold" : "font-bold text-slate-500"}`}><Link href="/Discover" >Discover</Link></li>
                            <li className={`${currentPath == '/Find' ? "text-purple-500 font-extrabold" : "font-bold text-slate-500"}`}><Link href="/Find"  >Find</Link></li>
                            <li className={`${currentPath == '/Genres' ? "text-purple-500 font-extrabold" : "font-bold text-slate-500"}`}><Link href="/genres" >Genres</Link></li>
                        </ul>
                    </div>
                    {status == "loading" ? <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="skeleton w-10 h-10 rounded-full">
                        </div>
                    </div> : null}
                    {status === 'authenticated' && data.user ? <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={data.user.image ? data.user.image : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 transition-all">
                            <div className='flex flex-col justify-center items-center pb-2'>
                                <p className='text-center font-bold text-lg text-violet-600 '>{data?.user?.name}</p>
                                <p className='text-slate-500 font-semibold overflow bg-slt'>{data?.user?.email}</p>
                            </div>
                            <li className={'font-bold text-slate-500 flex  bg-inherit pb-1 '}>
                                <Link href={'/Favorites'}><IoHeart size={18} />Favorites</Link></li>
                            <li className={'font-bold text-rose-500 hover:bg-rose-500 rounded-lg hover:text-white flex pb-1 '}>
                                <Link href={'/signout'}><FaSignOutAlt size={18} />Sign out</Link></li>
                        </ul>
                    </div> : null}
                    {status == 'unauthenticated' ? <Link href={'/auth/signin'}><button className='p-2 px-3 hover:ring-2 ring-0 transition-all ring-purple-600  text-white  from-purple-500 to-purple-800 bg-gradient-to-r hover:bg-clip-text hover:text-transparent  rounded-lg  font-bold' >sign in</button></Link> : null}
                </div>

                {/* Page content here */}
            </div>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu active:text-white  p-5 w-80 min-h-full bg-base-200">
                    {status === 'authenticated' && data.user ? <div className="flex flex-col justify-center items-center gap-2 w-full mb-4">
                        <div className=" avatar w-full mx-auto grid justify-center">
                            <div className=" w-[72px] m-auto  rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={data.user.image ? data.user.image : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center pb-2 '>
                            <p className='text-center font-bold text-xl text-violet-600'>{data?.user?.name}</p>
                            <p className='text-slate-500 font-semibold overflow'>{data?.user?.email}</p>
                        </div>
                    </div> : null}
                    <li className={` rounded-lg my-1 ${currentPath == '/' ? "bg-purple-600 text-white font-extrabold" : "font-bold text-slate-500"}`}><Link href="/"  >Dashboard</Link></li>
                    <li className={` rounded-lg my-1 ${currentPath == '/Discover' ? "bg-purple-600 text-white font-extrabold" : "font-bold text-slate-500"}`}><Link href="/Discover" >Discover</Link></li>
                    <li className={` rounded-lg my-1 ${currentPath == '/Find' ? "bg-purple-600 text-white font-extrabold" : "font-bold text-slate-500"}`}><Link href="/Find"  >Find</Link></li>
                    <li className={` rounded-lg my-1 ${currentPath == '/genres' ? "bg-purple-600 text-white  font-extrabold" : "font-bold text-slate-500"}`}><Link href="/genres" >Genres</Link></li>
                    {status === 'authenticated' && data.user ? <li className={"font-bold bg-rose-100 rounded-lg text-rose-700 hover:bg-rose-500 hover:text-white transition-all"}><Link href="/signout" >Sign out</Link></li> : null}

                </ul>
            </div>


        </div>


    )
}
