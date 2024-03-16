'use client'
import { useGetTrendingPeopleQuery } from '@/api/redux/TmdbApi'
import React from 'react'
import { PersonCard } from '../Cards/PerSonCard'

type Props = {
    limit?: number
}

function PopularPeople({ limit }: Props) {
    const { data, isLoading, isSuccess, isError } = useGetTrendingPeopleQuery('')
    return (
        <div className='flex w-1/4 gap-1 h-2/4'>
            {isSuccess && limit !== 0 ? data.results.slice(0, limit).map((person: any) => {
                return (
                    <PersonCard key={person.id} person={person} />
                )
            })
                : null}
            {isSuccess && limit == 0 ? data.results.slice(0, limit).map((person: any) => {
                return (
                    <PersonCard key={person.id} person={person} />
                )
            })
                : null}
        </div>
    )
}

export default PopularPeople