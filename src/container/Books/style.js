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
            .card__title {
                color: ${color.titleColor}
            }
            img {
                border-radius: 15px;
            }
        }
    } 
` 

export default Container;