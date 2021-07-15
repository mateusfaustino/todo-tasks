import styled from 'styled-components'
const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Container = (props) => {
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

export default Container