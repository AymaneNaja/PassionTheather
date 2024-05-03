'use client'
import { useGetMovieByParamsQuery, useGetMovieQuery } from '@/redux/TmdbApi'
import React, { useState } from 'react'
import LoadingListCard from '../Cards/LoadingListCard'
import { SingleCard } from '../Cards/SingleCard'
import { useGetUserFavsQuery } from '@/redux/UserApi'
import SingleFav from './FavMovie'
import FavShow from './FavShow'

type Props = {
    id: string,
}

function FavShows({ id }: Props) {
    const { data, isLoading, isSuccess } = useGetUserFavsQuery({ id: id })
    const [showMore, setShowMore] = useState<boolean>(false)
    const pagnation = false
    return (
        <>{isSuccess && data.filter((el: any) => el.type == 'tv').length >= 1 ? <div className={`grid   animate-Card  overflow-hidden transition-all max-w-[1860px]   w-full lg:w-10/12 m-auto      `}>
            <div className='w-full flex justify-between items-baseline  mx-auto px-2 pb-2 '>
                <h1 className='md:text-5xl text-4xl  bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text  transition ease-in mb-2 py-2  '>Favorite Shows</h1>
                {pagnation === false && data.length >= 4 ? <button title={'show more'}
                    onClick={() => setShowMore(prev => !prev)}
                    className='font-bold text-slate-400 text-2xl hover:text-slate-600 transition-all '>{showMore ? 'show less' : 'show more'}</button> : <div />}
            </div>
            <div className={` mx-auto px-3  w-full   relative grid gap-3   max-[500px]:grid-cols-2 grid-cols-3 py-1 2xl:grid-cols-6 xl:grid-cols-6  lg:grid-cols-5 sm:grid-cols-4 md:grid-cols-5 sm:px-2 
        ${!showMore && !pagnation ? 'lg:h-[30rem] min-[1400px]:h-[34rem] max-[400px]:h-[28rem] h-[32rem] sm:h-[28rem] overflow-hidden' : ' h-fit'} ${pagnation ? 'h-fit' : ''}  `}>
                {isSuccess ? data.map((el: any) => {
                    if (el.type === 'tv') {
                        return <FavShow type={el.type} id={el.id} showMore={showMore} key={el.id} />
                    }
                }) : null}
            </div>
        </div> : null}
            {isLoading ? <LoadingListCard /> : null}

        </>
    )
}

export default FavShows