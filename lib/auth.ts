import { db } from "./prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { AuthOptions } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email"
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken"
export const authOptions: NextAuthOptions = {
   // @see https://github.com/prisma/prisma/issues/16117
   adapter: PrismaAdapter(db as any),
   secret: process.env.NEXTAUTH_SECRET,
   session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com'
                },
                password: { label: "Password", type: "password"},
            },
            async authorize(credentials) {
               if (!credentials?.email || !credentials.password) {
                return null
               }

               const user = await db.user.findUnique({
                where: {
                  email: credentials.email,
                },
              });
      
              if (!user || !user.password) {
                return null;
              }

              return {
                id: user.id,
                email: user.email,
                name: user.name,
              };
            },
        }),
    ],

    callbacks: {
      async session({ token, session }) {
        if (token) {
          session.user.id = token.id
          session.user.name = token.name
          session.user.email = token.email
          session.user.image = token.picture
        }
  
        return session
      },
      async jwt({ token, user }) {
        const dbUser = await db.user.findFirst({
          where: {
            email: token.email,
          },
        })
  
        if (!dbUser) {
          if (user) {
            token.id = user?.id
          }
          return token
        }
  
        return {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          picture: dbUser.image,
        }
      },
    },
};