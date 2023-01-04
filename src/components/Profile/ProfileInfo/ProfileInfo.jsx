import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div>
                    <p>Full name: {props.profile.fullName}</p>
                    <p>{props.profile.aboutMe}</p>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;