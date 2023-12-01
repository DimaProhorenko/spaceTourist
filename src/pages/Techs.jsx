import { Section, Container, Title, Tabs, Flex } from '../components';
import bgImage from '../assets/techs/background-technology-desktop.jpg';
import techData from '../fixtures/tech';

function Techs() {
	return (
		<Section bgImage={bgImage}>
			<Container>
				<Title>03 Space Launch 101</Title>
				<Tabs>
					<Flex>
						<Flex.Item basis="1/3">
							<Tabs.List className="flex justify-center lg:flex-col lg:gap-4">
								{techData.map((item, idx) => (
									<Tabs.Tab key={item.id} index={idx}>
										{idx < 10 ? 0 : ''}
										{idx + 1}
									</Tabs.Tab>
								))}
							</Tabs.List>
						</Flex.Item>
						<Flex.Item basis="2/3">
							{techData.map((item, idx) => (
								<Tabs.Panel
									key={item.id}
									index={idx}
									className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-2"
								>
									<div className="px-4 lg:basis-4/6">
										<h4 className="text-sm md:text-base uppercase">
											{item.subtitle}
										</h4>
										<h2 className="text-2xl md:text-[40px] lg:text-[56px] uppercase leading-relaxed">
											{item.title}
										</h2>
										<p className="text-sm md:text-base">
											{item.desc}
										</p>
									</div>
									<div className="lg:basis-2/6">
										<img
											src={item.cover}
											alt={item.title}
										/>
									</div>
								</Tabs.Panel>
							))}
						</Flex.Item>
					</Flex>
				</Tabs>
			</Container>
		</Section>
	);
}
export default Techs;
