import HeaderButton from "@/app/header/headerButton";

interface HeaderProps {
	width: string;
}

const Header = (props: HeaderProps) => {
	return (
		<header className={'flex w-full justify-center sticky top-0 pt-14 pb-4 bg-white'}>
			<div className={'flex justify-end z-10 ' + props.width}>
				<nav className={'flex gap-5'}>
					<HeaderButton>Home</HeaderButton>
					<HeaderButton>About</HeaderButton>
					<HeaderButton>Contact</HeaderButton>
				</nav>
			</div>
		</header>
	)
}

export default Header;