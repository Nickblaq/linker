import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string
type RandomKey = string

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
    randomKey: RandomKey
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId
      randomKey: RandomKey
    }
  }
}