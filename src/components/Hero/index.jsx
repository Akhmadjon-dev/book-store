import React, {useState} from 'react';
import heroBanner from '../../assets/img/Frame_71.png'
import { BiSearchAlt } from 'react-icons/bi';
import './Hero.css'
import '../../App.css'

function Hero(props) {

    const [inputValue, setInputValue] = useState("")

    const changeHandler = (e) => {
        const { value } = e.target;
        setInputValue(value)
        console.log(inputValue)
    }  

    const submitHandler = (e) => {
        e.preventDefault();
        props.searchHandler(inputValue)
    }

  return (
    <div className="Hero">
        <div className="container">
            <img src={ heroBanner } alt='Book store'/>
            <div className="container__search">
                <form className="search__form" onSubmit={ submitHandler }>
                    <h3>Search</h3>
                    <div className="search__bar">
                        <input type="search" className="hero-search" onChange={ changeHandler }/>
                        <button>Search <BiSearchAlt /></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Hero;
