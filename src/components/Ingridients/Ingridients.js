import Slider from "../Slider/Slider";
import './ingridients.scss'



export default function Ingridients() {

    return (
        <div className="ingridients_main" id='ingridients'>
            <h2 className="ingridients_title title">Ingredients</h2>
            <h3 className="ingridients_subtitle subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id arcu vel maximus.   </h3>
            <Slider />
            <p className="ingridients_info info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus sed, dignissim interdum quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor. </p>
        </div>

    )
}