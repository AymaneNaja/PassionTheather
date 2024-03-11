'use client'
import { useGetSearchMovieQuery } from '@/api/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {
    query: string,
    pageCount: number

}

function MovieResults({ query, pageCount }: Props) {
    const { data, isSuccess, isLoading } = useGetSearchMovieQuery({ query: query, page: pageCount })
    return (
        <div>
            {isSuccess && data.results.length >= 1 ? <ListCard pagnation={false} type='movie' page={pageCount} data={data.results} list_title={'Movies'} /> : null}
            {isLoading ? <LoadingListCard /> : null}
        </div>
    )
}

export default MovieResults