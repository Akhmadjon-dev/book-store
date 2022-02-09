import sty from 'styled-components';
import colors from '../../../styles/colors';





const container = sty.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    .container__img{
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #C9AC8C;
        img{
            width: 300px;
            height: 482px;
            object-fit: contain;
            background: ${colors.white};
        }
        .book_title {
            margin-top: 20px;
        }
        
    }
    .form{
        width: 50%;
        height: auto;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${colors.primary};
        padding: 0 90px 0 90px;
        .form__title{
            font-weight: 900;
            font-size: 36px;
            line-height: 51px;
            color: ${colors.white};
            margin: 15px 0;
        }
        .form__subtitle{
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            color: ${colors.black};
            margin-top: 10px; 
            margin-bottom: 21px;
        }
        .form__group{
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 15px;
            & > *{
                max-width: 430px;
            }
        }
        label {
            color: ${colors.white};
        }
        .form__subtitle{
            color: ${colors.white}
        }
    }
`



export default container;