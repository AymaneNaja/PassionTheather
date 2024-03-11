import { SeasonCard } from './SeasonCard';
import React from "react";
export function Season({ data, id, backdrop_path }: any) {
  return <div className='w-full my-4'>

    <h1 className={`
  py-1
   text-2xl
   sm:text-3xl
   md:text-3xl
   lg:text-5xl
  bg-gradient-to-r text-transparent bg-clip-text from-violet-600 to-purple-900 font-extrabold  `}>
      Seasons
    </h1>
    <div className={` w-full grid   justify-start  md:grid-cols-5 lg:grid-cols-6 items-start gap-2 overflow-scroll no-scrollbar grid-cols-3 sm:grid-cols-4  `}>
      {data.seasons.map((season: any) => {
        return (
          <SeasonCard backdrop_path={backdrop_path} TvShow_id={id} number={season.season_number} name={season.name} id={season.id} air_date={season.air_date} episode_count={season.episode_count} key={season.id} poster_path={season.poster_path} />
        )
      })}
    </div>
  </div>
}
