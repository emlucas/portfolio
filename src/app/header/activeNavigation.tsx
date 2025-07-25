'use client'

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useLayoutEffect, useRef, useState} from "react";

gsap.registerPlugin(useGSAP);

const ActiveNavigation = () => {
	const ref = useRef<any>(null)
	const [activeNavWidth, setActiveNavWidth] = useState(0);


	useLayoutEffect(() => {
		const width = ref.current.parentElement.clientWidth;
		setActiveNavWidth(width);
	}, []);

	useGSAP(() => {
	})

	return (
		<div className={`activeNav w-[${activeNavWidth}px] h-2`} ref={ref} aria-hidden></div>
	)
}

export default ActiveNavigation;