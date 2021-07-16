import styled from 'styled-components'
import { palette } from '../../colors'
const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:32px;
    height:32px;
    svg{
        #boder{
            path{
                fill:${palette.primary.dark};
            }
        }
        #background{
            path{
                fill:${props=>props.checked? palette.primary.dark : palette.primary.onDarkText};
            }
        }
        #checked{
            path{
                fill:#fff;
            }
        }
    }
    :hover{
        cursor:pointer;
    }
`
const Container = (props) => {
    return(
        <StyledContainer checked={props.checked}>
            {props.children}
        </StyledContainer>
    )
}

export default Container