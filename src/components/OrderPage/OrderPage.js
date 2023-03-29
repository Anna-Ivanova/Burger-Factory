import { useState, useEffect } from "react";
import BurgerCard from "../BurgerCard/BurgerCard";
import Basket from "../Busket/Busket";
import OrderForm from "../OrderForm/OrderForm";
import './orderPage.scss'


export default function OrderPage({ data }) {

    const [showBasket, setShowBasket] = useState(false);
    const [basketContent, setShowBasketContent] = useState([]);
    const [cost, setCost] = useState(0);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [orders, setOrders] = useState([]);

    const viewBasket = (id) => {
        let isPresent = false;
        for (let item of basketContent) {

            if (item.id === id) {
                isPresent = true;
                item.quantity += 1;
            }
        }

        if (isPresent) {
            setShowBasketContent([...basketContent]);
            return;
        }
        let burger = data.filter((item) => item.id === id)[0];
        burger.quantity = 1;
        setShowBasketContent([...basketContent, burger]);
        console.log(basketContent);
        setShowBasket(true);
    }
    const isRemoveItem = (id) => {
        let removeItem = basketContent.filter((item) => item.id !== id);
        setShowBasketContent(removeItem);
        if (removeItem.length === 0) {
            setShowBasket(false);
        }

    }
    const handleDecrease = (id) => {
        const updatedBasket = basketContent.map(item => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    item.quantity = item.quantity - 1;
                }
            }
            return item;
        });
        setShowBasketContent(updatedBasket);
    }
    const handleEncrease = (id) => {
        const updatedBasket = basketContent.map(item => {
            if (item.id === id) {
                item.quantity = item.quantity + 1;
            }
            return item;
        });
        setShowBasketContent(updatedBasket);

    }
    useEffect(() => {
        const totalCost = basketContent.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        setCost(totalCost);
    }, [basketContent]);
    const handleOrder = () => {
        setShowOrderForm(true);
    }
    const onCancelForm = () => {
        setShowOrderForm(false);
    }
    const onSaveForm = (order) => {
        let updatedOrder = [...orders, order];
        updatedOrder = { ...updatedOrder, burg: [...basketContent] };
        setOrders(updatedOrder);
        localStorage.setItem('orders', JSON.stringify(updatedOrder));
    }


    return (
        <div className="order_main">
            {!!showBasket && <div className="order_basket">
                <h1 className="order_title">Cart</h1>
                {basketContent.map((item) => (
                    <Basket key={item.id}
                        id={item.id}
                        url={item.imgurl}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        isRemoveItem={isRemoveItem}
                        handleDecrease={handleDecrease}
                        handleEncrease={handleEncrease}
                    />
                ))}
                < div className="order_totalBlock">
                    <p className="order_total">Total: {cost} USD</p>
                    <button className="order_totalbtn" onClick={handleOrder}>Order</button>
                </div>

            </div>}
            {!!showOrderForm && <OrderForm onCancel={onCancelForm} onSave={onSaveForm} />}
            <div className="order_menu">
                {data.map((item) => (
                    <BurgerCard key={item.id}
                        id={item.id}
                        url={item.imgurl}
                        title={item.title}
                        price={item.price}
                        viewBasket={viewBasket}
                    />
                ))}
            </div>


        </div>
    )
}