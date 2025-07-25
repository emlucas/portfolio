import HeadlineImage from "@/app/homepage/headlineImage";

const Headline = () => {
	return (
		<section className={'flex justify-between w-full pt-32 pb-28'} id={'home'}>
			<div className={'flex flex-col items-start justify-center'}>
				<span className={'font-medium pl-1'}>Hi, I'm</span>
				<h1 className={'font-extrabold text-6xl'} id={'my-name'}>
					Emma Lucas
				</h1>
				<h2 className={'tracking-wider font-medium text-lg pl-1'}>
					Full-stack web developer
				</h2>

				<a className={'ctaButton mt-8 py-3 px-4 rounded-xl ' +
					'shadow-rose-400 bg-white/20 border border-white/20 border-t-white/35 border-l-white/35 backdrop-blur-2xl ' +
					'hover:shadow-2xl cursor-pointer'}
				>
					<span className={'font-bold bg-gradient-to-r from-orange-400 to-rose-400 text-transparent bg-clip-text'}>
						Download CV
					</span>
				</a>
			</div>

			<HeadlineImage/>
		</section>
	)
}

export default Headline;