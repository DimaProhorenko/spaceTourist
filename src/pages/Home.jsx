import { Section } from '../components';
import bgImage from '../assets/home/bg-desktop.jpg';

function Home() {
	return (
		<Section bgImage={bgImage}>
			<div className="container">
				<div className="max-w-[500px] mx-auto flex flex-col justify-center min-h-screen gap-4 lg:max-w-[900px] lg:flex-row lg:items-center lg:justify-start text-center lg:text-left">
					<div className="basis-1/2">
						<h3 className="uppercase text-base sm:text-lg md:text-3xl">
							So, You want to Travel to
						</h3>
						<h1 className="uppercase text-title-sm md:text-title-lg leading-tight">
							Space
						</h1>
						<p className="text-sm md:text-lg">
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</p>
					</div>
					<div className="basis-1/2">
						<a
							className="
							text-xl md:text-4xl text-black bg-white w-1/2 
							aspect-square rounded-full flex items-center justify-center mx-auto 
							relative 
							 before:content-[''] before:w-[150%] before:h-[150%] before:block before:bg-white before:opacity-10 before:absolute before:top-[50%] before:left-[50%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-transform
							 "
							href="#"
						>
							Explore
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
}
export default Home;
