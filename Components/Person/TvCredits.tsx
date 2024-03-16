'use client'
import React from 'react'
import ListCard from '../Cards/ListCard'
import { useGetPersonTvCreditsQuery } from '@/api/redux/TmdbApi'

type Props = {
  id: string | number
}



function TvCredits({ id }: Props) {
  const { data, isSuccess } = useGetPersonTvCreditsQuery(id)
  console.log(data)
  return (
    <div>
      {isSuccess && data.crew.length >= 2 ? <ListCard type={'tv'} list_title='Tv Shows' data={data.crew} pagnation={false} /> : null}
    </div>
  )
}

export default TvCredits