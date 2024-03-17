'use client'
import { useGetVideosQuery } from '@/api/redux/TmdbApi'
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
        <h1 className={`  py-1
      text-5xl
      bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text  transition ease-in mb-2`}>
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