const HeadlineImage = () => {
	// TODO: replace placeholder with actual image
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="headlineBlob">
			<defs>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="15"/>
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
					<feBlend in2="goo" in="SourceGraphic" result="mix"/>
				</filter>
			</defs>
			<mask id="mask">
				<g className="blobs">
					<circle className="blob" cx="200" cy="200" r="140" transform="rotate(0) translate(0, 0) rotate(0)"/>
					<circle className="blob" cx="150" cy="150" r="90" transform="rotate(0) translate(0, 0) rotate(0)"/>
					<circle className="blob" cx="270" cy="250" r="70" transform="rotate(0) translate(0, 0) rotate(0)"/>
					<circle className="blob" cx="230" cy="120" r="80" transform="rotate(0) translate(0, 0) rotate(0)"/>
				</g>
			</mask>
			<rect x="0" y="0" mask="url(#mask)" fill="var(--color-neutral-500)" width="400" height="400" />
			<image xlinkHref={'/portrait.png'} x="50" y="50" mask="url(#mask)" width="300" height="300" />
		</svg>
)
}

export default HeadlineImage;