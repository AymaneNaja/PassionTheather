import React from 'react'
import ListCard from '../Cards/ListCard'
import { useGetRecommendationQuery } from '@/redux/TmdbApi'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {
    id: string | number,
    type: string

}

const Recomendations = ({ id, type }: Props) => {
    const { data, isSuccess, isLoading, isError } = useGetRecommendationQuery({ id, type })
    return (
        <>
            <div className=' px-1 m-auto'>
                {isSuccess && data.results.length >= 1 ? <ListCard pagnation={false} data={data.results}
                    type={type}
                    list_title='Recommended' /> : null}
                {isLoading ? <LoadingListCard /> : null}

            </div>
        </>

    )
}

export default Recomendations