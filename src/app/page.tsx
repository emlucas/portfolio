import Headline from "@/app/homepage/headline";
import About from "@/app/info/about";
import Contact from "@/app/info/contact";

export default function Home() {
	const width = 'xl:w-5xl sm:w-4/5 w-full pageWidth';

	return (
		<div className={'flex flex-col items-center min-w-screen min-h-screen relative'}>
			<div className={'absolute w-screen h-screen filter-[url("/filter.svg#grain")]'}>
				<div
					className={'absolute top-2/12 left-2/12 w-72 h-72 bg-orange-400 opacity-30 rounded-full z-[-1] mix-blend-screen filter blur-[12rem]'}></div>
				<div
					className={'absolute top-3/12 left-3/12 w-96 h-96 bg-rose-400 opacity-30 rounded-full z-[-1] mix-blend-screen filter blur-[12rem]'}></div>
				{/*<Header width={width}/>*/}
			</div>

			<main className={'flex flex-col px-3 pb-3 ' + width}>
				<Headline/>

				<About/>
				<Contact/>
			</main>
		</div>
	);
}
