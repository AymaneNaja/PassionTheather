'use client'
import { useGetIntheatersQuery } from '@/api/redux/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {}

function Intheaters({ }: Props) {
    const { data, isLoading, isSuccess } = useGetIntheatersQuery('movie')
    return (
        <>{isSuccess ? <ListCard type={'movie'} list_title={'In theaters'} pagnation={false} hidePagnation={false} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}</>
    )
}

export default Intheaters