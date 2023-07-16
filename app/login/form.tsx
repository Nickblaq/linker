'use client'

import { cn } from "@/lib/utils"
// import { bg } from "date-fns/locale"
import { signIn } from "next-auth/react"
import { ChangeEvent, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
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

{/* <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>
          <button disabled={isLoading}>
            {isLoading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : null}
            Sign In with Email
          </button>
        </div> */}
        <div className="grid gap-2">
            <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">Email</Label>
                <Input
                required
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email address"
                // className={`${input_style}`}
                 />
            </div>
            <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">Password</Label>
                <Input
                required
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Password"
                // className={`${input_style}`}
                 />
            </div>
            <Button
            type="submit"
            variant="outline"
            disabled={loading}
            >
             {loading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : null}
            {/* { loading ? 'loading...' : 'Sign In'} */}
             </Button>
             </div>
        </form>
        <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={loading}>
        {loading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )} Github
      </Button>
        </>
    )
}