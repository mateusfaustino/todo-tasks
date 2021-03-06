import styled from 'styled-components'
import border from '../../../components/styleguide/atoms/borders'
const StyledContainer = styled.ul`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    border-radius:${border['border0-0-4-4']};
    z-index:1;
`
const Container = (props) => {
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

export default Container