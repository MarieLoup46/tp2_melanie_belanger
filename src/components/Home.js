import Header from './Header'
import converse from '../assets/converse.webp'
import drmartens from '../assets/drmartens.webp'
import reebok from '../assets/reebok.webp'

const Home = () => {

    return (
        <div className="container">
            <Header/>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit nisi numquam inventore enim reprehenderit delectus labore, quia architecto corrupti, illo, laborum dolorum adipisci provident aspernatur porro voluptatibus laboriosam? Nobis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat, voluptatibus voluptas blanditiis dolorum vel, repudiandae, ipsum accusantium doloremque amet perspiciatis quod voluptatem reiciendis. Esse est voluptates quas id porro.
            </p>
            <p>
                <img className='image-300' src={drmartens} alt="Botte Dr. Martens" />
                <img className='image-300' src={converse} alt="Chaussure Converse" />
                <img className='image-300' src={reebok} alt="Basket Reebok" />
            </p>
        </div>
    )
}
export default Home