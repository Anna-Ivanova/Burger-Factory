

export default function ButtonOrder({ openOrder, className }) {

    return (
        <button type="button" className={`btnOrder ${className}`} onClick={openOrder}>Order now</button>
    )
}