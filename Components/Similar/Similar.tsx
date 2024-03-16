import React from 'react'
import ListCard from '../Cards/ListCard'
import { useGetSimilarQuery } from '@/api/redux/TmdbApi'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {
    id: string | number,
    type: string

}

function Similar({ id, type }: Props) {
    const { data, isSuccess, isLoading, isError } = useGetSimilarQuery({ id, type })
    console.log(data)
    return (
        <div className='px-1 m-auto'>{isSuccess && data.results.length >= 1 ? <ListCard pagnation={false} data={data.results}
            type={type}
            list_title='Similar' /> : null}
            {isLoading ? <LoadingListCard /> : null}

        </div>
    )
}

export default Similar