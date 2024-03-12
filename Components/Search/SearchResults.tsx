'use client'
import { useGetMultiSearchQuery } from '@/api/TmdbApi'
import ListCard from '@/Components/Cards/ListCard'
import CollectionResults from '@/Components/Search/CollectionResults'
import MovieResults from '@/Components/Search/MovieResults'
import PersonResults from '@/Components/Search/PersonResults'
import TvResults from '@/Components/Search/Tvresults'
import { Collection } from '@/Components/ShowCase/Collection'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

type Props = {
    query: string
}

function SearchResults({ query }: Props) {

    const [pageCount, setPageCount] = useState<number>(1)
    return (
        <div className='px-4'>
            <MovieResults query={query} pageCount={pageCount} />
            <TvResults query={query} pageCount={pageCount} />
            <PersonResults query={query} pageCount={pageCount} />

        </div>
    )
}

export default SearchResults