/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from "react";
import ExplicitIcon from '@mui/icons-material/Explicit';
import { FaStar } from 'react-icons/fa';
import { TbMovie } from 'react-icons/tb';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import Image from "next/image";
import Link from "next/link";




interface props {
    pagnation?: boolean,
    id: number | string,
    vote_average: number | string,
    title: string,
    poster_path: string,
    overview: string,
    original_language: string,
    media_type: string,
    adult: boolean,
    type?: string

}
export function SingleCard({
    pagnation,
    type,
    adult,
    vote_average,
    id,
    title,
    poster_path,
    overview,
    original_language,
    media_type,
    showMore


}: any) {
    const [cardHover, setCardHover] = useState<boolean>(false)
    return <Link href={`/${type}/${id}`}><div key={id} className={`
    w-full mx-auto  shadow-lg rounded-b-xl cursor-pointer row-span-1 
    transition-all
    border-none
    relative 
    hover:border-purple-500
    hover:border-4
    hover:-translate-y-0.5 
    ${!showMore && !pagnation ? 'mb-28' : ''}
    ${pagnation ? 'mb-1' : ''}
    
    
                
    `} onMouseEnter={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)}>
        <div className={`absolute animate-pulse w-full h-full z-0 rounded-t-2xl rounded-b-lg border-4 border-purple-800 p-8 bg-transparent ${cardHover ? 'block' : 'hidden'} `}></div>
        <div className={`w-full h-full transition-all relative ${cardHover ? 'border-4 border-transparent' : ''} rounded-xl`}>
            <img width={500} height={500} title={title} src={'https://image.tmdb.org/t/p/original/' + poster_path}
                alt={''}
                onError={(e) => e.currentTarget.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkLCa2YDnUbjBA771bzprTEl3RgBmiDVrQA&usqp=CAU'}
                className={`w-full  rounded-t-xl alt`}
            />
            {adult ? <p className='absolute bottom-2 right-2 text-white '><ExplicitIcon /></p> : null}
        </div>
        <div className={` w-full items-start justify-between flex  rounded-b-lg flex-col gap-1 ${cardHover ? 'px-2' : 'px-1.5'}  h-32 z-20 relative pb-1`}>
            <p title="title" className='
                             
                                text-md sm:text-lg 
                                md:text-lg
                                lg:text-lg
                                 line-clamp-2
                                bg-gradient-to-r text-transparent bg-clip-text from-purple-500 to-purple-800 font-extrabold
                                sm:pt-0.5
                                '>{title}</p>
            <div className='text-sm text-slate-600 '>
                <p title='description' className=' line-clamp-2'>{overview}</p>
            </div>
            <div className={`flex justify-between items-center w-full`}>
                <span className='flex justify-start gap-1 items-start py-0.5'>
                    <p title='description' className='bg-gradient-to-r w-fit px-1
                    h-fit rounded
                    text-sm lg:text-md
                    from-violet-500 to-violet-700 text-white font-bold'>
                        {original_language}
                    </p>
                    <p
                        title={media_type}
                        className='from-violet-500 to-violet-600 text-white
                                    bg-gradient-to-r px-1 rounded  text-xs'>
                        {media_type == 'movie' ? <TbMovie size={18} /> : <PiTelevisionSimpleBold size={18} />}
                    </p>
                </span>
                <p title="vote" className='text-slate-500 font-bold flex gap-1 items-center'>
                    <FaStar color={'#7b35fc'} />
                    {String(vote_average / 2).substring(0, 3)}
                </p>
            </div>
        </div>


    </div></Link>
}
