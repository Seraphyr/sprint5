import './styles.css';
import Button from '../Button';
import React, { useState } from 'react';


export default function GetEarly() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("")
    const evento = (e) => setEmail(e.target.value)
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log(validateEmail (email));
        if (validateEmail(email) == true) {
            setError("Email válido")
        } else {
            setError("Ingrese un email válido aquí")
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <section className='GetEarly'>
            <div className='GetEarly__container'>
                <h1 className='GetEarly__title'>Get early access today</h1>
                <p className='GetEarly__description'>it only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you.</p>
                <form onSubmit={handleOnSubmit} >
                    <input className='GetEarly__input' onChange={evento} type="text" placeholder='email@example.com'/>
                    <Button text='Get Started For Free'/>
                    <span style={{color: 'red'}}>{error}</span>
                </form>
            </div>
        </section>
    )
}

