'use client'
import { Season } from './Season';
import { Collection } from './Collection';
import { Detail } from './Detail';
import { Overview } from './Overview';
import { Tagline } from './Tagline';
import { TitleRating } from './TitleRating';
import { Genres } from './Genres';
import { ImageIntroduction } from './ImageIntroduction';
import React from 'react'
import Similar from '../Similar/Similar';
import Recomendations from '../Recomendations/Recomendations';
import Credits from './Credits'
import ShowVideo from './ShowVideo';
import Favorite from './Favorite'


type Props = { data: any, type: string }

const ShowCase = ({ data, type }: Props) => {
    return (
        <>
            <div className='w-full m-auto min-h-screen'>
                <div className='m-auto lg:w-9/12 '>
                    <ImageIntroduction backdropPath={data.backdrop_path} posterPath={data.poster_path} adult={data.adult} />

                </div>
                <div className='w-full px-5 lg:px-8  mt-20  lg:w-9/12 mx-auto  '>
                    <div className={'flex justify-between items-center'}>
                        <div>
                            <TitleRating title={type != 'tv' ? data.title : data.name} vote_average={data.vote_average} />
                            {/* tagline */}
                            <Tagline tagline={data.tagline} /></div>
                        {/* like button*/}
                        <Favorite type={type} id={data.id} /></div>
                    <div>
                        {/* movie genres add link to genre */}
                        <Genres genres={data.genres} />
                        {/* overview */}
                        <Overview overview={data.overview} />
                        {/* details */}
                        {type !== 'tv' ? <Detail
                            release_date={data.release_date}
                            budget={data.budget}
                            revenue={data.revenue}
                            production_companies={data.production_companies} production_countries={data.production_countries} />
                            : null}{/* cast */}
                    </div>
                </div>
                <div className={'w-full lg:w-9/12 mx-auto px-2 lg:px-14'}>
                    <Credits type={type} id={data.id} />

                    {data.belongs_to_collection != null && type == 'movie' ? <Collection type={type} belongs_to_collection={data.belongs_to_collection} /> : null}
                    {type == 'tv' ?
                        <Season backdrop_path={data.backdrop_path} id={data.id} data={data} /> : null}

                    <ShowVideo type={type} id={data.id} />
                </div>
            </div >
            <div className='lg:w-11/12 mx-auto lg:px-14 w-full'>
                <Recomendations type={type} id={data.id} />
                <Similar type={type} id={data.id} />

            </div>
        </>
    )
}

export default ShowCase