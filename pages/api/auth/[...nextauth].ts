import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

export default NextAuth({
    providers: [
      Github({
        clientId: process.env.GITHUB_ID || '',
        clientSecret: process.env.GITHUB_SECRET || '',
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
  })