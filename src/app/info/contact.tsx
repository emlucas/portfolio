const Contact = () => {
	return (
		<section className={'flex flex-col text-xl py-18'} id={'contact'}>
			<h3 className={'font-medium italic mb-2'}>Get in touch</h3>
			<div>
				<span>Email: </span>
				<a className={'underline'} href={'mailto:emmalucas256@gmail.com'}>emmalucas256@gmail.com</a>
			</div>
			<div className={'flex gap-4'}>
				<a href={'https://www.linkedin.com/in/emma-lucas-0241b4155/'} target={'_blank'}>Linkedin</a>
				<a href={'https://github.com/emlucas'} target={'_blank'}>Github</a>
			</div>
		</section>
	)
}

export default Contact;