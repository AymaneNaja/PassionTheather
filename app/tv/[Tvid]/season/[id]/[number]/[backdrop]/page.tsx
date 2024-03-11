'use client'
import { useGetTvshowSeasonQuery } from '@/api/TmdbApi'
import { ImageIntroduction } from '@/Components/ShowCase/ImageIntroduction'
import { Overview } from '@/Components/ShowCase/Overview'
import ShowCase from '@/Components/ShowCase/ShowCase'
import { TitleRating } from '@/Components/ShowCase/TitleRating'
import TvSeason from '@/Components/Tv/TvSeason'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

function page({ params }: { params: { Tvid: string, number: string, backdrop: string } }) {

    return (
        <div>
            <TvSeason Tvid={params.Tvid} number={params.number} backdrop={params.backdrop}></TvSeason>
        </div>
    )
}

export default page