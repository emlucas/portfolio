'use client'

import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {useRef} from "react";

gsap.registerPlugin(useGSAP)

const HeadlineImage = () => {
	const blobSvg = useRef<SVGSVGElement>(null);

	useGSAP(() => {
		const durations = [10, 12, 14];

		// Rotate sub-blob circle elements
		const blobs = blobSvg.current?.getElementsByClassName('blob') || [];
		for (let i = 0; i < blobs.length; i++) {
			const startingRotation = gsap.utils.random(0, 360);

			gsap.fromTo(blobs[i], {
					rotation: startingRotation,
					transformOrigin: '40% 50%',
				},
				{
					rotation: startingRotation + 360,
					transformOrigin: '40% 50%',
					repeat: -1,
					ease: 'none',
					duration: durations[i],
				}
			)
		}

		// Fade in the entire image blob component
		gsap.fromTo(blobSvg.current, {
				opacity: 0,
				y: -15,
			},
			{
				opacity: 1,
				y: 0,
				duration: 3,
				ease: 'elastic.out(1, 0.75)'
			}
		)

	}, [blobSvg.current]);

	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="headlineBlob" viewBox={'0 0 400 400'}
			  className={'w-full h-full'}
			  ref={blobSvg}>
			<defs>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
										result="goo"/>
					<feBlend in2="goo" in="SourceGraphic" result="mix"/>
				</filter>
			</defs>
			<mask id="mask">
				<g className="blobs">
					<circle id="mainBlob" cx="200" cy="200" r="140" transform="rotate(0) translate(0, 0) rotate(0)"/>
					<circle className="blob" cx="160" cy="150" r="100" transform="rotate(0) translate(0, 0) rotate(0)"/>
					<circle className="blob" cx="140" cy="250" r="80" transform="rotate(0) translate(0, 0) rotate(0)"/>
					<circle className="blob" cx="260" cy="130" r="80" transform="rotate(0) translate(0, 0) rotate(0)"/>
				</g>
			</mask>
			<rect x="0" y="0" mask="url(#mask)" fill="var(--color-red-300)" width="400" height="400"
					className={'blobBackground'}/>
			<image xlinkHref={'/portrait.png'} x="50" y="75" mask="url(#mask)" width="300" height="300"/>
		</svg>
	)
}

export default HeadlineImage;