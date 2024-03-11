import Movie from '@/Components/Movie/Movie'
type Props = {}

const page = ({ params }: { params: { MovieId: string } }) => {
    return (
        <div>
            <Movie id={params.MovieId} />
        </div>
    )
}

export default page