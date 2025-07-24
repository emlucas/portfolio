import Headline from "@/app/homepage/headline";
import Header from "@/app/header"
import './app.scss'

export default function Home() {
	return (
		<div className={'flex flex-col min-w-screen min-h-screen px-96'}>
			<Header/>
			<Headline/>
		</div>
	);
}
