import styled from 'styled-components'
import  typography  from '../../../../components/styleguide/atoms/typography'
import { palette } from '../../../../components/styleguide/atoms/colors'
const StyledContainer = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    ${typography.header2}
    color: ${palette.primary.dark};
    width:auto;
    animation: apear 3s ease 4s both ;
    @keyframes apear{
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
`
const Container = (props) => {
    return ( 
        <StyledContainer > {
            props.children
        } 
        </StyledContainer>
    )
}
export default Container