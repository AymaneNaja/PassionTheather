'use client'
import { useGetTrendingtvShowsQuery } from '@/api/TmdbApi'
import React from 'react'
import BigCard from '../Cards/BigCard'
import Genres from '../Genres/AllGenres'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function TrendingTvShowPoster({ }: Props) {
    const { data, isSuccess, isLoading } = useGetTrendingtvShowsQuery('week')
    return (
        <>
            <div className={' relative px-2 lg:px-0 grid-cols-2 grid items-center justify-center gap-2 lg:w-10/12 mx-auto my-10'}>
                <div className=' h-fit  '>
                    <h1 className='text-slate-400 font-semibold translate text-lg lg:text-xl'>Popular Genres</h1>
                    <div className={''}><Genres limit={4} type={'tv'} /></div>
                </div>
                {isSuccess ? <div className={' h-fit '}>
                    <BigCard
                        type={'tv'}
                        data={data.results} />
                </div> : null}


            </div>
            {isLoading ? <LoadingListCard /> : null}

        </>

    )
}

export default TrendingTvShowPoster