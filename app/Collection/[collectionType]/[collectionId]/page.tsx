
import Collections from '@/Components/Collections/Collections'

type Props = {
    collectionType: string
}

const page = ({ params }: { params: { collectionId: string } }) => {

    return (
        <>
            <Collections id={params.collectionId} />
        </>
    )
}

export default page