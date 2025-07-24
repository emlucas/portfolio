import HeaderButton from "@/app/header/headerButton";

const Header = () => {
	return (
		<header className={'flex w-full justify-end gap-5'}>
			<HeaderButton>Home</HeaderButton>
			<HeaderButton>About</HeaderButton>
			<HeaderButton>Contact</HeaderButton>
		</header>
	)
}

export default Header;