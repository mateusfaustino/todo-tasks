import styled, { keyframes} from 'styled-components'
import {palette} from '../colors'
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
height: 100vh;

`
const Spinner = styled.div`
border: 12px solid ${palette.background.main};
border-top: 12px solid ${palette.primary.main};
border-radius: 50%;
width: 80px;
height: 80px;
animation: ${spin} 0.5s linear infinite;
`
const Container = (props) => {
    return(
        <StyledContainer>
            <Spinner/>
        </StyledContainer>
    )
}

export default Container