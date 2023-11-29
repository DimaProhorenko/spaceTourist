import { useParams } from 'react-router-dom';

import { Section, Content, Title } from '../components';
import bgImage from '../assets/destination/background-destination-desktop.jpg';
import destinations from '../fixtures/destinations';

function Destination() {
	const { name } = useParams();
	const [item] = destinations.filter((el) => el.name.toLowerCase() === name);
	console.log(item);
	return (
		<Section bgImage={bgImage}>
			<div className="container">
				<Content>
					<Content.Item>
						<Title>01 Pick Your Destination</Title>
						<img
							src={item.cover}
							alt={item.name}
							className="max-w-[300px] mx-auto block"
						/>
					</Content.Item>
				</Content>
			</div>
		</Section>
	);
}
export default Destination;
