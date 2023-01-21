import { AnalyticsWrapper } from "./components/analytics"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="bg-[#f7f7f7] dark:bg-[#1d1d1f]">
				{children}
				<AnalyticsWrapper />
			</body>
		</html>
	)
}
