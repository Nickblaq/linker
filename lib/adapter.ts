
import type { Kysely, RawBuilder } from "kysely";
import type { VDatabase } from "./vercelPg";
import type {
  Adapter,
  AdapterSession,
  VerificationToken,
  AdapterUser,
} from "next-auth/adapters";


/**
 * A function that returns an adapter for interacting with a database using kysely.
 * @param db the kysely database instance
 * @param opts an object containing options for the adapter:
 * - sql: a function that takes a template string and returns a RawBuilder object from kysely.
 * @returns an adapter object with methods for interacting with the database.
 */

export function KyselyAdapter(
  db: Kysely<VDatabase>, // a kysely database client instance that is already connected
  opts: {
    sql: (strings: TemplateStringsArray, ...params: any[]) => RawBuilder<any>; // a function that takes a template string and returns a RawBuilder object from @vercel/postgres-kysely.
  }
): Adapter {
  /**
   * The adapter object with methods for interacting with the database.
   */
  return {
     /**
     * A method for creating a new user.
     * @param data an object containing the user's data.
     * @returns the newly created user object.
     */
    async createUser(data) {
      return db
        .insertInto("User")
        .values({ ...data, id: opts.sql`uuid_generate_v4()` })
        .returningAll()
        .$castTo<AdapterUser>()
        .executeTakeFirstOrThrow();
    },
    /**
     * A method for getting a user by ID.
     * @param id the ID of the user to retrieve.
     * @returns the user object, or null if the user was not found.
     */
    async getUser(id) {
      const user = await db
        .selectFrom("User")
        .selectAll()
        .where("id", "=", id)
        .$castTo<AdapterUser>()
        .executeTakeFirst();
      if (!user) {
        return null;
      }
      return user;
    },

        /**
     * Retrieves a user from the database given their email address.
     *
     * @param {string} email - The email address of the user to retrieve.
     * @return {Promise<AdapterUser|null>} A Promise that resolves with the user object if found, or null if not found.
     */
    async getUserByEmail(email) {
      const user = await db
        .selectFrom("User")
        .selectAll()
        .where("email", "=", email)
        .$castTo<AdapterUser>()
        .executeTakeFirst();
      if (!user) {
        return null;
      }
      return user;
    },
        /**
     * Retrieves a user by their account information.
     *
     * @async
     * @function getUserByAccount
     * @param {object} account - Account information object.
     * @param {string} account.providerAccountId - Provider account ID.
     * @returns {object | null} User object if found, otherwise null.
     */
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
        /**
     * Updates a user in the "User" table of the database with the given user object.
     *
     * @param {object} user - The user object to update in the database. Must have an "id" property.
     * @return {Promise<object>} - A promise that resolves to the updated user object.
     * @throws {Error} If the user object does not have an "id" property.
     */
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
        /**
     * Deletes a user from the User table in the database with the given userId.
     *
     * @param {string} userId - The id of the user to be deleted.
     * @return {Promise<AdapterUser>} A promise that resolves with the deleted user.
     */
    async deleteUser(userId) {
      return db
        .deleteFrom("User")
        .where("id", "=", userId)
        .returningAll()
        .castTo<AdapterUser>()
        .executeTakeFirstOrThrow();
    },
    async linkAccount(account) {
    //   return db
    //     .insertInto("Account")
    //     .values({ ...account, id: opts.generateId() })
    //     .returningAll()
    //     .castTo<Account>()
    //     .executeTakeFirstOrThrow();
    },
    async unlinkAccount(account) {
    //   return db
    //     .deleteFrom("Account")
    //     .where("providerAccountId", "=", account.providerAccountId)
    //     .returningAll()
    //     .castTo<Account>()
    //     .executeTakeFirstOrThrow();
    },
        /**
     * Creates a new session in the "Session" table with the given session object.
     *
     * @param {Object} session - The session object to be inserted into the "Session" table.
     * @return {Promise<AdapterSession>} - A Promise that resolves to the newly created session object cast to AdapterSession.
     */
    async createSession(session) {
      return db
        .insertInto("Session")
        .values({ ...session, id: opts.sql`uuid_generate_v4()` })
        .returningAll()
        .castTo<AdapterSession>()
        .executeTakeFirstOrThrow();
    },
        /**
     * Retrieves the session and user information associated with a given session token.
     *
     * @param {string} sessionTokenInput - the session token to retrieve information for
     * @return {Promise<object>} returns an object with the session and user information,
     *                           or null if no matching session is found
     */
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
        /**
     * Updates a session in the Session table based on the given sessionToken.
     *
     * @param {Object} session - The session object to be updated
     * @return {Promise<AdapterSession>} The updated session object casted to the AdapterSession type
     */
    async updateSession(session) {
      return db
        .updateTable("Session")
        .where("sessionToken", "=", session.sessionToken)
        .set(session)
        .returningAll()
        .castTo<AdapterSession>()
        .executeTakeFirstOrThrow();
    },
        /**
     * Deletes a session from the "Session" table in the database based on the given sessionToken.
     *
     * @param {string} sessionToken - The session token to be deleted.
     * @return {Promise<AdapterSession>} A promise that resolves to the deleted AdapterSession object.
     */
    async deleteSession(sessionToken) {
      return db
        .deleteFrom("Session")
        .where("sessionToken", "=", sessionToken)
        .returningAll()
        .castTo<AdapterSession>()
        .executeTakeFirstOrThrow();
    },
        /**
     * Creates a verification token in the "VerificationToken" table.
     *
     * @param {object} verificationToken - An object containing properties for the verification token.
     * @return {Promise<VerificationToken>} - A promise that resolves with the created verification token.
     */
    async createVerificationToken(verificationToken) {
      return db
        .insertInto("VerificationToken")
        .values({ ...verificationToken })
        .returningAll()
        .castTo<VerificationToken>()
        .executeTakeFirstOrThrow();
    },
    
        /**
     * Deletes a verification token from the "VerificationToken" table based on the identifier and token.
     *
     * @param {object} params - An object containing the identifier and token of the verification token to be deleted.
     * @return {VerificationToken | null} The deleted verification token, or null if it was not found.
     */
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
}