'use client'
import React from 'react'
import ListCard from '../Cards/ListCard'
import { useGetPersonMovieCreditsQuery } from '@/redux/TmdbApi'

type Props = {
  id: number | string
}


function MovieCredits({ id }: Props) {
  const { data, isSuccess } = useGetPersonMovieCreditsQuery(id)
  console.log(data)
  return (
    <div>
      {isSuccess && data.crew.length >= 2 ? <ListCard type={'movie'} list_title='Movies' data={data.crew} pagnation={false} /> : null}
    </div>
  )
}

export default MovieCredits