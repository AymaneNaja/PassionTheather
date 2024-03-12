'use client'
import { useGetMovieVideosQuery, useGetVideosQuery } from '@/api/TmdbApi'
import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import ReactPlayer from 'react-player'

type Props = {
    id: number | string,
    type: string

}

function ShowVideo({ id, type }: Props) {
    const { data, isSuccess } = useGetVideosQuery({ type, id })

    return (<>
        <h1 className={` text-5xl
        sm:text-5xl
        md:text-4xl
        lg:text-5xl
        bg-gradient-to-r text-transparent bg-clip-text from-violet-600 to-purple-900 font-extrabold py-2`}>
            Trailers
        </h1>
        <div className='flex overflow-scroll no-scrollbar justify-start items-start gap-2 mb-8'>
            {isSuccess ? data.results.map((video: any) => <div className='' key={nanoid()}>
                <ReactPlayer height={200} width={320} url={`https://www.youtube.com/watch?v=${video.key}`} />
            </div>
            )
                : null}

        </div>
    </>
    )
}

export default ShowVideo