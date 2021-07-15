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
    background:${palette.background.light};
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
`
const Container = (props)=>{
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}
export default Container