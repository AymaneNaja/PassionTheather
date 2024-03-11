'use client'
import { useGetPopularQuery, useGetTrendingMoviesQuery } from '@/api/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'


type Props = {}

function PopularMovies({ }: Props) {
    const { data, isLoading, isSuccess } = useGetPopularQuery('movie')
    return (
        <div>
            {isSuccess ? <ListCard list_title={'Popular Movies'} type={'movie'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}
        </div>
    )
}

export default PopularMovies