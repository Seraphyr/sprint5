import './styles.css';

export default function Footer() {
    return (
        <section className="Footer">

            <div className="Footer__location">
                <img className="Footer__logo" src="../icons/logo.svg" alt="logo" />
                <div className='Footer__content'>
                    <img className="Footer__side-icon" src="../icons/icon-location.svg" alt="location icon" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur libero voluptatibus recusandae explicabo totam voluptates ipsum, veritatis fuga ipsa nemo blanditiis nihil vero corrupti porro vel vitae possimus ab qui!</p>
                </div>
            </div>
            <div className='Footer__contact'>
            <div className="Footer__content">
                <img className="Footer__side-icon" src="../icons/icon-phone.svg" alt="phone icon" />
                <p>+1-543-123-4567</p>
            </div>
            <div className="Footer__content">
                <img className="Footer__side-icon" src="../icons/icon-email.svg" alt="email icon" />
                <p>example@fylo.com</p>
            </div>
            </div>
            <div className="Footer__links">
                <ul>
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>

                <ul>
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className='Footer__icons'>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </section>
    )
}