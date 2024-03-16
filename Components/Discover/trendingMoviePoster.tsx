'use client'
import { useGetTrendingMoviesQuery } from '@/api/redux/TmdbApi'
import React from 'react'
import BigCard from '../Cards/BigCard'
import PopularPeople from './PopularPeople'
import Genres from '../Genres/AllGenres'

type Props = {}

function TrendingMoviePoster({ }: Props) {
    const { data, isSuccess, isLoading } = useGetTrendingMoviesQuery('day')
    return (
        <>
            {isLoading ? <div className='w-full lg:w-10/12  mx-auto px-1  flex justify-center items-center gap-2 mt-4'>
                <div className='w-2/4 mx-auto '>
                    <div className='skeleton  w-full  h-52'></div>
                </div>
                <div className='w-2/4 h-52 mx-auto '>
                    <div className='grid grid-cols-2 justify-start items-center w-full h-full gap-1 '>
                        <div className='skeleton w-full h-full'></div>
                        <div className='skeleton w-full h-full'></div>
                        <div className='skeleton w-full h-full'></div>
                        <div className='skeleton w-full h-full'></div>
                    </div>
                </div>

            </div> : null}
            <div className={' relative px-2 lg:px-0 grid-cols-2 grid items-center justify-center gap-2 lg:w-10/12 mx-auto my-10'}>
                {isSuccess ? <><div className={' h-fit '}>
                    <BigCard
                        type={'movie'}
                        data={data.results} />
                </div>
                    <div className=' h-fit  '>
                        <h1 className='text-slate-400 font-semibold translate text-lg lg:text-xl'>Popular Genres</h1>
                        <div className={''}><Genres limit={4} type={'movie'} /></div>
                    </div></> : null}

            </div></>

    )
}

export default TrendingMoviePoster