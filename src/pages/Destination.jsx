import { useParams } from 'react-router-dom';

import { Section, Content, Title, NavigationLink } from '../components';
import bgImage from '../assets/destination/background-destination-desktop.jpg';
import destinations from '../fixtures/destinations';
import { DESTINATION } from '../constants/routes';

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
					<Content.Item>
						<nav>
							<ul className="flex gap-2 justify-center lg:justify-start">
								{destinations.map((item) => (
									<li key={item.id}>
										<NavigationLink
											to={`/${DESTINATION}/${item.name}`}
										>
											{item.name.toUpperCase()}
										</NavigationLink>
									</li>
								))}
							</ul>
						</nav>
						<h1 className="text-[56px] md:text-[80px] lg:text-[100px] uppercase">
							{item.name}
						</h1>
						<p className="">{item.desc}</p>
						<div className="h-px my-4 bg-slate-100 opacity-20"></div>
						<div className="flex flex-col gap-4 md:flex-row md:justify-between">
							<div>
								<h3 className="uppercase">AVG. Distance</h3>
								<h2 className="text-3xl">{item.avgDistance}</h2>
							</div>
							<div>
								<h3 className="uppercase">EST. Travel Time</h3>
								<h2 className="text-3xl">{item.travelTime}</h2>
							</div>
						</div>
					</Content.Item>
				</Content>
			</div>
		</Section>
	);
}
export default Destination;
