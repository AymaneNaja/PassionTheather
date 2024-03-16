'use client'
import { useGetOnTheAirQuery, useGetTopRatedShowsQuery } from '@/api/redux/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function TopShows({ }: Props) {
    const { data, isLoading, isSuccess } = useGetTopRatedShowsQuery('')
    return (
        <>{isSuccess ? <ListCard list_title={'Top Rated Shows'} type={'tv'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}

        </>
    )
}

export default TopShows