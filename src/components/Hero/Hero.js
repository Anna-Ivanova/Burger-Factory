import { Link } from "react-scroll";
import './hero.scss'


export default function Hero() {


    return (
        <div className="hero_main">
            <div className='hero_info'>
                <div className='hero_descr'>
                    <h1 className='hero_title'>Burger Factory</h1>
                    <h2 className='hero_subtitle'>Your dreamed burger close to your locations!</h2>
                    <Link className='hero_btn' to="ingridients" spy={true} smooth={true} offset={10} duration={500}>
                        Discover the ingredients</Link>

                </div>
                <div className='hero_img'>
                    <img src='./images/hero-burger.png' alt='big burger'></img>
                </div>

            </div>

        </div>
    )
}