import sty from 'styled-components';
import colors from '../../styles/colors';
;


const Container = sty.button`
    // width: 100%;
    padding: 10px 40px;
    height: ${props => props.height ? props.height : '46px'};
    border-radius: ${props => props.radius ? props.radius : '99px'};
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    display: inline-flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: ${colors.white};
    border: 1px solid white;
    background-color: ${props => props.color ? props.color : colors.primary};
    cursor: pointer;
    margin: 30px 0;
`

export default Container;