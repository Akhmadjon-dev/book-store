import styled from "styled-components";
import color from "../../styles/colors"

const Container = styled.div`
    margin-top: 60px;   
    .tabs__title{
        text-align: center;
        text-transform: uppercase;
        color: ${color.titleColor}
    }
    .tabs__cat{
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-top: 20px;
    }

`

export default Container