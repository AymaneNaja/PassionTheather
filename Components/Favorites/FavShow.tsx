import React from 'react'
import { SingleCard } from '../Cards/SingleCard'
import { useGetMovieQuery, useGetTvshowQuery } from '@/redux/TmdbApi'

type Props = { id: string, type: string, showMore: boolean }

function FavShow({ id, type, showMore }: Props) {
    const { data: item, isLoading, isSuccess } = useGetTvshowQuery(id)
    return (
        <div>   {isSuccess ? <SingleCard
            type={type}
            showMore={showMore}
            key={item.id}
            adult={item.adult}
            media_type={item.media_type}
            id={item.id}
            title={item.title ? item.title : item.name}
            poster_path={item.poster_path}
            original_language={item.original_language}
            overview={item.overview}
            vote_average={item.vote_average}
        /> : null}</div>
    )
}

export default FavShow