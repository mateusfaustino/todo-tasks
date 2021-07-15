import styled from "styled-components"
import Spacing from "../../components/styleguide/atoms/spacing"
import { useSpacing } from "../../contexts/SpacingContext"
import {palette} from '../../components/styleguide/atoms/colors'
import breakpoint from "../../components/styleguide/atoms/breakpoints"
const StyledContainer = styled.div`
    width:100%;
    margin:auto;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background: ${palette.background.main};
    width:100%;
    padding: 20vw ${props=>props.spacing.margin};

    form{
        width:100%;
    }
    .add{
        transform: rotate(${props=>props.newTaskModal?'-45deg':'0'});
        transition:1s;
        background:${props=>props.newTaskModal?palette.error.main:palette.primary.main};
        &:hover{
            background:${props=>props.newTaskModal?palette.error.dark:palette.primary.dark};
        }
        svg{
            width:100%;
            height:100%;

        }
    }
    @media (min-width: ${breakpoint.mobile}) {
        padding: 10vw ${props=>props.spacing.margin};
    }
    
    
`

const Container = (props)=>{
    const {spacing, Grid} = useSpacing()
    return(
        <StyledContainer newTaskModal={props.newTaskModal} spacing={spacing}>
            {props.children}
        </StyledContainer>
    )
}
export default Container