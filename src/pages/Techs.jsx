import { Section, Container, Title, Tabs } from '../components';
import bgImage from '../assets/techs/background-technology-desktop.jpg';

function Techs() {
	return (
		<Section bgImage={bgImage}>
			<Container>
				<Title>03 Space Launch 101</Title>
				<Tabs>
					<Tabs.List>
						<Tabs.Tab index={0}>01</Tabs.Tab>
						<Tabs.Tab index={1}>02</Tabs.Tab>
					</Tabs.List>
					<Tabs.Panel index={0}>
						<p>Hello</p>
					</Tabs.Panel>
					<Tabs.Panel index={1}>
						<p>World</p>
					</Tabs.Panel>
				</Tabs>
			</Container>
		</Section>
	);
}
export default Techs;
