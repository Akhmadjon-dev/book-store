import React, {useState, useEffect} from 'react';
import client from "../../utils/axios";
import noPhoto from "../../assets/img/no-photo.jpg";
import Container from './style';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Swal from "sweetalert2";


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

    
    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
            const res = await client.patch('/users', {...profile, image: "img"})
            if(res.status = 200) {
                console.log(res);
                localStorage.setItem('user', JSON.stringify(res.data.payload))
                //localStorage.setItem('token', res)
                
            }
        }
        catch (err) {
            console.log(err)
        }
    } 

    const getUser = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        const { firstName, lastName, phone, email } = user
        setProfile( 
            {
                firstName,
                lastName,
                phone,
                email,
            }
         )
    }

    useEffect(() => {
        getUser()
    }, [])

    const { firstName, lastName, phone, email } = profile;
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
                        <Input
                            name="phone"
                            label="Phone"
                            type="text"
                            value={phone}
                            placeholder="Enter phone"
                            onChange={inputHandler}
                        />
                        <Input
                            name="email"
                            label="Email"
                            type="text"
                            value={email}
                            placeholder="Enter email"
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