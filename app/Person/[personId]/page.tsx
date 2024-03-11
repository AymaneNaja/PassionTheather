import Person from "@/Components/Person/Person"

type Props = {
    personId: string
}


function page({ params }: { params: { personId: string } }) {
    return (
        <>
            <Person id={params.personId}></Person>
        </>
    )
}

export default page