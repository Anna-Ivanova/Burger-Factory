import './footer.scss'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer_wrapper">
                <div className='footer_logo'>
                    <img src='./images/logo.png' alt="Logo Burger Factory" />
                </div>
                <div className="footer_adress">
                    <p><b>Burger Factory</b> Pl. de la Riponne 10 1005 Lausanne 021 800 00 00</p>
                </div>

            </div>
        </footer>
    )

}