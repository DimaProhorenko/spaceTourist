import { Section, Content, Title } from '../components';
import bgImage from '../assets/destination/background-destination-desktop.jpg';

function Destination() {
	return (
		<Section bgImage={bgImage}>
			<div className="container">
				<Content>
					<Content.Item>
						<Title>01 Pick Your Destination</Title>
					</Content.Item>
				</Content>
			</div>
		</Section>
	);
}
export default Destination;
