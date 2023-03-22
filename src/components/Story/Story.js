import './story.scss'


export default function Story() {

    return (
        <div className="story_main" id='story'>
            <div className='story_info'>
                <div className='story_descr'>
                    <h1 className='story_title title'>The story</h1>
                    <h2 className='story_subtitle subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id arcu vel maximus.</h2>
                    <p className='story_text info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus sed, dignissim interdum quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo nunc.
                        Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.</p>
                </div>
                <div className='story_img'>
                    <img src='./images/burgerstory.png' alt='big burger'></img>
                </div>

            </div>

        </div>
    )
}