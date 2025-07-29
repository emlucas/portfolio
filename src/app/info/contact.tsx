const Contact = () => {
	return (
		<section className={'flex flex-col text-xl py-8'} id={'contact'}>
			<h3 className={'font-medium mb-1'}>Get in touch.</h3>
			<div>
				<span className={'tracking-wider font-light'}>Email: </span>
				<a className={'underline'} href={'mailto:emmalucas256@gmail.com'}>emmalucas256@gmail.com</a>
			</div>
			<div className={'flex gap-3 mt-2'}>
				{/*Linkedin icon link*/}
				<a href={'https://www.linkedin.com/in/emma-lucas-0241b4155/'} target={'_blank'}>
					<svg width={25} height={25} viewBox={'0 0 16 16'}
						  className={'iconLink shadow-rose-400 hover:shadow-md opacity-70 hover:opacity-100 fill-(--foreground)'}>
						<use href={'/linkedin.svg#icon'}/>
					</svg>
				</a>

				{/*GitHub icon link*/}
				<a href={'https://github.com/emlucas'} target={'_blank'}>
					<svg width={25} height={25} viewBox={'0 0 16 16'}
						  className={'iconLink shadow-rose-400 hover:shadow-md rounded-full opacity-70 hover:opacity-100 fill-(--foreground)'}>
						<use href={'/github.svg#icon'}/>
					</svg>
				</a>
			</div>
		</section>
	)
}

export default Contact;