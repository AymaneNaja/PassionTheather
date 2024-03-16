'use client'
import { useGetSearchCollectionQuery, useGetSearchMovieQuery } from '@/api/redux/TmdbApi'
import { nanoid } from '@reduxjs/toolkit'
import Link from 'next/link'
import React from 'react'

type Props = {
    query: string,
    pageCount: number

}

function CollectionResults({ query, pageCount }: Props) {
    const { data, isSuccess, isLoading } = useGetSearchCollectionQuery({ query: query, page: pageCount })
    return (
        <div className='w-full px-2'>
            <h1 className='text-5xl bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text transition ease-in my-2  cursor-pointer '>Collection</h1>

            <div className=' flex flex-nowrap  overflow-scroll gap-1  w-full no-scrollbar'>{isSuccess ? data.results.map((col: any) => <Link key={nanoid()} href={`/Collection/movie/${col.id}`}><div className="my-6  ">
                <div className=' no-scrollbar relative shadow-lg sm:text-lg 
                  w-56 h-52  '>

                    <div className='
                    
                         absolute 
                          animate-pulse
                          transition-all
                         hover:-translate-x-2
                         hover:translate-y-2 z-0 bg-gradient-to-tr from-purple-500 to-purple-800 pulse w-full h-full rounded-xl' />
                    <div className=' transition-all
                    hover:translate-x-2 hover:-translate-y-2 z-20
                     w-full'>

                        {col.backdrop_path !== null ? <img className='   rounded-xl  brightness-75' title='collection' src={'https://image.tmdb.org/t/p/original/' + col.backdrop_path} /> : null}
                        <p className='absolute bottom-2 left-2  font-bold text-lg line-clamp-2 
                        drop-shadow-sm   
                        overflow-hidden text-ellipsis text-white '> {col.name}</p>
                    </div>
                </div>
            </div>
            </Link>) : null}</div>

        </div>
    )
}

export default CollectionResults