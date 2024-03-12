'use client'
import { useGetAiringTodayQuery } from '@/api/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function AiringShows({ }: Props) {
    const { data, isLoading, isSuccess } = useGetAiringTodayQuery('')
    return (
        <>{isSuccess ? <ListCard list_title={'Airing Today'} type={'tv'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}
        </>
    )
}

export default AiringShows