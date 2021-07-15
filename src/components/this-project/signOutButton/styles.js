import styled from 'styled-components'
import {palette} from '../../styleguide/atoms/colors'
const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    button{
        span{
            color:${palette.primary.onMainText};
        }
        border-color:${palette.primary.onMainText}!important;
    }
    @media screen and (max-width: 755px) {
        margin-top:32px;
    }
`
const Container = (props) => {
    return(
        <StyledContainer >
            {props.children}
        </StyledContainer>
    )
}

export default Container