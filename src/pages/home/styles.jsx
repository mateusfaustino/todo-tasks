import styled from "styled-components"
import Spacing from "../../components/styleguide/atoms/spacing"
import { useSpacing } from "../../contexts/SpacingContext"
const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    margin-top: 48px;
    
`

const Container = (props)=>{
    const {spacing, Grid} = useSpacing()
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}
export default Container