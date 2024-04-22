import './styles.css';
import testimonials from '../../data/testimonials.json';

export default function Testimonials() {
    return <>
        <section className="Testimonials">
            <div className='Testimonials__container'>
                <img className="Testimonials__quotation" src="../images/bg-quotes.png" alt="quotation icon" />

                {testimonials.map(testimonials => (
                    <div>
                        <div className="Testimonial">
                            <p className="Testimonial__quote">{testimonials.quote}</p>
                            <img className='Testimonial__image' src={testimonials.image} alt={testimonials.title} />
                            <h3 className="Testimonial__name">{testimonials.name}</h3>
                            <h4 className="Testimonial__title">{testimonials.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
}