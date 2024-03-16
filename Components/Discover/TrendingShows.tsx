'use client'
import { useGetTrendingtvShowsQuery } from '@/api/redux/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function TrendingShows({ }: Props) {
    const { data, isSuccess, isLoading } = useGetTrendingtvShowsQuery('week')
    return (
        <div>
            {isSuccess ? <ListCard list_title={'Trending Shows'} type={'tv'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}

        </div>
    )
}

export default TrendingShows