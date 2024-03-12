
import AiringShows from '@/Components/Discover/AiringToday'
import Intheaters from '@/Components/Discover/Intheaters'

import OntheAirShows from '@/Components/Discover/OntheAirShows'
import PopularMovies from '@/Components/Discover/PopularMovies'
import PopularShows from '@/Components/Discover/PopularShows'
import TopMovies from '@/Components/Discover/TopMovies'
import TopShows from '@/Components/Discover/TopShows'
import TrendingShows from '@/Components/Discover/TrendingShows'
import TrendingTvShowPoster from '@/Components/Discover/TrendingTvShowPoster'
import UpcomingMovies from '@/Components/Discover/UpcomingMovies'
import TrendingMoviePoster from '@/Components/Discover/trendingMoviePoster'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <div className='relative'>
            <TrendingMoviePoster />
            <div>
                <Intheaters />
                <PopularMovies />
                <UpcomingMovies />
                <TopMovies />
                <TopShows />
                <TrendingShows />
                <PopularShows />
                <OntheAirShows />

                <AiringShows />

            </div>
        </div>
    )
}

export default page