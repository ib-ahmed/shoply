"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useRef, useState } from "react"
import { supabase } from "../../lib/supabase"

export function LoginForm() {
	const router = useRouter()

	async function signIn(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setIsLoading(true)

		const { data, error } = await supabase.auth.signInWithPassword({
			email: emailRef.current?.value ?? "",
			password: passwordRef.current?.value ?? "",
		})

		setIsLoading(false)
		if (error) setError(error.message)
		if (data.user) router.push("/")
	}

	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)

	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	return (
		<form onSubmit={signIn} className="flex w-full flex-col gap-2 sm:w-80" autoComplete="off">
			{error && <span className="my-2 w-full bg-red-100 p-4 text-center text-red-900">{error}</span>}
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="text-sm text-zinc-500 dark:text-zinc-400">
					Email
				</label>
				<input
					ref={emailRef}
					id="email"
					type="email"
					className="w-full rounded-md p-2 autofill:shadow-transparent dark:bg-zinc-800"
				/>
			</div>
			<div className="flex flex-col gap-2 pb-6">
				<label htmlFor="password" className="text-sm text-zinc-500 dark:text-zinc-400">
					Password
				</label>
				<input
					ref={passwordRef}
					id="password"
					type="password"
					className="w-full rounded-md p-2 autofill:bg-none dark:bg-zinc-800"
				/>
			</div>
			<button
				type="submit"
				className="w-full rounded-md bg-indigo-600 p-2 py-3 disabled:bg-indigo-400"
				disabled={isLoading}
			>
				Login
			</button>
		</form>
	)
}
