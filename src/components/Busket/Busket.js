import './busket.scss'

export default function Basket({ id, url, title, price, quantity, isRemoveItem, handleDecrease, handleEncrease }) {

    const handleRemove = (e) => {
        let idToRemove = +e.target.id;
        isRemoveItem(idToRemove);
    }


    return (

        <div className="basket_wrapper">
            <div className="basket_item">
                <div className="basket_card">
                    <div className='basket_imgwrapper'>
                        <img className='basket_img' src={url} alt={title} />
                    </div>
                    <h3 className='basket_title'>{title}</h3>
                    <span>{price} USD</span>
                </div>
                <div className="basket_buttons">
                    <button id={id} onClick={(e) => handleDecrease(+e.target.id)}>-</button>
                    <span>{quantity}</span>
                    <button id={id} onClick={(e) => handleEncrease(+e.target.id)}> +</button>
                </div>
                <div className="basket_removeblock">
                    <button id={id} className="basket_remove" onClick={handleRemove}>Remove</button>
                </div>
            </div>

        </div >

    )


}