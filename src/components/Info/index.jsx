import './styles.css';

export default function Info() {
    return (
        <section className="Info">
            <img className="Info__image" src="../images/illustration-stay-productive.png" alt="stay productive" />
            <div className="Info__content">
                <h1 className="Info__title">Stay productive,<br /> wherever you are</h1>
                <p className="Info__description">
                    Never let location be an issue when accessing your files. Fylo has you<br /> covered for all of your file storage needs.
                </p>
                <p className="Info__description">
                    Securely share files and folders with friends, family and colleagues for live<br />  collaboration. No email attachments required.
                </p>
                <a className="Info__link" href="">See how Fylo works <img src="../icons/icon-arrow.svg" alt="arrow icon" /></a>
            </div>
        </section>

    )
}