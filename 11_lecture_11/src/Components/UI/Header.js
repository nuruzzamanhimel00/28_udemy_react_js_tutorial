import React from 'react'
import SrtImg from '../../assets/meal.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton.js'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>RealMeal</h1>
                <HeaderCartButton onClickBtn={props.onCartClick} />
            </header>
            <div className={classes['main-image']}>
                <img src={SrtImg}  alt='The table is full of meals' />
            </div>
        </>
    );
}

export default Header;