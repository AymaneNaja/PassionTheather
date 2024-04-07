import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma";
import page from '../../../auth/signin/page';
import bcrypt from 'bcrypt';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/signout'

    },
    secret: process.env.AUTH_SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'string', placeholder: 'Enter your email' },
                password: { label: 'Password', type: 'string', placeholder: 'Enter your password' }
            },
            async authorize(credentials: any) {
                const user = await prisma.user.findUnique({ where: { email: credentials?.email } })
                if (user) {
                    const passwordmatch = await bcrypt.compare(credentials?.password, user.password)
                    if (passwordmatch) {
                        return user
                    }
                    return null
                }
                return null
            }
        }
        )
    ],
    callbacks: {
        async session({ token, session }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id
                }
            }

        },
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id
                }
            }
            return token

        }

    }
};
const handler = NextAuth(authOptions)

export { handler as POST, handler as GET }