import React, {useState, useEffect} from 'react';
import client from "../../utils/axios";
import noPhoto from "../../assets/img/no-photo.jpg";
import Container from './style';

function Profile() {
    

    return <Container>
        <div className="profile__my-account">
            <div className="profile__img">
                <img src={noPhoto} />
            </div>
            <div className="profile__form">
                <h3>My profile</h3>
                <form>
                    
                </form>
            </div> 
        </div>
        <div className="profile__security">

        </div>
    </Container>
}

export default Profile;