import styled from 'styled-components'
import color from '../../styles/colors'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 20px;
    label {
        color: #fff;
    }
    img {
        width: 200px;
        border-radius: 50%;
    }
    .profile__my-account {
        display: flex;
        justify-content: center;
        .profile__img {
            width: 35%;
        }
        .profile__form {
            width: 55%;
        }
    }

`

export default Container;