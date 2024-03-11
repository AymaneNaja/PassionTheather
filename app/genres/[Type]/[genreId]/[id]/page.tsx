'use client'

import MovieGenres from '@/Components/Genres/MovieGenre'
import TvGenres from '@/Components/Genres/TvGenres'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}


function page({ }: Props) {
    const { Type, genreId, id }: any = useParams()

    const [pageCount, setPageCount] = useState<number | string>(1)


    return (
        <div className='min-h-screen'>
            {Type == 'tv' ? <TvGenres pagnation={true} title={genreId} id={id} /> : null}
            {Type == 'movie' ? <MovieGenres pagnation={true} title={genreId} id={id} /> : null}

        </div>
    )
}

export default page