'use client'
import { useGetSearchTvQuery } from '@/api/redux/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {
    query: string,
    pageCount: number,

}

function TvResults({ query, pageCount }: Props) {
    const { data, isSuccess, isLoading } = useGetSearchTvQuery({ query: query, page: pageCount })
    return (
        <div>
            {isSuccess && data.results.length ? <ListCard pagnation={false} page={pageCount} data={data.results} list_title={'Tv Shows'} /> : null}
            {isLoading ? <LoadingListCard /> : null}

        </div>
    )
}

export default TvResults