'use client'
import { useGetGenreListQuery } from '@/api/TmdbApi'
import Genres from '@/Components/Genres/AllGenres'
import React from 'react'

type Props = {}

function page({ }: Props) {

    return (
        <div className='mt-4'>
            <Genres Genre_title='Movies' type={'movie'} />
            <Genres Genre_title='TV Shows' type={'tv'} />
        </div>
    )
}

export default page