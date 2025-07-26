import HeadlineImage from "@/app/homepage/headlineImage";

const Headline = () => {
	return (
		<section className={'flex justify-between w-full pt-32 pb-12 relative'} id={'home'}>
			<div className={'flex flex-col items-start justify-center z-10 mr-96 lg:mr-0'}>
				<span className={'font-medium pl-1'}>Hi, I'm</span>
				<h1 className={'font-extrabold text-6xl'} id={'my-name'}>
					Emma Lucas
				</h1>
				<h2 className={'tracking-wider font-medium text-lg pl-1'}>
					Full-stack web developer
				</h2>

				<button className={'mt-8'}>
					<a href={'/Emma_Lucas_Resume.pdf'}
						className={'ctaButton font-bold box-border border border-background/30 py-3 px-4 rounded-2xl shadow-rose-400 ' +
							'hover:shadow-2xl cursor-pointer'}>Download CV</a>
				</button>
			</div>

			<div className={'imgWrapper absolute top-2 -right-6 md:-right-12 lg:right-0'}>
				<HeadlineImage/>
			</div>
		</section>
	)
}

export default Headline;