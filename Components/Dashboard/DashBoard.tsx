'use client'
import { useGetAllTrendingQuery } from '@/redux/TmdbApi';
import { DashboardSlide } from './DashboardSlide'
import React, { useState } from 'react';
import DashGenres from './DashGenres';

type Props = {}


const DashBoard = (props: Props) => {
    const [mediaType, setMediaType] = useState<any>('movie')

    const { data, isSuccess, isError, isLoading } = useGetAllTrendingQuery('day')
    return (
        <div className='relative mb-10  '>
            {isSuccess ? <DashboardSlide data={data} /> : null}
            {isLoading ? <div className="skeleton rounded-none w-full lg:w-10/12  h-[30rem] lg:h-[34rem] mx-auto "></div> : null}
            {isSuccess ? <div className='flex justify-center items-center gap-3 py-8 '>
                <button onClick={() => setMediaType('movie')} className={`font-extrabold text-xl bg-gradient-to-tr lg:text-2xl transition-all hover:border-2 border-purple-500   text-transparent py-1 px-2  from-purple-500 to-purple-800
                     rounded-xl ${mediaType == 'movie' ? 'text-white hover:text-purple-800 hover:from-purple-100 hover:to-purple-300 bg-gradient-to-tr ' : 'text-transparent bg-clip-text '} `} >
                    Movies
                </button>
                <button onClick={() => setMediaType('tv')} className={`font-extrabold text-xl bg-gradient-to-tr lg:text-2xl transition-all hover:border-2 border-purple-500    text-transparent py-1 px-2  from-purple-500 to-purple-800
                 rounded-xl ${mediaType == 'tv' ? 'text-white hover:text-purple-800 hover:from-purple-100 hover:to-purple-300 bg-gradient-to-tr ' : 'bg-gradient-to-tr text-transparent bg-clip-text '} `} >
                    TV Shows
                </button>
            </div> : null}

            {mediaType === 'tv' ? <DashGenres media_type={'tv'} /> : <DashGenres media_type={'movie'} />}

        </div>
    )
}

export default DashBoard