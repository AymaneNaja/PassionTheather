'use client'
import { useGetCollectionQuery } from '@/api/TmdbApi'
import { useParams } from 'next/navigation'
import React from 'react'
import { Overview } from '@/Components/ShowCase/Overview'
import { TitleRating } from '@/Components/ShowCase/TitleRating'
import { ImageIntroduction } from '@/Components/ShowCase/ImageIntroduction'
import ListCard from '@/Components/Cards/ListCard'

type Props = {}

const page = (props: Props) => {
    const { collectionId, collectionType }: any = useParams()
    const { data, isSuccess, isLoading, isError } = useGetCollectionQuery(collectionId)
    return (
        <>
            {isSuccess ? <div className='grid gap-2'>
                <div className='w-full lg:w-9/12 m-auto min-h-screen'>
                    <ImageIntroduction backdropPath={data.backdrop_path} posterPath={data.poster_path} />
                    <div className='w-full px-10  mt-20 '>
                        <TitleRating rating={false} title={data.name} />
                        <Overview overview={data.overview} />
                    </div>
                </div>
                <div className='px-4'>

                    <ListCard type={collectionType} data={data.parts} list_title='Parts' page={1} total_pages={1} pagnation={true} hidePagnation={true} />
                </div>

            </div> : null}

        </>
    )
}

export default page