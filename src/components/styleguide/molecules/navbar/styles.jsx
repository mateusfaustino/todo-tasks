import styled from "styled-components"
import { useSpacing } from "../../../../contexts/SpacingContext"
import { palette } from "../../atoms/colors"
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:4px ${props=>props.spacing.margin};
    right:0;
    transition:1s;
    background:${props=>props.isActive? palette.primary.dark :palette.primary.main};
    z-index:10000;
    position:fixed;
    top:0;
    width:100%;
    transform: translateY(${props=>props.isDisplayed?`0`:'-40px'});

`

const Nav = (props)=>{
    const { spacing } = useSpacing()
    return(
        <StyledContainer isActive={props.isActive} isDisplayed={props.isDisplayed} spacing={spacing}>
            {props.children}
        </StyledContainer>
    )
}
export default Nav