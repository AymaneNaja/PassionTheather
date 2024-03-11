'use client'
import { useGetPersonDetailsQuery } from '@/api/TmdbApi'
import MovieCredits from '@/Components/Person/MovieCredits'
import TvCredits from '@/Components/Person/TvCredits'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
type Props = {

}


function page({

}: Props) {
    const [showMorebio, setShowMorebio] = useState<boolean>(false)
    const { personId } = useParams()
    const { data, isSuccess, isLoading, isError } = useGetPersonDetailsQuery(personId)

    return (
        <>{isSuccess ?
            <div>
                <div className='lg:w-9/12 mx-auto grid gap-2 transition-all '>
                    <div className={' w-full h-52 grid justify-center items-end bg-gradient-to-tr from-fuchsia-500 to-violet-700 '}>
                        <div className='rounded-full w-52 translate-y-16 h-52 bg-cover bg-center ' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.profile_path})` }} />
                        <div className='translate-y-20  text-center'>
                            <p className='text-3xl font-extrabold text-slate-950'>{data.name}</p>
                            <p className='text-xl font-bold text-slate-500 flex gap-1 justify-center items-center'>
                                <AiTwotoneHeart className={' text-rose-600 '} />
                                {data.popularity}
                            </p>
                        </div>

                    </div>
                    <div className=' mt-36 w-full px-4  text-xl'>
                        <span className='flex items-center justify-start gap-1'>
                            {/*  */}
                            <p className='text-slate-500 font-semibold'>Date of birth:</p>
                            <p className='text-slate-700 font font-bold'>{data.birthday}</p>
                        </span>
                        {/*  */}
                        <span className='flex items-center justify-start gap-1'>
                            <p className='text-slate-500 font-semibold '>Place of birth:</p>
                            <p className='text-slate-700 font font-bold'>{data.place_of_birth}</p>
                        </span>
                        <span className='flex items-center justify-start gap-1'>
                            <p className='text-slate-500 font-semibold '>Gender:</p>
                            <p className='text-slate-700 font font-bold'>{data.gender == 1 ? 'female' : data.gender == 2 ? 'male' : 'none bionary'}</p>
                        </span>
                        <span className='flex items-center justify-start gap-1'>
                            <p className='text-slate-500 font-semibold '>Department:</p>
                            <p className='text-slate-700 font font-bold'>{data.known_for_department}</p>
                        </span>
                        {/*  */}
                        {data.deathday !== null ? <span className='flex items-center justify-start gap-1'>
                            <p className='text-slate-500 font-semibold'>Death day:</p>
                            <p className='text-slate-700 font font-bold'>{data.deathday}</p>
                        </span> : null}
                        {data.homepage !== null ? <span className='flex items-center justify-start'>
                            <p className='text-slate-500 font-semibold'>Home Page:</p>
                            <a href={data.homepage} className='text-slate-700 hover:text-slate-500 font-bold no-underline'>{data.homepage}</a>
                        </span> : null}
                    </div>
                    <div className='grid w-full px-4 text-lg justify-start items-center  '>
                        <h1 className=' bg-gradient-to-r text-transparent bg-clip-text from-indigo-400 to-violet-800 font-extrabold text-xl'>biography</h1>
                        <p className={`text-slate-700 font-semibold  ${!showMorebio ? 'line-clamp-4' : ''}`}>{data.biography}
                        </p>
                        <button onClick={() => setShowMorebio(prev => !prev)} className=' text-indigo-400 hover:text-indigo-700 text-start font-bold' >{!showMorebio ? 'show more' : 'show less'}</button>

                    </div>


                </div>
                <div className='mt-10 lg:w-11/12 mx-auto '>
                    <MovieCredits id={data.id} />
                    <TvCredits id={data.id} />
                </div>

            </div> : null}
        </>
    )
}

export default page