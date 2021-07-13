import styled from 'styled-components'
const StyledContainer = styled.div`
    
`
const Container = (props)=>{
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}
export default Container