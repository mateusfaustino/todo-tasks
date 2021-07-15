import styled from 'styled-components'
import Home from '../Home'
import { useSpacing } from '../../contexts/SpacingContext'
import shadow from '../../components/styleguide/atoms/shadows'
import { palette } from '../../components/styleguide/atoms/colors'
const StyledContainer = styled.div`
    z-index:${props=>props.loginModal?'4':'0'};
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:32px ${props=>props.margin};
    position:fixed;
    top:40px;
    background:rgba(100%,100%,100%,${props=>props.loginModal?'100%':'0'});
    width:100vw;
    height:100vh;
    display:flex;
    transition:1s ease;
    
`
    const Modal = styled.form`
    background:${palette.background.light};
    margin:0 ${props=>props.margin};
    padding:16px;
    box-shadow:${shadow.shadow_4dp};
    display:flex;
    flex-direction:column;

    
    transform: translateY(${props=>props.loginModal?'0':'-100vh'});
    transition:0.5s;
`
const Container = (props) => {
    const {margin} = useSpacing()
    return(
        <>
            <StyledContainer loginModal={props.loginModal} margin={margin}>
                <Modal loginModal={props.loginModal} margin={margin}>
                    {props.children}
                </Modal>
            </StyledContainer>
        </>
    )
}

export default Container