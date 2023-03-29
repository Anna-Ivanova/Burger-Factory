import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react";
import ButtonOrder from "../ButtonOrder/ButtonOrder";
import './header.scss'
export default function HeaderApp({ openOrder }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false)

    return (

        <header className="app_header">
            <div className="app_wrapper">
                <div className='app_logo'>
                    <img src='./images/logo.png' alt="Logo Burger Factory" />
                </div>
                <nav className="app_menu">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li>
                            <Link to="ingridients" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                                INGREDIENT</Link>
                        </li>
                        <li><Link to="story" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                            STORY</Link>
                        </li>
                        <li><Link to="burgers" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                            BURGERS</Link>
                        </li>

                        <li><Link to="location" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                            LOCATION</Link>
                        </li>
                    </ul>
                </nav>
                <div className='app_hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={35} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={35} style={{ color: '#ffffff' }} />)}

                </div>
                <ButtonOrder openOrder={openOrder} />
            </div>
        </header>

    )
}