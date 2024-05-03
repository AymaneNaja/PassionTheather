'use client'
import { useGetGenreListQuery } from '@/redux/TmdbApi'
import React from 'react'
import { SingleCard } from '../Cards/SingleCard'
import SingleDashGenres from './SingleDashGenres'

type Props = {
    media_type: any
}

const DashGenres = ({ media_type }: Props) => {
    const { data, isSuccess, isLoading } = useGetGenreListQuery(media_type)
    return (
        <div>
            {isSuccess ? data.genres.map((genre: any) => <SingleDashGenres key={genre.id} id={genre.id} title={genre.name} media_type={media_type} />) : null}
        </div>
    )
}

export default DashGenres