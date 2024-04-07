import Genres from "@/Components/Genres/Genres"


type Props = {}


function page({ params }: { params: { Type: string, genreId: string, id: string } }) {
    return (
        <Genres Type={params.Type} genreId={params.genreId} id={params.id} ></Genres>
    )
}

export default page