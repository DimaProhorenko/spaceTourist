import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/pagination';

import { Section, Container, Flex, Title } from '../components';
import bgImage from '../assets/destination/background-destination-desktop.jpg';
import crewData from '../fixtures/crew';

function Crew() {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className} inline-block w-3 h-3 rounded-full bg-white"></span>`;
		},
	};
	return (
		<Section bgImage={bgImage}>
			<Container>
				<Title>02 Meet Your Crew</Title>
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={pagination}
					grabCursor={true}
					autoplay={{
						delay: 5500,
					}}
					loop={true}
				>
					{crewData.map((item) => (
						<SwiperSlide
							key={item.id}
							style={{
								boxSizing: 'border-box',
								height: '100%',
							}}
						>
							<Flex className="">
								<Flex.Item className="self-center">
									<h3 className="text-base md:text-2xl lg:text-[32px] uppercase ">
										{item.position}
									</h3>
									<h2 className="text-2xl md:text-[40px] lg:text-[56px] md:leading-normal lg:mb-4">
										{item.name}
									</h2>
									<p>{item.bio}</p>
								</Flex.Item>
								<Flex.Item className="lg:self-end">
									<img
										className="h-[350px] md:h-[450px] aspect-[3/4] mx-auto"
										src={item.cover}
										alt={item.name}
									/>
								</Flex.Item>
							</Flex>
						</SwiperSlide>
					))}
					<div className="absolute bottom-1/6 left-0">
						<button className="">Prev</button>
						<button className="">Next</button>
					</div>
				</Swiper>
			</Container>
		</Section>
	);
}
export default Crew;
