import { Section } from '../components';
import bgImage from '../assets/home/bg-desktop.jpg';

function Home() {
	return (
		<Section bgImage={bgImage}>
			<div className="container">
				<div className="flex items-center">
					<div className="basis-1/2">
						<h3 className="uppercase">So, You want to Travel to</h3>
						<h1 className="uppercase">Space</h1>
						<p>
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</p>
					</div>
					<div className="basis-1/2">
						<button>Explore</button>
					</div>
				</div>
			</div>
		</Section>
	);
}
export default Home;
