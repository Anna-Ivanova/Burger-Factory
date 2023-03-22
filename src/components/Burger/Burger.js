
import BurgerCard from "../BurgerCard/BurgerCard";
import { menu } from "../../data/data";
import('./burger.scss')


export default function Burger() {

    const menuBurger = menu.map((item) => (
        <BurgerCard key={item.id}
            url={item.imgurl}
            title={item.title} />

    ))
    return (
        <div className="burger_main" id="burgers">
            <h2 className="burger_title title" >Burgers</h2>
            <div className="burger_menu">
                {menuBurger}

            </div>
            <button type="button" className='burger_btn btnOrder'>Order now</button>
        </div>


    )
}