import {ReactNode} from "react";

interface HeaderButtonProps {
	children: ReactNode;
	active?: boolean;
}

const HeaderButton = (props: HeaderButtonProps) => {
	return (
		<button className={`tracking-wide ${props.active ? 'font-bold' : 'font-semibold'} py-2 px-4`}>
			{props.children}
		</button>
	)
}

export default HeaderButton;