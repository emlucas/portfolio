import HeadlineImage from "@/app/homepage/headlineImage";
import {Caprasimo} from "next/font/google";

const caprasimo = Caprasimo({
	weight: '400',
	variable: "--font-caprasimo-sans",
	subsets: ["latin"],
})

const Headline = () => {
	return (
		<section className={'flex justify-between w-full pt-[55vw] sm:pt-32 lg:pt-42 relative'} id={'home'}>
			<div className={'flex flex-col items-start justify-center pb-12 z-10 mr-0 sm:mr-92 lg:mr-0'}>
				<span className={'font-medium pl-1'}>Hi, I'm</span>
				<h1 className={'font-extrabold text-6xl ' + caprasimo.className} id={'my-name'}>
					Emma Lucas
				</h1>
				<h2 className={'tracking-wider font-medium text-lg pl-1'}>
					Full-stack web developer
				</h2>

				<button className={'mt-8'}>
					<a href={'/Emma_Lucas_Resume.pdf'} download
						className={'ctaButton font-bold box-border border border-background/30 py-3 px-4 rounded-2xl shadow-rose-400 ' +
							'hover:shadow-2xl cursor-pointer'}>Download CV</a>
				</button>
			</div>

			<div
				className={'imgWrapper absolute top-2 lg:top-12 right-[calc(12vw+8px)] sm:-right-6 md:-right-12 lg:right-0 size-[60vw] sm:size-[400px]'}>
				<HeadlineImage/>
			</div>
		</section>
	)
}

export default Headline;