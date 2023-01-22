import { Alexandria } from "@next/font/google"
import { LoginForm } from "./form"

const heroSentenceFont = Alexandria({ weight: "400", subsets: ["latin"], display: "swap" })

export default function Login() {
	return (
		<main className="flex flex-1 items-center justify-center">
			<div className="flex w-full flex-col gap-4 rounded-md bg-zinc-900 p-2 sm:w-max sm:p-12">
				<h2 style={heroSentenceFont.style} className="p-4 text-center text-xl dark:text-white">
					Login
				</h2>
				<LoginForm />
			</div>
		</main>
	)
}
