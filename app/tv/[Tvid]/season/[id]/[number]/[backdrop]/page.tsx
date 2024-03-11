'use client'
import { useGetTvshowSeasonQuery } from '@/api/TmdbApi'
import { ImageIntroduction } from '@/Components/ShowCase/ImageIntroduction'
import { Overview } from '@/Components/ShowCase/Overview'
import ShowCase from '@/Components/ShowCase/ShowCase'
import { TitleRating } from '@/Components/ShowCase/TitleRating'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

function page({ }: Props) {
    const { Tvid, number, backdrop }: any = useParams()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isError, isLoading, isSuccess, data } = useGetTvshowSeasonQuery({ id: Tvid, number })

    return (
        <div>
            {isSuccess ?
                <div className='lg:w-8/12 mx-auto '>
                    <div className='m-auto '>
                        <ImageIntroduction posterPath={data.poster_path} backdropPath={backdrop} />

                    </div>
                    <div className='w-full  px-10  mt-20   '>
                        <TitleRating air_date={data.air_date} vote_average={data.vote_average} title={data.name} rating={true} />
                        <p className='text-slate-500 font-bold text-base'>Season Number {data.season_number}</p>
                        <Overview overview={data.overview} />
                        <div className='grid justify-start'>
                            <h1 className='  bg-gradient-to-r text-transparent bg-clip-text from-violet-600 to-purple-900 font-extrabold  text-2xl
                            sm:text-3xl md:text-3xl py-4  lg:text-5xl
                            '>Episodes</h1>
                            {data.episodes.map((epi: any) => {
                                return (
                                    <div key={epi.id} className='bg-cover w-full lg:w-11/12 mx-auto  h-52 md:h-64 lg:h-80 grid justify-start items-end gap-3 mb-4 rounded-xl bg-darken bg-black' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${`https://image.tmdb.org/t/p/original/${epi.still_path}`}) ` }}>

                                        <div className='items p-4 '>
                                            <TitleRating extrastyle={'  bg-gradient-to-r text-transparent bg-clip-text from-violet-200 to-purple-400 font-extrabold'} air_date={epi.air_date} vote_average={epi.vote_average} title={epi.name} rating={true} />
                                            <Overview extrastyle={'text-slate-200 text-bold'} overview={epi.overview} />


                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>
                : null}
        </div>
    )
}

export default page