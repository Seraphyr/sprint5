import './styles.css';
import Button from '../Button'

export default function Hero() {
    return (
        <section className="Hero">
            <div className="Hero__content">
                <img className="Hero__image" src="../images/illustration-intro.png" alt="illustration" />
                <h1 className="Hero__title">
                    All your files in one secure location,<br>
                    </br>accessible anywhere.
                </h1>
                <p className="Hero__description">
                    Fylo stores all your most important files in one secure location. <br>
                    </br>Access them wherever
                    you need, share and collaborate with<br>
                    </br> friends, family, and co-workers.
                </p>
                <Button text="Get Started" />
                <img className="Img__background" src="../icons/bg-curvy-desktop.svg" alt="Background" />
            </div>

        </section>
    )
}