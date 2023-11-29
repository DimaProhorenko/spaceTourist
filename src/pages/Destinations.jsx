import { useParams } from 'react-router-dom';

import {
	Destination,
	Section,
	Content,
	Title,
	NavigationLink,
} from '../components';
import bgImage from '../assets/destination/background-destination-desktop.jpg';
import destinations from '../fixtures/destinations';
import { DESTINATION } from '../constants/routes';

function Destinations() {
	const { name } = useParams();
	const [item] = destinations.filter((el) => el.name.toLowerCase() === name);
	console.log(item);
	return (
		<Section bgImage={bgImage}>
			<Destination>
				<Content>
					<Content.Item>
						<Title>01 Pick Your Destination</Title>
						<Destination.Cover src={item.cover} alt={item.name} />
					</Content.Item>
					<Content.Item>
						<Destination.Nav>
							<Destination.List items={destinations} />
						</Destination.Nav>

						<Destination.Title>{item.name}</Destination.Title>
						<Destination.Description>
							{item.desc}
						</Destination.Description>
						<div className="h-px my-4 bg-slate-100 opacity-20"></div>
						<Destination.Info>
							<Destination.InfoItem>
								<Destination.InfoName>
									AVG. Distance
								</Destination.InfoName>
								<Destination.InfoValue>
									{item.avgDistance}
								</Destination.InfoValue>
							</Destination.InfoItem>
							<Destination.InfoItem>
								<Destination.InfoName>
									EST. Travel Time
								</Destination.InfoName>
								<Destination.InfoValue>
									{item.travelTime}
								</Destination.InfoValue>
							</Destination.InfoItem>
						</Destination.Info>
					</Content.Item>
				</Content>
			</Destination>
		</Section>
	);
}
export default Destinations;
