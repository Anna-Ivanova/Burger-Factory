import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from '../SliderCard/SliderCard';
import { productsData, responsive } from '../../data/data.js'

export default function Slider() {

    const product = productsData.map((item) => (
        <SliderCard
            key={item.id}
            url={item.imgurl}
            name={item.name}
        />
    ));

    return (

        <Carousel responsive={responsive}
            itemClass="carousel-item-padding-52-px"
            infinite={true} centerMode={true}>

            {product}
        </Carousel>

    )
}