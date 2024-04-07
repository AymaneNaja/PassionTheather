import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET(request: NextRequest,
    { params }: { params: { id: string } }) {
    const favorites = await prisma.media.findMany({ where: { user_id: params.id } })
    if (favorites) {
        return NextResponse.json(favorites, { status: 200 })
    }
    return NextResponse.json("Couldn't get data", { status: 404 })
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    const { id, type } = await req.json()
    if (id && type) {
        const addFav = await prisma.media.create({ data: { id: id, type: type, user_id: params.id } })
        return NextResponse.json('Favorites added successfully', { status: 200 })
    }
    return NextResponse.json('error,favorites list not added', { status: 404 })
}
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await req.json()
    if (id) {
        const deleteFav = await prisma.media.delete({ where: { id: id, user_id: params.id } })
        return NextResponse.json('Favorites deleted successfully', { status: 200 })
    }
    return NextResponse.json('error,unable to delete...', { status: 404 })
}
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id, type } = await req.json()
    if (id && type) {
        const updateFav = await prisma.media.update({ data: { id: id, type: type, user_id: params.id }, where: { id: id, user_id: params.id } })
        return NextResponse.json('Favorites list updated successfully', { status: 200 })
    }
    return NextResponse.json('error,favorites list not updated', { status: 404 })
}