'use client'

import { cn } from "@/lib/utils"
// import { bg } from "date-fns/locale"
import { signIn } from "next-auth/react"
import { ChangeEvent, useState } from "react"

export const RegisterForm = () => {
    const [loading, setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        name: "John Doe",
        email: "example@exmplessed.com",
        password: "123456789",
    });
    const [error, setError] = useState("")

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true);
        setFormValues({ name: "", email: "", password: ""});

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                  "Content-Type": "application/json",
                },
              });
        
              setLoading(false);
              if (!res.ok) {
                setError((await res.json()).message);
                return;
              }
        
              signIn(undefined, { callbackUrl: "/profile" });
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
                type="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Name"
                className={`${input_style}`}
                 />
            </div>
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
            disabled={loading}>
            { loading ? 'loading...' : 'Sign Up'}
             </button>
        </form>
        </>
    )
}