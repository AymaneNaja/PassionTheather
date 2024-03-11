import SearchResults from "@/Components/Search/SearchResults"

type Props = {}

function page({ params }: { params: { query: string } }) {

    return (
        <div>
            <SearchResults query={params.query} />
        </div>
    )
}

export default page