'use client'
import { useGetTvshowQuery } from '@/api/redux/TmdbApi'
import ShowCase from '@/Components/ShowCase/ShowCase'
import ShowCaseLoading from '@/Components/ShowCase/ShowCaseLoading'

type Props = {
    id: string
}

const Tvshow = ({ id }: Props) => {
    const { isSuccess, isLoading, isError, data } = useGetTvshowQuery(id)
    return (
        <>{isSuccess ? <ShowCase
            type={'tv'}
            data={data} />
            : null}
            {isLoading ? <ShowCaseLoading /> : null}
        </>
    )
}

export default Tvshow