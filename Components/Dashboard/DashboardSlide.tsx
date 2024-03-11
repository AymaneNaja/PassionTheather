'use client'
import React from "react";
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { nanoid } from '@reduxjs/toolkit';
import { Rating } from '@mui/material';
import Link from 'next/link';
export function DashboardSlide({
    data,

}: { data: any }) {
    return <Splide hasTrack={true} options={{
        rewind: true,
        arrows: false,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true
    }}>
        {data.results.map((result: any) => {
            return <SplideSlide key={nanoid()}>
                <Link key={nanoid()} href={`/${result.media_type}/${result.id}   `}>
                    <div className={'relative w-full lg:w-10/12 mx-auto flex flex-col gap-2'}>
                        {
                            /* details */
                        }
                        <div className='z-20  pl-2 xl:p-3 lg:p-2  absolute bottom-0 -translate-y-8 w-full  py-3  '>
                            <div className=''>
                                <h1 className={`
                            font-extrabold text-3xl
                            md:text-4xl lg:text-5xl
                            text-white 
                             `}>
                                    {result.title ? result.title : result.name}
                                </h1>
                                <Rating size={'medium'} readOnly defaultValue={2.5} value={result.vote_average / 2} />

                            </div>

                            <div className='text-lg
                            sm:text-lg 
                            md:text-xl
                            lg:text-xl 
                            w-10/12
                            line-clamp-3
                            font-semibold
                            lg:line-clamp-4  text-slate-100 overflow-ellipsis   '>
                                <p title='description' className=' '>{result.overview}</p>
                            </div>
                        </div>
                        {
                            /* bg */
                        }
                        <div className=' bg-cover bg-center  w-full h-[30rem] lg:h-[34rem] xl:h-[50rem] mx-auto 
                            hover:brightness-50
                        brightness-75
                        transition-all
                        pb-10  lg:rounded-lg grid  items-end bg-slate-200 bg-blend-darken  backdrop-brightness-50 ' style={{
                                backgroundImage: `url(${'https://image.tmdb.org/t/p/original/' + result.backdrop_path})`
                            }}></div>
                    </div>

                </Link>
            </SplideSlide>;
        })}
    </Splide>;
}
