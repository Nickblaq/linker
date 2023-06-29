import type { Kysely, RawBuilder } from "kysely";
import type { Account } from "next-auth";
import type {
  Adapter,
  AdapterSession,
  VerificationToken,
  AdapterUser,
} from "next-auth/adapters";
import { Database } from "./kysely";



export function KyselyAdapter(
  db: Database,
  opts: {
    generateId: () => string | RawBuilder<any>;
  }
): Adapter {
  return {
    async createUser(data) {
      return db
        .insertInto("User")
        .values({ id: opts.generateId(), ...data })
        .returningAll()
        .castTo<AdapterUser>()
        .executeTakeFirstOrThrow();
    },
    async getUser(id) {
      const user = await db
        .selectFrom("User")
        .selectAll()
        .where("id", "=", id)
        .castTo<AdapterUser>()
        .executeTakeFirst();
      if (!user) {
        return null;
      }
      return user;
    },
    async getUserByEmail(email) {
      const user = await db
        .selectFrom("User")
        .selectAll()
        .where("email", "=", email)
        .castTo<AdapterUser>()
        .executeTakeFirst();
      if (!user) {
        return null;
      }
      return user;
    },
    async getUserByAccount(account) {
      const result = await db
        .selectFrom("Account")
        .innerJoin("User", "Account.userId", "User.id")
        .selectAll()
        .where("providerAccountId", "=", account.providerAccountId)
        .executeTakeFirst();
      if (!result) {
        return null;
      }
      const { emailVerified, userId, name, email, image } = result;
      return {
        id: userId,
        emailVerified: emailVerified
          ? new Date(emailVerified.toString())
          : null,
        name,
        email,
        image,
      };
    },
    async updateUser(user) {
      if (!user.id) {
        throw new Error("User id is required");
      }
      return db
        .updateTable("User")
        .where("id", "=", user.id)
        .set(user)
        .returningAll()
        .castTo<AdapterUser>()
        .executeTakeFirstOrThrow();
    },
    async deleteUser(userId) {
      return db
        .deleteFrom("User")
        .where("id", "=", userId)
        .returningAll()
        .castTo<AdapterUser>()
        .executeTakeFirstOrThrow();
    },
    async linkAccount(account) {
      return db
        .insertInto("Account")
        .values({ ...account, id: opts.generateId() })
        .returningAll()
        .castTo<Account>()
        .executeTakeFirstOrThrow();
    },
    async unlinkAccount(account) {
      return db
        .deleteFrom("Account")
        .where("providerAccountId", "=", account.providerAccountId)
        .returningAll()
        .castTo<Account>()
        .executeTakeFirstOrThrow();
    },
    async createSession(session) {
      return db
        .insertInto("Session")
        .values({ ...session, id: opts.generateId() })
        .returningAll()
        .castTo<AdapterSession>()
        .executeTakeFirstOrThrow();
    },
    async getSessionAndUser(sessionTokenInput) {
      const query = await db
        .selectFrom("Session")
        .innerJoin("User", "Session.userId", "User.id")
        .selectAll()
        .where("Session.sessionToken", "=", sessionTokenInput)
        .executeTakeFirst();
      if (!query) {
        return null;
      }
      const {
        email,
        emailVerified,
        expires,
        id,
        image,
        name,
        sessionToken,
        userId,
      } = query;
      return {
        session: {
          id,
          sessionToken,
          userId,
          expires: new Date(expires.toString()),
        },
        user: {
          id: userId,
          emailVerified: emailVerified
            ? new Date(emailVerified.toString())
            : null,
          name,
          email,
          image,
        },
      };
    },
    async updateSession(session) {
      return db
        .updateTable("Session")
        .where("sessionToken", "=", session.sessionToken)
        .set(session)
        .returningAll()
        .castTo<AdapterSession>()
        .executeTakeFirstOrThrow();
    },
    async deleteSession(sessionToken) {
      return db
        .deleteFrom("Session")
        .where("sessionToken", "=", sessionToken)
        .returningAll()
        .castTo<AdapterSession>()
        .executeTakeFirstOrThrow();
    },
    async createVerificationToken(verificationToken) {
      return db
        .insertInto("VerificationToken")
        .values({ ...verificationToken })
        .returningAll()
        .castTo<VerificationToken>()
        .executeTakeFirstOrThrow();
    },
    async useVerificationToken(params) {
      const result = await db
        .deleteFrom("VerificationToken")
        .where("identifier", "=", params.identifier)
        .where("token", "=", params.token)
        .returningAll()
        .castTo<VerificationToken>()
        .executeTakeFirst();
      if (!result) {
        return null;
      }
      return result;
    },
  };

  // TODO: Implement this code with @vercel/postgres-kysely (https://github.com/vercel/next.js/tree/canary/packages/postgres-kysely)
}