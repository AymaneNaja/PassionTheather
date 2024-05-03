'use client'
import { useGetTrendingMoviesQuery } from '@/redux/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function TopMovies({ }: Props) {
    const { data, isLoading, isSuccess } = useGetTrendingMoviesQuery('week')
    return (
        <div>
            {isSuccess ? <ListCard list_title={'Trending Movies'} type={'movie'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}
        </div>
    )
}

export default TopMovies