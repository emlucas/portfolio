import Headline from "@/app/homepage/headline";
import Header from "@/app/header/header"
import About from "@/app/info/about";
import Contact from "@/app/info/contact";

export default function Home() {
	return (
		<div className={'flex justify-center min-w-screen min-h-screen pt-14'}>
			<main className={'flex flex-col xl:w-5xl sm:w-4/5 w-full p-3'}>
				<Header/>
				<Headline/>

				<About/>
				<Contact/>
			</main>
		</div>
	);
}
