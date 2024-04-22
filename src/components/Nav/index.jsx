import './styles.css';

export default function Nav() {
    return (
        <nav className="Nav__container">
            <img className="Nav__logo" src="../icons/logo.svg" alt="logo" />
            <div className="Nav__links">
                <a className="Nav__link" href="">Features</a>
                <a className="Nav__link" href="">Team</a>
                <a className="Nav__link" href="">Sign In</a>
            </div>
        </nav>
    )
}