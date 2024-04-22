
import './styles.css';
import features from '../../data/features.json';

export default function Features() {
    return <>
    <section className="Features">
        {features.map(features => (
            <div>
                <img className="Features__image" src={features.image} alt={features.title} />
                <h1 className="Features__title">{features.title}</h1>
                <p className="Features__description">{features.description}</p>
            </div>
        ))}
        </section>
    </>
}