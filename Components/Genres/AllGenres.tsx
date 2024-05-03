'use client'
import { useGetGenreListQuery } from '@/redux/TmdbApi'
import { Skeleton } from '@mui/material'
import Link from 'next/link'
import { type } from 'os'
import React from 'react'

type Props = {
  type: string,
  Genre_title?: string,
  limit?: number,

}

type genre = {
  id: number,
  name: string,
  type: string,
}

function Genres({ type, Genre_title, limit }: Props) {
  const { data, isSuccess, isLoading } = useGetGenreListQuery(type)
  const loadingBoxes: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {isSuccess && limit != undefined ? <div className=' '>

        {Genre_title === '' ?
          <h1 className='text-5xl bg-gradient-to-r text-transparent bg- bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text transition ease-in py-2 '>{Genre_title}</h1> : null}
        <div className='w-full h-64 grid grid-cols-2 gap-1 justify-start  '>
          {data.genres.slice(0, limit).map(({ id, name }: genre) => {
            return (
              <Link href={`genres/${type}/${name}/${id}`} key={id}>
                <div className={'h-full rounded-lg w-full  p-1 flex justify-end shadow-lg border transition-all hover:border-purple-500  items-end hover:font-extrabold animate-text  hover:border-2 hover:p-1.5  '}>
                  <h1 className='font-extrabold  bg-gradient-to-tr  bg-clip-text text-transparent from-pink-400 to-purple-700  text-lg lg:text-2xl '>{name}</h1>
                </div>
              </Link>
            )
          })}
        </div>

      </div> : null}
      {isSuccess && limit == undefined ? <div className='w-10/12 mx-auto my-4 '>

        {Genre_title !== '' ? <h1 className='text-5xl bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text transition ease-in py-2 '>{Genre_title}</h1> : null}
        <div className='w-full grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 '>
          {data.genres.map(({ id, name }: genre) => {
            return (
              <Link href={`genres/${type}/${name}/${id}`} key={id}>
                <div key={id} className=' w-full
          flex justify-start flex-wrap items-center overflow-hidden  bg-gradient-to-r from-violet-500 to-violet-800 rounded-lg 
           border-inherit border-2 border-separate shadow
          hover:animate-text   cursor-pointer
            hover:border-violet-800 transition-all'>
                  <h1 className={'font-extrabold bg-clip-text bg-gradient-to-tr text-transparent from-slate-50  to-slate-200 text-lg lg:text-xl md:text-lg sm:text-lg pl-2 py-6  pr-6 '}>{name}</h1>
                </div>
              </Link>
            )
          })}
        </div>

      </div> : null}
    </>
  )
}

export default Genres