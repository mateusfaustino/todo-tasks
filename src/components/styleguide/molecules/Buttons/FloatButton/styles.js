import styled from 'styled-components'
import {useSpacing} from '../../../../../contexts/SpacingContext'
const StyledContainer = styled.div`
    .add{
        position:fixed;
        z-index:2;
        right:${props=>props.margin};
        bottom:32px;
    }
`
const Container = (props) => {
    const {margin}= useSpacing()
    return(
        <StyledContainer margin={margin}>
            {props.children}
        </StyledContainer>
    )
}

export default Container