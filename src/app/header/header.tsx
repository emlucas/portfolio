import HeaderButton from "@/app/header/headerButton";

interface HeaderProps {
	width: string;
}

const Header = (props: HeaderProps) => {
	return (
		<header className={'flex w-full justify-center fixed top-0 pt-14 pb-4 bg-(--background)'}>
			<div className={'flex justify-end z-10 ' + props.width}>
				<nav className={'flex gap-5'}>
					<HeaderButton target={'home'}>Home</HeaderButton>
					<HeaderButton target={'about'}>About</HeaderButton>
					<HeaderButton target={'contact'}>Contact</HeaderButton>
				</nav>
			</div>
		</header>
	)
}

export default Header;