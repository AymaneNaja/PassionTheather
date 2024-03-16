'use client'
import { useGetOnTheAirQuery } from '@/api/redux/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function OntheAirShows({ }: Props) {
    const { data, isLoading, isSuccess } = useGetOnTheAirQuery('')
    return (
        <>{isSuccess ? <ListCard list_title={'On the Air'} type={'tv'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}

        </>
    )
}

export default OntheAirShows