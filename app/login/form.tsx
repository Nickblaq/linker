'use client'

import { cn } from "@/lib/utils"
// import { bg } from "date-fns/locale"
import { signIn } from "next-auth/react"
import { ChangeEvent, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
      email: "example@exmplessed.com",
      password: "123456789",
    });
    const [error, setError] = useState("")

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/profile";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          setLoading(true);
          setFormValues({ email: "", password: "" });
    
          const res = await signIn("credentials", {
            redirect: false,
            email: formValues.email,
            password: formValues.password,
            callbackUrl,
          });
    
          setLoading(false);
    
          console.log(res);
          if (!res?.error) {
            router.push(callbackUrl);
          } else {
            setError("invalid email or password");
          }
        } catch (error: any) {
            setLoading(false)
            setError(error)
            console.log('Submit error',error)
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target;
        setFormValues({ ...formValues, [name]: value})
    }

    const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

    return (
        <>
        <form onSubmit={onSubmit}>
            {error && (
                <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
            )}

            <div className="mb-6">
                <input
                required
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email address"
                className={`${input_style}`}
                 />
            </div>
            <div className="mb-6">
                <input
                required
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Password"
                className={`${input_style}`}
                 />
            </div>
            <button
            type="submit"
            className={cn('inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full',
            loading ? 'bg-[#ccc]' : 'bg-[#3446eb]' 
            )}
            disabled={loading}
            >
            { loading ? 'loading...' : 'Sign In'}
             </button>

             <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
             <p className="text-center font-semibold mx-4 mb-0">OR</p>
             </div>

             <div
            className={cn('inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full',
            loading ? 'bg-[#ccc]' : 'bg-[#3446eb]' 
            )}
            >
           Google
             </div>
        </form>
        </>
    )
}