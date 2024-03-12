import { nanoid } from '@reduxjs/toolkit'
import Link from 'next/link'
import React from 'react'
import { Rating } from '@mui/material';


type Props = {
    data: any,
    type: string
}

function BigCard({ data, type }: Props) {
    return (
        <Link key={nanoid()} href={`/${type}/${data[0].id}   `}>
            <h1 className='text-slate-400 pl-0.5 text-lg lg:text-xl font-semibold'>Trending this week</h1>
            <div className={'relative w-full  mx-auto h-full'}>
                {
                    /* details */
                }
                <div className='z-20  pl-2 absolute bottom-0 -translate-y-8 w-full   '>
                    <div className=''>
                        <h1 className={`
                            font-extrabold text-xl
                            md:text-xl lg:text-2xl
                            text-white 
                             `}>
                            {data[0].title ? data[0].title : data[0].name}
                        </h1>
                        <Rating size={'small'} readOnly defaultValue={2.5} value={data[0].vote_average / 2} />

                    </div>

                    <div className='text-base
                            
                            w-10/12
                            line-clamp-3
                            font-semibold
                            lg:line-clamp-4  text-slate-100 overflow-ellipsis   '>
                        <p title='description' className=' '>{data[0].overview}</p>
                    </div>
                </div>
                {
                    /* bg */
                }
                <div className=' bg-cover bg-center  w-full h-64 mx-auto 
                 hover:brightness-50
                brightness-75
                transition-all
                pb-10 rounded-xl grid  items-end bg-slate-200'
                    style={{
                        backgroundImage: `url(${'https://image.tmdb.org/t/p/original/' + data[0].backdrop_path})`
                    }}></div>
            </div>

        </Link>)
}

export default BigCard