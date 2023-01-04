import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


function Header(props) {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDky9BYr9uLsOpUa6VuTISgmQpaGkWzVhkQ&usqp=CAU" alt="" />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'} className={s.login}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;