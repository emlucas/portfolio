const Contact = () => {
	return (
		<section className={'flex flex-col text-xl py-8'} id={'contact'}>
			<h3 className={'font-medium mb-2'}>Get in touch.</h3>
			<div>
				<span>Email: </span>
				<a className={'underline'} href={'mailto:emmalucas256@gmail.com'}>emmalucas256@gmail.com</a>
			</div>
			<div className={'flex gap-3 mt-2'}>
				<a href={'https://www.linkedin.com/in/emma-lucas-0241b4155/'} target={'_blank'}>
					<img src={'linkedin.svg'} alt={'LinkedIn'} width={25} height={25}
						  className={'shadow-rose-400 hover:shadow-md'}/>
				</a>
				<a href={'https://github.com/emlucas'} target={'_blank'}>
					<img src={'github.svg'} alt={'Github'} width={25} height={25}
						  className={'shadow-rose-400 hover:shadow-md rounded-full'}/>
				</a>
			</div>
		</section>
	)
}

export default Contact;