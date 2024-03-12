'use client'
import { useGetByParamsQuery } from '@/api/TmdbApi'
import React from 'react'
import ListCard from '../Cards/ListCard'

type Props = {
    keyword: any,
    list_title: string
}

const MoviesByKey = ({ keyword, list_title }: Props) => {
    const { data, isLoading, isError, isSuccess } = useGetByParamsQuery({ page: 1, genre: 'comedy', sort: 'popularity.desc' })
    return (
        <div>
            {isSuccess ? <ListCard type={'movie'} pagnation={false} list_title={list_title} data={data.results} /> : null}
        </div>

    )
}

export default MoviesByKey