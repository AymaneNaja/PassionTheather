'use client'
import { useGetMovieByParamsQuery } from '@/redux/TmdbApi'
import React, { useState } from 'react'
import ListCard from '../Cards/ListCard'
import LoadingListCard from '../Cards/LoadingListCard'

type Props = {
    title: string,
    id: string | number,
    pagnation: boolean


}

const MovieGenres = ({ title, id, pagnation }: Props) => {
    const [pageCount, setPageCount] = useState<number | string>(1)
    const { data, isSuccess, isLoading } = useGetMovieByParamsQuery({ page: pageCount, genre: id, sort: 'popularity.desc' })
    return (
        <div className=''>
            {isSuccess ? <ListCard type={'movie'} total_pages={data.total_pages} page={pageCount} setPage={setPageCount} pagnation={pagnation} list_title={title} data={data.results} /> : null}
            {isLoading ? <LoadingListCard /> : null}


        </div>
    )
}

export default MovieGenres