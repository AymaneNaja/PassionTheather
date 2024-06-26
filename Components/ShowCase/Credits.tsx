'use client'
import { PersonCard } from '../Cards/PerSonCard';
import { useGetCreditsQuery } from '@/redux/TmdbApi'
import Link from 'next/link'
import React from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
type Props = {
  id: string | number,
  type: string
}



const Credits = ({ id, type }: Props) => {
  const { data, isSuccess, isError, isLoading } = useGetCreditsQuery({ id, type })
  return (
    <div className='w-full py-4'>

      <h1 className={`
      py-1
       text-5xl
      bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text  transition ease-in mb-2 `}>
        Cast
      </h1>
      <div className={` w-full flex justify-start  items-start gap-2 overflow-scroll  py-4 scrolly`}>
        {isSuccess ? data.cast.map((person: any) => {
          return (
            <PersonCard key={person.id} person={person} />)
        }) : null}
      </div>
    </div>

  )
}



export default Credits