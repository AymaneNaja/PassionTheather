'use client'
import { useGetMovieQuery } from '@/api/TmdbApi'
import ShowCase from '@/Components/ShowCase/ShowCase'
import { useParams } from 'next/navigation'
import ShowCaseLoading from '@/Components/ShowCase/ShowCaseLoading'

type Props = {
    id: string
}

function Movie({ id }: Props) {

    const { data, isSuccess, isLoading } = useGetMovieQuery(id)
    return (
        <div> {isSuccess ? <ShowCase type={'movie'} data={data} /> : null}
            {isLoading ? <ShowCaseLoading /> : null}</div>
    )
}

export default Movie