import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { BiLogoTypescript } from 'react-icons/bi';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
type userType = {
    email: string,
    password: string,
    name: string,
    profileimg?: string,
}
export async function POST(req: NextRequest) {
    const { email, password, name }: any = await req.json();
    if (email && password && name) {
        const checkuser = await prisma.user.findUnique({ where: { email: email } })
        if (checkuser) {
            return NextResponse.json({ message: 'user already exists' }, {
                status
                    : 404
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const postNewUser = await prisma.user.create({ data: { email, password: hashedpassword, name } })
        return NextResponse.json({ message: 'user added' }, {
            status
                : 200
        })

    }
    return NextResponse.json({ message: "couldn't add user" }, { status: 404 })
}