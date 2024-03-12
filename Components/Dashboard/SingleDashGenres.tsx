'use client'
import React from 'react'

import ListCard from '@/Components/Cards/ListCard'
import TvGenres from '../Genres/TvGenres'
import MovieGenres from '../Genres/MovieGenre'

type Props = {
    id: string | number
    title: any,
    media_type: string
}

function SingleDashGenres({ id, title, media_type
}: Props) {

    return (
        <div>
            {media_type == 'tv' ? <TvGenres pagnation={false} title={title} id={id} /> : null}
            {media_type == 'movie' ? <MovieGenres pagnation={false} title={title} id={id} /> : null}
        </div>
    )
}

export default SingleDashGenres