'use client'
import { useGetUpcomingMoviesQuery } from '@/api/redux/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function UpcomingMovies({ }: Props) {
    const { data, isLoading, isSuccess } = useGetUpcomingMoviesQuery('')
    return (
        <>{isSuccess ? <ListCard list_title={'Coming soon'} type={'movie'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}
        </>
    )
}

export default UpcomingMovies