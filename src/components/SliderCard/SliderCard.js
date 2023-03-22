import './sliderCard.scss'

export default function SliderCard({ url, name }) {

    return (
        <div className="slidercard">
            <div>
                <img className='slidercard_img' src={url} alt={name} />
            </div>
            <h3>{name}</h3>

        </div>
    )
}