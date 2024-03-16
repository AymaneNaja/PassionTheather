'use Client'
import React from 'react'
import Credits from '../ShowCase/Credits'
import { useGetPersonDetailsQuery, useGetSearchPersonQuery } from '@/api/redux/TmdbApi'
import Link from 'next/link'
import { AiTwotoneHeart } from 'react-icons/ai'
import { LoadingCastCards } from '../ShowCase/LoadingCastCards'


type Props = {
    query: any,
    pageCount: number
}

function PersonResults({ query, pageCount }:
    Props) {
    const { data, isSuccess, isLoading } = useGetSearchPersonQuery({ query: query, page: pageCount })
    console.log(data)
    return (
        <>{isSuccess && data.results.length ? <div className='w-full my-4'>
            <h1 className='text-5xl bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold animate-text transition ease-in my-2  cursor-pointer '>People </h1>
            <div className={` w-full flex justify-start  items-start gap-10 overflow-scroll no-scrollbar grid-cols-4  `}>
                {isSuccess ? data.results.map((person: any) => {
                    return (
                        <Link href={`/Person/${person.id}`} key={person.id} >
                            <div className={'w-full grid justify-center items-center gap-2 text-center row-span-1 hover:-translate-y-2 hover:border-b-4 border-purple-400  cursor-pointer transition-all pt-2'}>
                                {/* avatar */}
                                <div style={{
                                    backgroundImage: `${person.profile_path != null ? `url(${`https://image.tmdb.org/t/p/original/` + person.profile_path})` : 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png'}`
                                }} className={' w-44 h-44 bg-black rounded-full bg-cover bg-center'} />
                                {/* info */}
                                <div className={'w-full  '}>
                                    <p className='text-slate-700 font-semibold text-lg'>{person.name}</p>
                                    {person.character ? <p className=' text-base text-slate-500'>as {person.character}</p> : null}
                                    {person.popularity ?
                                        <span className={'flex gap-2 justify-center items-center text-rose-500'}>
                                            <AiTwotoneHeart />
                                            <p className='text-md font-semibold '>{person.popularity}</p>
                                        </span> : null}

                                </div>
                            </div>
                        </Link>)
                }) : null}
            </div>
        </div> : null}
            {isLoading ? <LoadingCastCards /> : false}
        </>
    )
}

export default PersonResults