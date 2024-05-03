'use client'
import { useGetOnTheAirQuery, useGetPopularQuery, useGetPopularShowsQuery } from '@/redux/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function PopularShows({ }: Props) {
    const { data, isLoading, isSuccess } = useGetPopularShowsQuery('')
    return (
        <>{isSuccess ? <ListCard list_title={'Popular Shows'} type={'tv'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}

        </>
    )
}

export default PopularShows