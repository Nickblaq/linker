"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { getSession } from '@/lib/session'

const AuthHead = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const { data } = useSession()
  console.log(data)

  return (
    <header className="bg-white h-20">
      <nav className="h-full flex justify-between container items-center">
        <div>
          <Link href="/" className="text-ct-dark-600 text-2xl font-semibold">
            Linker
          </Link>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/" className="text-ct-dark-600">
              Home
            </Link>
          </li>
          {!user && (
            <>
              <li>
                <Link href="/login" className="text-ct-dark-600">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-ct-dark-600">
                  Register
                </Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <Link href="/profile" className="text-ct-dark-600">
                  Profile
                </Link>
              </li>
              <li className="cursor-pointer" onClick={() => signOut()}>
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default AuthHead;