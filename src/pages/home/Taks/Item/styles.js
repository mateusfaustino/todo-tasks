import styled from 'styled-components'
import {palette} from '../../../../components/styleguide/atoms/colors'
import shadow from '../../../../components/styleguide/atoms/shadows'
import typography from '../../../../components/styleguide/atoms/typography'
const StyledContainer = styled.li`
    display:flex;
    justify-content:space-between;
    margin-bottom:8px;
    padding:8px;
    width:100%;
    box-shadow:${shadow.shadow_4dp};
    ${typography.paragraphBold}

    .text{
        display:flex;
        align-items:center;
    }
    svg{
        height:24px;
        width:auto;
        fill:${palette.primary.dark};
        margin-right:8px;
    }

    /*transform: translateX(${props=>props.complete?'-10vw':'0'});*/
    background:${props=>props.complete?palette.sucess.light:palette.background.light};  
    transition:1s;
`
const Container = (props)=>{
    return(
        <StyledContainer complete={props.complete}>
            {props.children}
        </StyledContainer>
    )
}
export default Container