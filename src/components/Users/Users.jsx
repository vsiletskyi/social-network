import React from "react";
import style from "./Users.module.css";
import userPhoto from '../../assets/images/user.png';
import { NavLink, Redirect } from 'react-router-dom';
import * as axios from 'axios'
import { usersApi } from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => <span className={props.currentPage === p && style.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>)}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small === null ? userPhoto : u.photos.small} alt="" className={style.usersPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed

                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                        props.unfollow(u.id)

                                    }}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                        props.follow(u.id)

                                    }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                </div>
            )
            } </div>
    )
}

export default Users;