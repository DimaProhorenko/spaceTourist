import { Swiper, SwiperSlide } from 'swiper/react';

import { Section, Container, Flex, Title } from '../components';
import bgImage from '../assets/destination/background-destination-desktop.jpg';
import crewData from '../fixtures/crew';

function Crew() {
	return (
		<Section bgImage={bgImage}>
			<Container>
				<Title>02 Meet Your Crew</Title>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{crewData.map((item) => (
						<SwiperSlide key={item.id}>
							<Flex className="border border-red-500">
								<Flex.Item className="self-center">
									<h3 className="text-base md:text-2xl lg:text-[32px] uppercase ">
										{item.position}
									</h3>
									<h2 className="text-2xl md:text-[40px] lg:text-[56px] md:leading-normal lg:mb-4">
										{item.name}
									</h2>
									<p>{item.bio}</p>
								</Flex.Item>
								<Flex.Item className="min-h-[350px]">
									<img
										className="max-w-[300px] border border-red-500 mx-auto"
										src={item.cover}
										alt={item.name}
									/>
								</Flex.Item>
							</Flex>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Section>
	);
}
export default Crew;
