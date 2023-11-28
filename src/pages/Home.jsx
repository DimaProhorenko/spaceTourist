import { Section, MainButton, Content } from '../components';
import bgImage from '../assets/home/bg-desktop.jpg';

function Home() {
	return (
		<Section bgImage={bgImage}>
			<div className="container">
				<Content>
					<Content.Item>
						<Content.Subtitle>
							So, You want to Travel to
						</Content.Subtitle>
						<Content.Title>Space</Content.Title>
						<Content.Lead>
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</Content.Lead>
					</Content.Item>
					<Content.Item>
						<MainButton href="/">Explore</MainButton>
					</Content.Item>
				</Content>
			</div>
		</Section>
	);
}
export default Home;
