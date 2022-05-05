import React, { useState } from 'react';
import './Carousel.css';

import { images } from '../helpers/CarouselData';

function Carousel() {
	const [currentImage, setCurrentImage] = useState(0);
	return (
		<div className='carousel'>
			<div
				className='carouselInner'
				style={{ backgroundImage: `url(${images[currentImage].img})` }}
			>
				<div className='left'></div>
				<div className='center'></div>
				<div className='right'></div>
			</div>
		</div>
	);
}

export default Carousel;
