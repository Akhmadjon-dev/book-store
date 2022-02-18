import styled from "styled-components";
import color from "../../styles/colors"

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    .cards {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 40px;
        .card {
            width: 165px;
            background: linear-gradient(45deg, ${color.primary}, #212121 );
            border-radius: 0 0 15px 15px;
            .card__title {
                color: ${color.titleColor}
            }
            img {
                border-radius: 15px 15px 0 0;
            }
            p {
                text-align: center;
            }
            .card__author {
                margin-top: 4px;
                color: ${color.titleColor};
            }
            .card__author-dates {
                color: rgba(255, 255, 255, .6);
                margin-bottom: 10px
            }
            .card__media {
                display: flex;
                justify-content: space-around;
                padding: 0 10px;
            }
        }
        .card:hover {
            cursor: pointer;
        }

    } 
` 

export default Container;