import('./burgercard.scss')

export default function BurgerCard({ id, url, title, open, price, viewBasket }) {


    const handleClick = (e) => {
        let id = +e.target.id;
        open(id);
    }
    const addToBusket = (e) => {
        let id = +e.target.id;
        viewBasket(id)
    }
    return (
        <div className="menu_item">
            <h3 className='menu_title'>{title}</h3>
            <div className='menu_imgwrapper'>
                <img className='menu_img' src={url} alt={title} />
            </div>
            {open ? (<button className='menu_link' id={id} onClick={handleClick}>Details</button>) :
                (<><span className='menu_price'>{price} USD</span>
                    <button className='menu_buy' id={id} onClick={addToBusket}>Buy</button> </>)}
        </div>
    )
}