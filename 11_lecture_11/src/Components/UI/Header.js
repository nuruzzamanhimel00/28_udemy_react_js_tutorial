import React from 'react'
import SrtImg from '../../assets/meal.jpg'
import classes from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>RealMeal</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={SrtImg}  alt='The table is full of meals' />
            </div>
        </>
    );
}

export default Header;