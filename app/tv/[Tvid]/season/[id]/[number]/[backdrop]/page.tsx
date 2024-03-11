
import TvSeason from '@/Components/Tv/TvSeason'

type Props = {}

function page({ params }: { params: { Tvid: string, number: string, backdrop: string } }) {

    return (
        <div>
            <TvSeason Tvid={params.Tvid} number={params.number} backdrop={params.backdrop}></TvSeason>
        </div>
    )
}

export default page