import styled from 'styled-components'
import Home from '../Home'
import { useSpacing } from '../../contexts/SpacingContext'
import shadow from '../../components/styleguide/atoms/shadows'
import { palette } from '../../components/styleguide/atoms/colors'
const StyledContainer = styled.div`
z-index:${props=>props.newTaskModal?'1':'0'};
flex-direction:column;
align-items:center;
justify-content:flex-start;
padding:32px ${props=>props.margin};
position:fixed;
top:40px;
background:rgba(100%,100%,100%,${props=>props.newTaskModal?'70%':'0'});
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

    .MuiFormControl-root{
        margin-bottom:16px;
        width:100%;
    }
    .buttonGroup{
        display:flex;
        align-items:center;
        justify-content:space-around;
        width:100%;
        button{
            border-color:${palette.error.main};
            color:${palette.error.main};
            &:hover{
                border-color:${palette.error.dark};
                color:${palette.error.dark};
            }
        }
        .save{
            background:${palette.primary.main};
            color:${palette.primary.onMainText};
            &:hover{
                background:${palette.primary.dark};
                color:${palette.primary.onDarkText};
            }
            
        }
    }
    transform: translateY(${props=>props.newTaskModal?'0':'-100vh'});
    transition:0.5s;
`
const Container = (props) => {
    const {margin} = useSpacing()
    return(
        <>
            <StyledContainer newTaskModal={props.newTaskModal} margin={margin}>
                <Modal onSubmit={props.onSubmit} newTaskModal={props.newTaskModal} margin={margin}>
                    {props.children}
                </Modal>
            </StyledContainer>
        </>
    )
}

export default Container