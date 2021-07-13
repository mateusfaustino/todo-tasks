import styled from "styled-components"
const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:50vh;
    margin-top: 48px;
    svg{
        width:auto;
        height:100%;
        #ship{
            animation: ship-comming 5s ease-in-out;
            transform-origin:bottom;
            transform-box:fill-box;
        }
        
        #wave-up{
            animation: up-wave 2s ease-in-out infinite alternate;
            transform-origin:center;
            transform-box:fill-box;
        }
        #wave-center{
            animation: center-wave 2s ease-in-out infinite alternate;
            transform-origin:center;
            transform-box:fill-box;
        }
        #wave-down{
            animation: down-wave 2s ease-in-out infinite alternate;
            transform-origin:center;
            transform-box:fill-box;
        }
    }
    @keyframes ship-comming {
        from{
            transform:scale(0) translateY(0px) rotate(0deg) ;
        }
        to{
            transform:scale(1) translateY(0) rotate(0deg) ;
        }
    }
    
    @keyframes up-wave {
        from{
            transform:scale(1) translateX(2px) rotate(0deg) ;
        }
        to{
            transform:scale(1) translateX(0) rotate(0deg) ;
        }
    }
    @keyframes center-wave {
        from{
            transform:scale(1) translateX(-2px) rotate(0deg) ;
        }
        to{
            transform:scale(1) translateX(0) rotate(0deg) ;
        }
    }
    @keyframes down-wave {
        from{
            transform:scale(1) translateX(2px) rotate(0deg) ;
        }
        to{
            transform:scale(1) translateX(0) rotate(0deg) ;
        }
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