
import BurgerCard from "../BurgerCard/BurgerCard";
import { menu } from "../../data/data";
import ButtonOrder from "../ButtonOrder/ButtonOrder";
import('./burger.scss')


export default function Burger({ openOrder, openModal }) {



    const menuBurger = menu.map((item) => (
        <BurgerCard key={item.id}
            id={item.id}
            url={item.imgurl}
            title={item.title}
            open={openModal}
        />

    ))
    return (
        <div className="burger_main" id="burgers">
            <h2 className="burger_title title" >Burgers</h2>
            <div className="burger_menu">
                {menuBurger}

            </div>
            <ButtonOrder className="burger_button" openOrder={openOrder} />


        </div>



    )
}