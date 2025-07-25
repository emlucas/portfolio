import HeadlineImage from "@/app/homepage/headlineImage";

const Headline = () => {
	return (
		<section className={'flex justify-between w-full py-28'} id={'home'}>
			<div className={'flex flex-col items-start justify-center'}>
				<span className={'font-medium pl-1'}>Hi, I'm</span>
				<h1 className={'font-extrabold text-6xl'}>
					Emma Lucas
				</h1>
				<h2 className={'tracking-wider font-medium text-lg pl-1'}>
					Full-stack web developer
				</h2>
			</div>

			<HeadlineImage/>
		</section>
	)
}

export default Headline;