import {ReactNode} from "react";

interface HeaderButtonProps {
	children: ReactNode;
	target: string;
	active?: boolean;
}

const HeaderButton = (props: HeaderButtonProps) => {
	return (
		<button>
			<a href={`#${props.target}`} id={`nav-button-${props.target}`}
				className={`tracking-wide ${props.active ? 'font-bold' : 'font-semibold'} py-2 px-4`}
			>
				{props.children}
			</a>
		</button>
	)
}

export default HeaderButton;