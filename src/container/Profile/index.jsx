import React, {useState, useEffect} from 'react';
import client from "../../utils/axios";
import noPhoto from "../../assets/img/no-photo.jpg";
import Container from './style';

function Profile() {
    
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });

    
    
    const inputHandler = (e) => {
            const { name, value} = e.target;
            setProfile({ ...profile, [name]: value })
      }

    const submitHandler = (e) => {
          e.preventDefault();

      } 

    return <Container>
        <div className="profile__my-account">
            <div className="profile__img">
                <img src={noPhoto} />
            </div>
            <div className="profile__form">
                <form onSubmit={submitHandler} className="form">
                    <h3>My profile</h3>
                    <div className="form__group">
                        <Input
                            name="firstName"
                            label="First name"
                            type="text"
                            value={firstName}
                            placeholder="Enter first name"
                            onChange={inputHandler}
                        />
                        <Input
                            name="lastName"
                            label="Last name"
                            type="text"
                            value={lastName}
                            placeholder="Enter last name"
                            onChange={inputHandler}
                        />
                        <Button title="Save changes" type={"submit"} />
                </div>
                </form>
                
            </div> 
        </div>
        <div className="profile__security">

        </div>
    </Container>
}

export default Profile;