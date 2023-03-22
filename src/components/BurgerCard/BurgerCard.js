import('./burgercard.scss')

export default function BurgerCard({ url, title }) {


    return (
        <div className="menu_item">
            <h3 className='menu_title'>{title}</h3>
            <div className='menu_imgwrapper'>
                <img className='menu_img' src={url} alt={title} />
            </div>
            <a className='menu_link'>Details</a>
        </div>
    )
}