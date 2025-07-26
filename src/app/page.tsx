import Headline from "@/app/homepage/headline";
import About from "@/app/info/about";
import Contact from "@/app/info/contact";

export default function Home() {
	const width = 'xl:w-5xl sm:w-4/5 w-full pageWidth';

	return (
		<div className={'flex flex-col items-center min-w-screen min-h-screen'}>
			{/*<Header width={width}/>*/}

			<main className={'flex flex-col px-6 pb-28 ' + width}>
				<Headline/>

				<About/>
				<Contact/>
			</main>
		</div>
	);
}
