import Headline from "@/app/homepage/headline";
import Header from "@/app/header/header"
import './app.scss'

export default function Home() {
	return (
		<div className={'flex justify-center min-w-screen min-h-screen pt-14'}>
			<main className={'flex flex-col xl:w-6xl sm:w-4/5 w-full p-3'}>
				<Header/>
				<Headline/>
			</main>
		</div>
	);
}
